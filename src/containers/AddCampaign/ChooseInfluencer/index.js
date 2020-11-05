import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import InfluencerCard from './InfluencerCard';
import styles from './ChooseInfluencer.module.scss';


const ChooseInfluencer = ({ selectedInfluncer, toggleInfluncer, influencers, handleActiveForInfluncer }) => {
  useEffect((
  ) => {
    handleActiveForInfluncer();
  }, [selectedInfluncer])
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        {influencers.map((influencer) => {
          const index = selectedInfluncer !== null && selectedInfluncer.name === influencer.name ? true : false;
          return (
            <Grid item md={6} xs={12}
              className={styles.gridItem}
              style={{ marginTop: 20 }}
              key={influencer.socialTag}
              item            >
              <InfluencerCard influencer={influencer} selected={index} toggleInfluncer={toggleInfluncer} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ChooseInfluencer;
