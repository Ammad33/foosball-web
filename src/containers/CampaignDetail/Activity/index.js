import React from 'react';
import styles from './Activity.module.scss';

const Activity = ({ seeAll, onClick }) => {

    return (
        <div className={styles.activityContainer}>
            <h1>Activity</h1>
            <div className={styles.mainDiv}>
                {seeAll !== false ?
                    <>
                        <div className={styles.activitySubContent}>
                            <span>9/28</span>
                            <div></div>
                            <p>Campaign draft created </p>
                        </div>
                        <div className={styles.border} />
                        <div className={styles.activitySubContent}>
                            <span>9/27</span>
                            <div></div>
                            <p>Brand counter offer</p>
                        </div>
                        <div className={styles.border} />
                        <div className={styles.activitySubContent}>
                            <span>9/26</span>
                            <div></div>
                            <p>You counter offer</p>
                        </div>
                    </>
                    : <div className={styles.activitySubContent}>
                        <span>9/28</span>
                        <div></div>
                        <p>Campaign draft created </p>
                    </div>}
            </div>
            {seeAll !== false && <button onClick={() => onClick('Activity')}>See all</button>}
        </div>
    )
};

export default Activity;