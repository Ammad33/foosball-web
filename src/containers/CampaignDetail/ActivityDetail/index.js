import React from 'react';
import styles from './ActivityDetail.module.scss';

const ActivityDetail = () => {

    return (
        <div className={styles.activityContainer}>
            <h1>Activity</h1>
            <div className={styles.mainDiv}>
                <div className={styles.activitySubContent}>
                    <span>10/3</span>
                    <div></div>
                    <p>You uploaded your first post</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>10/2</span>
                    <div></div>
                    <p>Campaign went live</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>10/1</span>
                    <div></div>
                    <p>Brand signed the contarct</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>9/30</span>
                    <div></div>
                    <p>You signed the contarct</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>9/29</span>
                    <div></div>
                    <p>The brand counter offer</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>9/28</span>
                    <div></div>
                    <p>You counter offered</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>9/27</span>
                    <div></div>
                    <p>The brand counter offer</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>9/26</span>
                    <div></div>
                    <p>You counter offer</p>
                </div>
                <div className={styles.border} />
                <div className={styles.activitySubContent}>
                    <span>9/25</span>
                    <div></div>
                    <p>Invitation Received</p>
                </div>
            </div>
        </div>
    )
};

export default ActivityDetail;