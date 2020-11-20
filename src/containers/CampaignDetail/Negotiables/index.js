import React from 'react';
import styles from './Negotiables.module.scss';

const Negotiables = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Negotiables</h1>
      <p>Post Fee</p>
      <p>Story Fee</p>
      <p>Campaign Duration</p>
    </div>
  );
};

export default Negotiables;
