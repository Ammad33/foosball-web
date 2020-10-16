import React, { useState } from 'react';
import clsx from 'clsx';
import { RootContext } from '../../context/RootContext';
import { Grid, Container,Chip,Card,CardContent } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './CampaignsDetails.module.scss';


const CampaignDetail = () => {
 
  return (
    <div className={styles.campaignsContainer}>
      <div className={styles.CampaignHeading}>
        <span>Campaigns</span>
        <ArrowForwardIosIcon fontSize="small" />
        <span>Campaigns Name</span>
      </div>
      <div className={styles.subCampaignSubHeading}>
          <p>Promotion: 15%</p>
          <div className={styles.borderDiv} ></div>
          <Chip
              className={clsx(
                styles.campaignStatus,
                styles[`chipDraft`]
              )}
              label={'Draft'}
            />
      </div>
      
      <Grid container spacing={3}>
        <Grid className={styles.gridItem}>
        <Card className={styles.compensationCard}>
      <CardContent className={styles.compensationCardContent}>
     <h1>Compensation not yet defined</h1>
     <p> Pickup where left off and define how you will Compensate <br/> the influencer.</p>
     <button>Finalize Campaign</button>
     </CardContent>
     </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CampaignDetail;
