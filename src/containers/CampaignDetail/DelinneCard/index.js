import React from 'react';
import styles from './Declinee.module.scss';

const DeclineeCard = () => {
    return (
        <div className={styles.declineContainer}>
            <h1>You decline this campaign</h1>
            <p className={styles.firstp}>You declined this campaign on 10/3/2020.</p>
        </div>)
};

export default DeclineeCard