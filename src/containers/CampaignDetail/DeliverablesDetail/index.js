import React from 'react';
import styles from './DeliverablesDetail.module.scss';

const DeliverablesDetail = () => {
    return (
        <div className={styles.deliverableContainer}>

            <h1>Deliverables</h1>
            <h6 className={styles.subHeader}>
                Deliverable1
             </h6>
            <div className={styles.detailSubContent}>
                <h6>Deliverable Deadline</h6>
                <p>October 30, 2020</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Social Platform</h6>
                <p>Instagram</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Campaign Type</h6>
                <p>Story</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Frame Content Type</h6>
                <p>Video</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Frames Required</h6>
                <p>5</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Brand tag</h6>
                <p>Required- @shopgoodtobe</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Hashtag</h6>
                <p>Required- @shopgoodtobe</p>
            </div>
            <div className={styles.detailSubContent} style={{ marginBottom: '20px' }}>
                <h6>Post Frequency</h6>
                <p>5 posts every 1 month</p>
            </div>

            <h6 className={styles.subHeader}>
                Deliverable2
             </h6>
            <div className={styles.detailSubContent}>
                <h6>Deliverable Deadline</h6>
                <p>October 30, 2020</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Social Platform</h6>
                <p>Instagram</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Campaign Type</h6>
                <p>Story</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Frame Content Type</h6>
                <p>Video</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Frames Required</h6>
                <p>5</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Brand tag</h6>
                <p>Required- @shopgoodtobe</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Hashtag</h6>
                <p>Required- @shopgoodtobe</p>
            </div>
            <div className={styles.detailSubContent}>
                <h6>Post Frequency</h6>
                <p>5 posts every 1 month</p>
            </div>
            <div className={styles.detailTotalContent}>
                <h6>Post Total:</h6>
                <h6>20 posts</h6>
            </div>
        </div>
    );
};

export default DeliverablesDetail;