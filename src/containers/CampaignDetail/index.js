import React, { useState, useContext, useEffect } from 'react';
import clsx from 'clsx';
import { Grid, Avatar, Chip, Card, CardContent } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './CampaignsDetails.module.scss';
import edit from '../../assets/edit.svg';
import BrandCampaignDetail from './BrandCampaignDetail';
import { useHistory, useParams } from 'react-router-dom';
import InfluencerCampaignDetail from './InfluencerCampaignDetail';
import { Select, MenuItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Link2, ChevronDown } from 'react-feather';
import { RootContext } from '../../context/RootContext';
import SelectMenu from '../../components/SelectMenu';
import { API } from 'aws-amplify';

const CampaignDetail = () => {
  const [status, setStatus] = useState('');
  const [addCampaign, setAddCampagin] = useState(false);

  const { campaignId } = useParams();
  const [brandState, setBrandState] = useState(true);
  const { setActiveCampaign, brandId } = useContext(RootContext);

  const [data, setData] = useState(null);

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
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
            }
            brand {
              id
            }
            negotiables {
              campaign_duration
              monthly_retainer_fee
              post_fee
              post_frequency
              revenue_share
              story_fee
            }
          }
      }`,
      });
      setData(campaign.data.campaign);
      if (campaign.data && campaign.data !== null && campaign.data.campaign !== null) {
        setStatus(campaign.data.campaign.status ? campaign.data.campaign.status : 'CLOSED')
      }
    } catch (e) { }
  };

  useEffect(() => {
    getCampaign();
  }, [addCampaign]);


  const handleBrandState = () => {
    setBrandState(brandState ? false : true);
  };
  useEffect(() => {
    setActiveCampaign(campaignId);
  }, []);

  return (
    <div className={styles.detailContainer}>
      <div style={{ display: 'flex', gap: '30px' }}>
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
          <MenuItem value='' disabled > Select Status</MenuItem>
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
        <BrandCampaignDetail status={status} data={data} addCampaign={addCampaign} setAddCampagin={setAddCampagin} />
      ) : (
          <InfluencerCampaignDetail status={status} data={data} addCampaign={addCampaign} setAddCampagin={setAddCampagin} />
        )}
    </div>
  );
};

export default CampaignDetail;
