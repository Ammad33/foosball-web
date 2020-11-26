import React from 'react';
import { Edit } from 'react-feather';
import styles from './CampaignDetail.module.scss';
import moment from 'moment';
import clsx from 'clsx';

const CampaignDetail = ({ children, handleEdit, campaign }) => {
  return (
    <div
      className={clsx(
        styles.campaignContainer,
        children ? styles.withChildHeight : styles.withNoChildHeight
      )}
    >
      <div className={styles.headerContainer}>
        <h1>Campaign Details</h1>
        <Edit onClick={() => handleEdit(1)} />
      </div>
      <div className={styles.detailSubContent}>
        <h6>Campaign Name</h6>
        <p>{campaign && campaign.name}</p>
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.detailSubContent}>
          <h6>StartDate, Time</h6>
          <p>{campaign && moment(campaign.startDate * 1000).format('MM/DD/YYYY, HH:mm')}</p>
        </div>
        <div className={styles.detailSubContent}>
          <h6>End Date, Time</h6>
          <p>{campaign && moment(campaign.endDate * 1000).format('MM/DD/YYYY, HH:mm' )}</p>
        </div>
      </div>
      <div className={styles.detailSubContent}>
        <h6>Promotion Discount</h6>
        <p>15%</p>
      </div>
      {children ? (
        <div className={styles.detailSubContent}>{children}</div>
      ) : (
          ''
        )}
    </div>
  );
};

export default CampaignDetail;
