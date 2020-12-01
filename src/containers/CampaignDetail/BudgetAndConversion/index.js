import React from 'react';
import { Edit } from 'react-feather';
import styles from './BudgetAndConversion.module.scss';

const BudgetAndConversion = ({ handleEdit, data }) => {
  return (
    <div className={styles.mainContainer}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Budget And Conversion</h3>
        <Edit onClick={() => handleEdit(3)} />
      </div>
      <div className={styles.section}>
        <h5>Budget</h5>
        <p>${data?.budget.amount}</p>
      </div>
      <div className={styles.section}>
        <h5>Target Gross Sales Goal</h5>
        <p>${data?.targetGrossSales.amount}</p>
      </div>
    </div>
  );
};

export default BudgetAndConversion;
