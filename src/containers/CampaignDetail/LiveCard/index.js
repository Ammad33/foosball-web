import React from 'react';
import styles from './LiveCard.module.scss';
import { AlertCircle } from 'react-feather';

const LiveCard = () => {
    return (
        <div className={styles.liveContainer}>
            <h1><AlertCircle /> Add Your second post</h1>
            <p className={styles.firstp}>Upload a screenshot and a link to your post for the brand to see</p>
            <button className={styles.accept} >Accept</button>
        </div>)
};

export default LiveCard