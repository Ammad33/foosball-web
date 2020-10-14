import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './CampaingsCard.module.scss';
import { Avatar } from '@material-ui/core';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';

const CampaignsCard = ({ campaign }) => {
  return (
    <Card className={styles.campaignCard}>
      <CardContent className={styles.cardContent}>
        <div className={styles.cardStatus}>
          {campaign.showWarningStatus ? (
            <span className={styles.alertBadge}>
              <ErrorOutlineOutlinedIcon className={styles.alertIcon} />
              Action Required
            </span>
          ) : (
            ''
          )}
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.campaignInfo}>
            <span className={styles.campaignName}>{campaign.name}</span>
            <span className={styles.campaignNumber}>
              <small>{campaign.id}</small>
            </span>
            <Chip
              className={clsx(
                styles.campaignStatus,
                styles[`chip${campaign.status}`]
              )}
              label={campaign.status}
            />
          </div>
          <div className={styles.personInfo}>
            <Avatar
              className={styles.personAvatar}
              src={campaign.influencerImg}
            />
            <span className={styles.mediaTag}>@{campaign.mediaTag}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignsCard;
