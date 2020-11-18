import React from 'react';
import styles from './Compensation.module.scss';
import { Edit } from 'react-feather';

const Compensation = ({ onClick }) => {
    return (<div className={styles.compensationContainer}>
        <div className={styles.headerContainer}>
            <h1>Compensation</h1>
            <Edit />
        </div>
        <div className={styles.conatianer}>
            <div className={styles.detailSubContent}>
                <h6>Compensation Type</h6>
                <p>Revenue Share</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Revenue Share Percentage</h6>
                <p>2%</p>
            </div>
        </div>
        <button onClick={() => onClick('Compensation')}>See all</button>
    </div>);
};

export default Compensation;