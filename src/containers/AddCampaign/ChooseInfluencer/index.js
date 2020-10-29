import React from 'react';
import { Grid } from '@material-ui/core';
import InfluencerCard from './InfluencerCard';
import styles from './ChooseInfluencer.module.scss';

const ChooseInfluencer = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid className={styles.gridItem} item xs={6}>
          <InfluencerCard />
        </Grid>
        <Grid className={styles.gridItem} item xs={6}>
          <InfluencerCard />
        </Grid>
        <Grid className={styles.gridItem} item xs={6}>
          <InfluencerCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChooseInfluencer;
