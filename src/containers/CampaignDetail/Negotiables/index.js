import React from 'react';
import styles from './Negotiables.module.scss';
import { Edit } from 'react-feather';

const Negotiables = ({ handleEdit, data }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1>Negotiables</h1>
        {handleEdit ? <Edit onClick={() => handleEdit(7)} /> : ''}
      </div>
      {data?.negotiables ? (
        <>
          <p>Post Fee</p>
          <p>Story Fee</p>
          <p>Campaign Duration</p>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Negotiables;
