import React, { useState, useContext, useEffect } from 'react';
import styles from './CampaignsDetails.module.scss';
import BrandCampaignDetail from './BrandCampaignDetail';
import { useParams, useHistory } from 'react-router-dom';
import InfluencerCampaignDetail from './InfluencerCampaignDetail';
import { Select, MenuItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { RootContext } from '../../context/RootContext';
import SelectMenu from '../../components/SelectMenu';
import { API, graphqlOperation } from 'aws-amplify';
import _ from 'lodash';

const CampaignDetail = () => {
  const history = useHistory();
  const [status, setStatus] = useState('');
  const [addCampaign, setAddCampagin] = useState(false);

  const { campaignId } = useParams();
  const [brandState, setBrandState] = useState(true);
  const { setActiveCampaign, brandId } = useContext(RootContext);
  const [selectedMembers, setSelectedMemebers] = useState([]);
  const [team, setTeam] = useState([]);
  const [search, setSearch] = useState('');
  const [headingValue, setHeadingValue] = useState('');

  const [data, setData] = useState(null);

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    const members = [...team];
    setTeam(members.filter((item) => item.email.includes(e.target.value)));
    if (e.target.value === '') {
      let teamData = await getTeam();

      teamData = teamData.map((item) => item.user);

      if (
        selectedMembers &&
        selectedMembers !== null &&
        selectedMembers.length !== 0
      ) {
        let data =
          teamData &&
          teamData !== null &&
          teamData.map((item) => {
            const index = selectedMembers.findIndex(
              (sec) => sec.email === item.email
            );
            if (index !== -1) {
              return;
            } else {
              return item;
            }
          });
        setTeam(_.compact(data));
      } else {
        setTeam(teamData);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await API.graphql(
        graphqlOperation(
          `mutation deleteCampaign($brandId: ID!, $id: ID!) {
          deleteCampaign(brandId: $brandId, id:$id)
        }`,
          {
            brandId: brandId,
            id: campaignId,
          }
        )
      );
      history.push('/');
    } catch (e) {
      console.log('delete campaign error ', e);
    }
  };

  const updateCampaign = async () => {
    try {
      const data = {
        brandId,
        id: campaignId,
        team: selectedMembers.map((item) => item.id),
      };

      await API.graphql(
        graphqlOperation(
          `mutation updateCampaign($input : UpdateCampaignInput!) {
            updateCampaign(input: $input) {
              name
            }
        }`,
          {
            input: data,
          }
        )
      );
      getCampaign();
    } catch (e) {
      console.log('update campaign error ', e);
    }
  };

  const getCampaign = async () => {
    try {
      const campaign = await API.graphql({
        query: `{
          campaign(brandId: "${brandId}", id: "${campaignId}") {
            id
						name
						status
            startDate
            endDate
            invitationMessage
            compensation {
              ... on CompRevenueShare {
                __typename
                percentage
              }
              ... on CompCashPerPost {
                __typename
                amount {
                  amount
                  currency
                }
              }
              ... on CompCashPerMonthlyDeliverable {
                __typename
                amount {
                  amount
                  currency
                }
              }
              ... on CompGiftCard {
                __typename
                amount {
                  amount
                  currency
                }
                code
              }
            }
            discount {
              ... on PercentageDiscount {
                __typename
                percentage
              }
              ... on FlatDiscount {
                __typename
                amount {
                  amount
                  currency
                }
              }
            }
            budget {
              amount
              currency
            }
            targetGrossSales {
              amount
              currency
            }
            brandTeam {
              id
              imageUrl
              fullName
              email
            }
            brand {
              imageUrl
              id
              name
            }
            negotiables {
              campaign_duration
              monthly_retainer_fee
              post_fee
              post_frequency
              revenue_share
              story_fee
            }
            deliverables {
              brandTag
              deadlineDate
              deliverableType
              description
              frameContentType
              framesRequired
              frequency
              hashTag
              id
              platform
              posts
            }
            influencer {
              imageUrl
              name
              id
            }
          }
      }`,
      });

      console.log(campaign.data.campaign);

      campaign.data.campaign.deliverables.map((deliverable) => {
        deliverable.deliverableType =
          deliverable.deliverableType.charAt(0).toUpperCase() +
          deliverable.deliverableType.toLowerCase().slice(1);
        deliverable.frameContentType =
          deliverable.frameContentType.charAt(0).toUpperCase() +
          deliverable.frameContentType.toLowerCase().slice(1);
        deliverable.platform =
          deliverable.platform.charAt(0).toUpperCase() +
          deliverable.platform.toLowerCase().slice(1);
        deliverable.deadlineDate = new Date(
          deliverable.deadlineDate * 1000
        ).toDateString();
      });

      setData(campaign.data.campaign);
      if (
        campaign.data &&
        campaign.data !== null &&
        campaign.data.campaign !== null
      ) {
        setStatus(
          campaign.data.campaign.status
            ? campaign.data.campaign.status
            : 'CLOSED'
        );

        setSelectedMemebers(
          campaign.data.campaign.brandTeam
            ? campaign.data.campaign.brandTeam
            : []
        );

        let teamData = await getTeam();
        teamData = teamData.map((item) => item.user);

        if (
          campaign.data.campaign.brandTeam &&
          campaign.data.campaign.brandTeam !== null &&
          campaign.data.campaign.brandTeam.length !== 0
        ) {
          let data =
            teamData &&
            teamData !== null &&
            teamData.map((item) => {
              const index = campaign.data.campaign.brandTeam.findIndex(
                (sec) => sec.email === item.email
              );
              console.log(index);
              if (index !== -1) {
                return;
              } else {
                return item;
              }
            });
          setTeam(_.compact(data));
        } else {
          setTeam(teamData);
        }
      }
    } catch (e) {}
  };

  const getTeam = async () => {
    try {
      const team = await API.graphql({
        query: `{
          brand(id:"${brandId}") {
            users {
              user {
                imageUrl
                id
                fullName
                email
              }
            }
          }
        }`,
      });
      if (team.data !== null && team.data.brand !== null) {
        return team.data.brand.users;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addInTeam = (memeber) => {
    const members = [...selectedMembers];
    members.push(memeber);
    setSelectedMemebers(members);
    const total = [...team];
    const index = total.findIndex((item) => item.email === memeber.email);
    total.splice(index, 1);
    setTeam(total);
  };

  const removeInTeam = (memeber) => {
    const total = [...selectedMembers];
    const index = total.findIndex((item) => item.email === memeber.email);
    total.splice(index, 1);
    setSelectedMemebers(total);
    const members = [...team];
    members.push(memeber);
    setTeam(members);
  };

  useEffect(() => {
    getCampaign();
  }, [addCampaign]);

  const [setAll, setSetAll] = useState(false);

  useEffect(() => {
    setSetAll(false);
    if (data && data !== null) {
      let negotialble = true;
      Object.values(data.negotiables).map((item) => {
        if (item === true) {
          negotialble = false;
        }
      });

      if (
        ((data.discount &&
          data.discount.percentage &&
          data.discount.percentage !== '') ||
          (data.discount.amount && data.discount.amount.amount !== '')) &&
        data.invitationMessage !== '' &&
        data.budget.amount !== '' &&
        data.targetGrossSales.amount !== '' &&
        data.deliverables &&
        data.deliverables.length !== 0 &&
        data.compensation &&
        data.compensation.length !== 0 &&
        negotialble === false &&
        data.influencer !== null
      ) {
        setSetAll(true);
      }
    }
  }, [data]);

  const handleHeading = () => {
    let negotialble = true;
    Object.values(data.negotiables).forEach((item) => {
      if (item === true) {
        negotialble = false;
      }
    });

    if (
      (data.discount &&
        data.discount.percentage &&
        data.discount.percentage === '') ||
      (data.discount.amount && data.discount.amount.amount === '') ||
      data.invitationMessage === ''
    ) {
      setHeadingValue('Campaign Detail');
    } else if (data.budget.amount === '') {
      setHeadingValue('Budget');
    } else if (data.targetGrossSales.amount === '') {
      setHeadingValue('Target Gross Sale');
    } else if (data.deliverables && data.deliverables.length === 0) {
      setHeadingValue('Deliverable');
    } else if (data.compensation && data.compensation.length === 0) {
      setHeadingValue('Compensation');
    } else if (negotialble) {
      setHeadingValue('Negotiable');
    } else if (data.influencer === null) {
      setHeadingValue('Influencer');
    }
  };

  const handleBrandState = () => {
    setBrandState(brandState ? false : true);
  };

  useEffect(() => {
    setActiveCampaign(campaignId);
  }, []);

  useEffect(() => {
    if (data !== null) {
      handleHeading();
    }
  }, [data]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.toggleStatusContainer}>
        <Link onClick={handleBrandState}>
          {' '}
          Toggle Campiagn Detail influencer
        </Link>
        <Select
          id='outlined-basic'
          defaultValue={'Percentage'}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          variant='outlined'
          MenuProps={{ variant: 'menu' }}
          input={<SelectMenu />}
        >
          <MenuItem value='' disabled>
            {' '}
            Select Status
          </MenuItem>
          <MenuItem value={'DRAFT'}>Draft</MenuItem>
          <MenuItem value={'PENDING'}>Pending</MenuItem>
          <MenuItem value={'CLOSED'}>Closed</MenuItem>
          <MenuItem value={'DECLINED'}>Declined</MenuItem>
          <MenuItem value={'INVITE'}>Invite</MenuItem>
          <MenuItem value={'LIVE'}>Live</MenuItem>
          <MenuItem value={'LOST'}>Lost</MenuItem>
        </Select>
      </div>
      {brandState ? (
        <BrandCampaignDetail
          status={status}
          data={data}
          addCampaign={addCampaign}
          setAddCampagin={setAddCampagin}
          handleDelete={handleDelete}
          selectedMembers={selectedMembers}
          team={team}
          addInTeam={addInTeam}
          removeInTeam={removeInTeam}
          search={search}
          handleSearch={handleSearch}
          updateCampaign={updateCampaign}
          setAll={setAll}
          headingValue={headingValue}
        />
      ) : (
        <InfluencerCampaignDetail
          status={status}
          data={data}
          addCampaign={addCampaign}
          setAddCampagin={setAddCampagin}
          handleDelete={handleDelete}
          selectedMembers={selectedMembers}
          team={team}
          addInTeam={addInTeam}
          removeInTeam={removeInTeam}
          search={search}
          handleSearch={handleSearch}
          updateCampaign={updateCampaign}
          setAll={setAll}
          headingValue={headingValue}
        />
      )}
    </div>
  );
};

export default CampaignDetail;
