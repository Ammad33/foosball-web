import React from 'react';
import clsx from 'clsx';
import { Grid, Avatar, Chip, Card, CardContent } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './CampaignsDetails.module.scss';
import edit from '../../assets/edit.svg';
import BrandCampaignDetail from './BrandCampaignDetail';
import { useHistory } from 'react-router-dom';
import InfluencerCampaignDetail from './InfluencerCampaignDetail';

const CampaignDetail = () => {
  const history = useHistory();

  return (
    <div className={styles.detailContainer}>
      {/* <InfluencerCampaignDetail /> */}
      <BrandCampaignDetail />
    </div>
  );
};

export default CampaignDetail;
