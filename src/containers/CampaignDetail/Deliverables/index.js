import React from 'react';
import styles from './Deliverables.module.scss';
import { Edit } from 'react-feather';

const Deliverables = ({ onClick, handleEdit, deliverables }) => {
  const getPostFrequency = (frequency) => {
    switch (frequency) {
      case 'BI_WEEKLY':
        return 'Every 1 Week';
      case 'BI_MONTHLY':
        return 'Every 1 Month';
      case 'WEEK':
        return 'in Week';
      case 'MONTH':
        return 'in Month';
      default:
        return '';
    }
  };

  return (
    <div className={styles.deliverableContainer}>
      <div className={styles.headerContainer}>
        <h1>Deliverables</h1>
        <Edit onClick={() => handleEdit(5)} />
      </div>
      {deliverables && deliverables !== null &&
        <>
          <div className={styles.detailSubContent}>
            <h6>Deliverable Deadline</h6>
            <p>
              {deliverables && deliverables.length
                ? deliverables[0].deadlineDate
                : ''}
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <h6>Social Platform</h6>
            <p>
              {deliverables && deliverables.length ? deliverables[0].platform : ''}
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <h6>Post Type</h6>
            <p>
              {deliverables && deliverables.length
                ? deliverables[0].postType
                : ''}
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <h6>Content Type</h6>
            <p>
              {deliverables && deliverables.length
                ? deliverables[0].frameContentType
                : ''}
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <h6>Frames Required</h6>
            <p>
              {deliverables && deliverables.length
                ? deliverables[0].framesRequired
                : ''}
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <h6>Brand tag</h6>
            <p>
              @{deliverables && deliverables.length ? deliverables[0].brandTag : ''}
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <h6>Hashtag</h6>
            <p>
              #{deliverables && deliverables.length ? deliverables[0].hashTag : ''}
            </p>
          </div>
          <div className={styles.detailSubContent} style={{ marginBottom: '20px' }}>
            <h6>Post Frequency</h6>
            <p>
              {deliverables && deliverables.length
                ? `${deliverables[0].posts} posts ${getPostFrequency(
                  deliverables[0].frequency
                )}`
                : ''}
            </p>
          </div>
        </>}
      {deliverables && deliverables !== null && deliverables.length > 1 ? (
        <button onClick={() => onClick('Deliverable')}>See all</button>
      ) : (
          ''
        )}
    </div>
  );
};

export default Deliverables;
