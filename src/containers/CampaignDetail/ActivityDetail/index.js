import React from 'react';
import styles from './ActivityDetail.module.scss';

const ActivityDetail = ({ type }) => {
  return (
    <div className={styles.activityContainer}>
      <h1>Activity</h1>
      <div className={styles.mainDiv}>
        <div className={styles.activitySubContent}>
          <span>10/3</span>
          <div></div>
          <p>
            {type === 'Brand'
              ? 'Influencer counter offered'
              : 'You uploaded your first post'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>10/2</span>
          <div></div>
          <p>
            {type === 'Brand' ? 'Campaign invite sent' : 'Campaign went live'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>10/1</span>
          <div></div>
          <p>
            {type === 'Brand'
              ? 'Campaign draft created'
              : 'Brand signed the contarct'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>9/30</span>
          <div></div>
          <p>
            {type === 'Brand'
              ? 'Influencer coutner offered'
              : 'You signed the contarct'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>9/29</span>
          <div></div>
          <p>
            {type === 'Brand'
              ? 'Campaign invite sent'
              : 'The brand counter offer'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>9/28</span>
          <div></div>
          <p>
            {type === 'Brand'
              ? 'Campaign draft created'
              : 'You counter offered'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>9/27</span>
          <div></div>
          <p>
            {type === 'Brand'
              ? 'Influencer counter offered'
              : 'The brand counter offer'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>9/26</span>
          <div></div>
          <p>
            {type === 'Brand' ? 'Campaign invite sent' : 'You counter offer'}
          </p>
        </div>
        <div className={styles.border} />
        <div className={styles.activitySubContent}>
          <span>9/25</span>
          <div></div>
          <p>
            {type === 'Brand'
              ? 'Campaign draft created'
              : 'Invitation Received'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
