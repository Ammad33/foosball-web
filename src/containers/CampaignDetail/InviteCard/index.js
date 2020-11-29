import React from 'react';
import styles from './InviteCard.module.scss';

const InviteCard = () => {
    return (
        <div className={styles.declineContainer}>
            <h1>Care of has inivted you to a campaign</h1>
            <p className={styles.firstp}>"Hi sam, we are so excited for the chance to work with you, we.</p>
            <p className={styles.secondp}>love your content and hope that you see value in working with</p>
            <div className={styles.buttonContainer}>
                <button className={styles.accept} >Accept</button>
                <button className={styles.nego}>Negotiate</button>
                <button className={styles.decline} >Decline</button>
            </div>
        </div>)
};

export default InviteCard