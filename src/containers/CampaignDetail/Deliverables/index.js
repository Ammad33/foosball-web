import React from 'react';
import styles from './Deliverables.module.scss';
import { Edit } from 'react-feather';

const Deliverables = ({ onClick, handleEdit }) => {
    return (
        <div className={styles.deliverableContainer}>
            <div className={styles.headerContainer}>
                <h1>Deliverables</h1>
                <Edit onClick={() => handleEdit(5)} />
            </div>
            {/* <div className={styles.mainELEM}> */}
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
            {/* </div> */}
            <button onClick={() => onClick('Deliverable')}>See all</button>
        </div>
    );
};

export default Deliverables;