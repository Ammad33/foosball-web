import React from 'react';
import styles from './CompensationDetail.module.scss';

const CompensationDetail = () => {
    return (<div className={styles.compensationContainer}>
        <h1>Compensation</h1>
        <div className={styles.header}>
            <h6>Compensation Type 1</h6>
            <h6>$2,000*</h6>
        </div>
        <div className={styles.detailSubContent}>
            <h6>Compensation Type</h6>
            <p>Revenue Share</p>
        </div>
        <div className={styles.detailSubContent}>
            <h6>Revenue Share Percentage</h6>
            <p>2%</p>
        </div>
        <div className={styles.header}>
            <h6>Compensation Type 2</h6>
            <h6>$600</h6>
        </div>
        <div className={styles.detailSubContent}>
            <h6>Compensation Type</h6>
            <p>Revenue Share</p>
        </div>
        <div className={styles.detailSubContent}>
            <h6>Amount Per Post</h6>
            <p>2%</p>
        </div>
        <div className={styles.header}>
            <h6>Total Comp Estimate:</h6>
            <h6>$2,600</h6>
        </div>
    </div>);
};

export default CompensationDetail;