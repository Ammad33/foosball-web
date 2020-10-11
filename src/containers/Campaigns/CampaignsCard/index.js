import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from './CampaingsCard.module.scss';

const CampaignsCard = () => {
  return (
    <Card className={styles.campaignCard}>
      <CardContent>Content</CardContent>
      <CardActions>Actions</CardActions>
    </Card>
  );
};

export default CampaignsCard;
