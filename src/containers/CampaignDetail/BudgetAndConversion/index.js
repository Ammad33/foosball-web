import React from 'react';
import styles from './BudgetAndConversion.module.scss';

const BudgetAndConversion = () => {
  return (
    <div className={styles.mainContainer}>
      <h3>Budget And Conversion</h3>
      <div className={styles.section}>
        <h5>Budget</h5>
        <p>$2,000</p>
      </div>
      <div className={styles.section}>
        <h5>Target Gross Sales Goal</h5>
        <p>$100,000</p>
      </div>
    </div>
  );
};

export default BudgetAndConversion;
