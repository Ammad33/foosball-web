import React from 'react';
import styles from './DeliverablesDetail.module.scss';

const DeliverablesDetail = ({ deliverables }) => {
  const getPostFrequency = (frequency) => {
    switch (frequency) {
      case 'BI_WEEKLY':
        return 'Every Other Week';
      case 'BI_MONTHLY':
        return 'Every Other Month';
      case 'WEEK':
        return 'Every Week';
      case 'MONTH':
        return 'Every Month';
      default:
        return '';
    }
  };

  return (
    <div className={styles.deliverableContainer}>
      <h1>Deliverables</h1>
      {deliverables.map((deliverable, index) => {
        return (
          <React.Fragment key={index}>
            <h6 className={styles.subHeader}>Deliverable {index + 1}</h6>
            <div className={styles.detailSubContent} style={{display: 'none'}}>
              <h6>Deliverable Deadline</h6>
              <p>{deliverable ? deliverable.deadlineDate : ''}</p>
            </div>
            <div className={styles.detailSubContent}>
              <h6>Social Platform</h6>
              <p>{deliverable ? deliverable.platform : ''}</p>
            </div>
            <div className={styles.detailSubContent}>
              <h6>Post Type</h6>
              <p> {deliverable ? deliverable.postType : ''}</p>
            </div>
            <div className={styles.detailSubContent}>
              <h6>Content Type</h6>
              <p> {deliverable ? deliverable.frameContentType : ''}</p>
            </div>
            <div className={styles.detailSubContent}>
              <h6>Frames Required</h6>
              <p> {deliverable ? deliverable.framesRequired : ''}</p>
            </div>
            <div className={styles.detailSubContent}>
              <h6>Brand tag</h6>
              <p>@{deliverable ? deliverable.brandTag : ''}</p>
            </div>
            <div className={styles.detailSubContent}>
              <h6>Hashtag</h6>
              <p>#{deliverable ? deliverable.hashTag : ''}</p>
            </div>
            <div
              className={styles.detailSubContent}
              style={{ marginBottom: '20px' }}
            >
              <h6>Post Frequency</h6>
              <p>
                {deliverable
                  ? `${deliverable.posts} posts ${getPostFrequency(
                    deliverable.frequency
                  )}`
                  : ''}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DeliverablesDetail;
