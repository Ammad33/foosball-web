import React from 'react';
import BrandConnectAccounts from './BrandConnectAccounts';
import InfluencerConnectAccounts from './InfluencerConnectAccounts';
import styles from './ConnectedAccounts.module.scss';

const ConnectedAccounts = () => {
  return (
    <div className={styles.mainContainer}>
      <BrandConnectAccounts />
      {/* <InfluencerConnectAccounts /> */}
    </div>
  );
};

export default ConnectedAccounts;
