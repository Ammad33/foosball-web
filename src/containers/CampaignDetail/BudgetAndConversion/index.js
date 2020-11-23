import React from 'react';
import { Edit } from 'react-feather';
import styles from './BudgetAndConversion.module.scss';

const BudgetAndConversion = ({ handleEdit }) => {
  return (
    <div className={styles.mainContainer}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Budget And Conversion</h3>
        <Edit onClick={() => handleEdit(3)} />
      </div>
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
