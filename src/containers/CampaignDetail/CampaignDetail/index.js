import React from 'react';
import { Edit } from 'react-feather';
import styles from './CampaignDetail.module.scss';
import clsx from 'clsx';

const CampaignDetail = ({ children }) => {
  return (
    <div
      className={clsx(
        styles.campaignContainer,
        children ? styles.withChildHeight : styles.withNoChildHeight
      )}
    >
      <div className={styles.headerContainer}>
        <h1>Campaign Details</h1>
        <Edit />
      </div>
      <div className={styles.detailSubContent}>
        <h6>Campaign Name</h6>
        <p>Campaign name here</p>
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.detailSubContent}>
          <h6>StartDate, Time</h6>
          <p>10/10/2020, 24:00</p>
        </div>
        <div className={styles.detailSubContent}>
          <h6>End Date, Time</h6>
          <p>10/30/2020, 24:00</p>
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
