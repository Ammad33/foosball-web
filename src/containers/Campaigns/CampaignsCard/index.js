import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from './CampaingsCard.module.scss';

const CampaignsCard = () => {
  return (
    <Card className={styles.campaignCard}>
      <CardContent className={styles.cardContent}>
        <div className={styles.cardStatus}>
          <span className={styles.altertAction}>Action Required</span>
        </div>
        <div className={styles.cardDetails}> content </div>
      </CardContent>
    </Card>
  );
};

export default CampaignsCard;
