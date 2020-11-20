import React, { useEffect } from 'react';
import styles from './Performance.module.scss';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';

const Performance = () => {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={styles.detailContainer}>
            <div className={styles.performanceHeading}>
                <span onClick={() => history.push('/campaigns')}>Campaigns</span>
                <ChevronRight />
                <span onClick={() => history.push('/campaignDetail')}>Campaigns Name</span>
                <ChevronRight />
                <span>Performance</span>
            </div>

            <div className={styles.performanceContainer}>
                <h1>Report Name</h1>
                <div>
                    <p>Tableau Integration</p>
                </div>
            </div>
            <div className={styles.performanceContainer}>
                <h1>Report Name</h1>
                <div>
                    <p>Tableau Integration</p>
                </div>
            </div>
        </div>
    );
};

export default Performance;