import React, { useEffect } from 'react';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';
import styles from './ReviewBrandMicrosite.module.scss';
import Button from '@material-ui/core/Button';

const ReviewBrandMicrosite = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.crumsContainer}>
        <span onClick={() => history.push('/campaigns')}>Campaigns</span>
        <ChevronRight />
        <span onClick={() => history.push('/campaignDetail')}>
          Campaigns Name
        </span>
        <ChevronRight />
        <span>Review Microsite</span>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.micrositeContainer}>
          Microsite will come into this container
        </div>
        <div className={styles.actionsContainer}>
          <Button className={styles.declineBtn}>Default</Button>
          <button className={styles.approveBtn}>Approve</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBrandMicrosite;
