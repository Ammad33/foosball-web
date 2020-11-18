import React from 'react';
import styles from './Performance.module.scss';
import ChipButton from './../../../components/ChipButton';

const Performance = () => {
  return (
    <div className={styles.performanceContainer}>
      <h1>Performance</h1>
      <div>
        <p>Tableau Integration</p>
      </div>
      <ChipButton title={'See all'} buttonSize={'sm'} />
    </div>
  );
};

export default Performance;
