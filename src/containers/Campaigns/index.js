import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CampaignsCard from './CampaignsCard';
import AddIcon from '@material-ui/icons/Add';
import styles from './Campaings.module.scss';
import AddCampaign from '../AddCampaign';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import SVG from 'react-inlinesvg';
import { RootContext } from '../../context/RootContext';

const IconCampaign = () => {
  return <SVG src={require('../../assets/Campaigns_large.svg')} />;
};

const Campaigns = () => {
  const history = useHistory();
  const [active, setActive] = useState('ALL');
  const [campaigns, setCampaigns] = useState([]);
  const [bkupCampaigns, setBkupCampaigns] = useState([]);
  const [addCampaign, setAddCampagin] = useState(false);
  const [meData, setMeData] = useState([]);
  const {
    brandId,
    setBrands,
    searchValue,
    brandType,
    setInfluencers,
    setBrandIdd,
    setBrandName,
    setShowLoader,
  } = useContext(RootContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!brandId || brandId === '') {
      getMeData();
    }
  }, []);

  const getMeData = async () => {
    try {
      const mydata = await API.graphql({
        query: `{
						me {
							email
							fullName
							id
							organizations {
								organization {
									id
									name
									__typename
									... on Influencer {
										invites {
										name
										}
									}
									imageUrl
									email
									roles {
										id
									}
								}
							}
							about
							age
							companyTitle
							imageUrl
							joined
							modified
							phoneNumber
						}
				}`,
      });

      let brandsData = [];
      let influencersData = [];
      mydata.data.me.organizations !== null &&
        mydata.data.me.organizations.forEach((item) => {
          if (item.organization.__typename == 'Influencer') {
            influencersData.push(item);
          } else if (item.organization.__typename === 'Brand') {
            brandsData.push(item);
          }
        });
      setBrands(brandsData);
      setInfluencers(influencersData);
      if (brandsData.length > 0) {
        setBrandName(brandsData[0].organization.name);
        setBrandIdd(brandsData[0].organization.id);
      } else if (influencersData.length > 0) {
        setBrandName(influencersData[0].organization.name);
        setBrandIdd(influencersData[0].organization.id);
      }
      setMeData(mydata.data.me.organizations);
    } catch (e) {
      if (e.data) {
        let brandsData = [];
        let influencersData = [];
        e.data.me.organizations !== null &&
          e.data.me.organizations.forEach((item) => {
            if (item.organization.__typename == 'Influencer') {
              influencersData.push(item);
            } else if (item.organization.__typename === 'Brand') {
              brandsData.push(item);
            }
          });
        setBrands(brandsData);
        setInfluencers(influencersData);
        if (brandsData.length > 0) {
          setBrandName(brandsData[0].organization.name);
          setBrandIdd(brandsData[0].organization.id);
        } else if (influencersData.length > 0) {
          setBrandName(influencersData[0].organization.name);
          setBrandIdd(influencersData[0].organization.id);
        }
        setMeData(e.data.me.organizations);
      }
    }
  };
  const getCampaigns = async () => {
    try {
      setLoading(true);
      setShowLoader(true);
      const campaigns = await API.graphql({
        query: `{
        campaigns(brandId: "${brandId}") {
          campaigns {
            name
            description
            id
            status
            startDate
            endDate
          }
        }
      }`,
      });
      setCampaigns(campaigns.data.campaigns.campaigns);
      setBkupCampaigns(campaigns.data.campaigns.campaigns);
      setLoading(false);
      setShowLoader(false);
    } catch (e) {
      setLoading(false);
      setShowLoader(false);
    }
  };

  useEffect(() => {
    if (brandId !== '') {
      setCampaigns([]);
      getCampaigns();
    }
  }, [brandId, addCampaign]);

  useEffect(() => {
    searchCampaigns();
  }, [searchValue]);

  const searchCampaigns = () => {
    let copiedCampaigns = [...bkupCampaigns];
    if (searchValue.trim()) {
      copiedCampaigns = copiedCampaigns.filter((campaign) => {
        return (
          campaign.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
      });
    }
    setCampaigns(copiedCampaigns);
  };

  const handleDelete = async (campaignId) => {
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
      getCampaigns();
    } catch (e) {
      console.log('delete campaign error ', e);
    }
  };

  return (
    <>
      {addCampaign && (
        <AddCampaign
          open={addCampaign}
          handleCancel={() => setAddCampagin(false)}
          brandId={brandId}
        />
      )}
      <div className={styles.campaignsContainer}>
        <div className={styles.CampaignHeadingContainer}>
          <div className={styles.CampaignHeading}>
            <span>Campaigns</span>
            <p>
              Most recent <ExpandMoreIcon fontSize='small' />
            </p>
          </div>
          {brandType === 'Brand' ? (
            <button onClick={() => setAddCampagin(true)}>
              <AddIcon /> New Campaign
            </button>
          ) : (
            ''
          )}
        </div>
        <div className={styles.CampaignHeadingButton}>
          <button
            className={active === 'ALL' ? styles.allActive : ''}
            onClick={() => setActive('ALL')}
          >
            All
          </button>
          {brandType === 'Brand' ? (
            <button
              className={active === 'DRAFT' ? styles.draftActive : ''}
              onClick={() => setActive('DRAFT')}
            >
              Draft
            </button>
          ) : (
            <button
              className={active === 'INVITE' ? styles.inviteActive : ''}
              onClick={() => setActive('INVITE')}
            >
              Invite
            </button>
          )}
          <button
            className={active === 'PENDING' ? styles.pendingActive : ''}
            onClick={() => setActive('PENDING')}
          >
            Pending
          </button>
          <button
            className={active === 'LIVE' ? styles.liveActive : ''}
            onClick={() => setActive('LIVE')}
          >
            Live
          </button>
          <button
            className={active === 'CLOSED' ? styles.closedActive : ''}
            onClick={() => setActive('CLOSED')}
          >
            Closed
          </button>
          {brandType === 'Brand' ? (
            <button
              className={active === 'LAST' ? styles.lostActive : ''}
              onClick={() => setActive('LAST')}
            >
              Lost
            </button>
          ) : (
            <button
              className={active === 'DECLINED' ? styles.declinedActive : ''}
              onClick={() => setActive('DECLINED')}
            >
              Declined
            </button>
          )}
        </div>
        {campaigns.length == 0 && !loading ? (
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{ paddingTop: '15%' }}
          >
            <Grid item xs={12}>
              <IconCampaign />
            </Grid>
            <Grid item xs={12}>
              <div className={styles.noCampaignYet}>No Campaigns Yet</div>
            </Grid>
            <Grid item xs={12}>
              <div className={styles.noCampaignYetHelper}>
                Click on the button New Campaign button to get started creating
                a campaign.
              </div>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
        <Grid container spacing={3}>
          {campaigns.length > 0 &&
            campaigns.map((campaign) => {
              if (campaign.status !== active && active !== 'ALL') {
                return null;
              }
              return (
                <Grid className={styles.gridItem} item key={campaign.id}>
                  <CampaignsCard
                    campaign={campaign}
                    onClick={() =>
                      history.push(`/campaignDetail/${campaign.id}`)
                    }
                    handleDelete={handleDelete}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Campaigns;
