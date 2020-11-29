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

const CampaignDetail = () => {
  const history = useHistory();
  const [status, setStatus] = useState('Closed');

  const { campaignId } = useParams();
  const [brandState, setBrandState] = useState(true);
  const { setActiveCampaign } = useContext(RootContext);

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
          {/* <MenuItem value='' ></MenuItem> */}
          <MenuItem value={'Draft'}>Draft</MenuItem>
          <MenuItem value={'Closed'}>Closed</MenuItem>
          <MenuItem value={'Declined'}>Declined</MenuItem>
          <MenuItem value={'Invite'}>Invite</MenuItem>
          <MenuItem value={'Live'}>Live</MenuItem>
          <MenuItem value={'Lost'}>Lost</MenuItem>
          <MenuItem value={'Pending'}>Pending</MenuItem>
        </Select>
      </div>
      {brandState ? (
        <BrandCampaignDetail status={status} campaignId={campaignId} />
      ) : (
        <InfluencerCampaignDetail status={status} campaignId={campaignId} />
      )}
    </div>
  );
};

export default CampaignDetail;
