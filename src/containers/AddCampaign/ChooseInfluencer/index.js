import React from 'react';
import { Grid } from '@material-ui/core';
import InfluencerCard from './InfluencerCard';
import styles from './ChooseInfluencer.module.scss';


const ChooseInfluencer = ({ selectedInfluncer, toggleInfluncer, influencers }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {influencers.map((influencer) => {
          const index = selectedInfluncer.findIndex(item => item.name === influencer.name);
          return (
            <Grid
              key={influencer.socialTag}
              className={styles.gridItem}
              item
              xs={6}
            >
              <InfluencerCard influencer={influencer} selected={index} toggleInfluncer={toggleInfluncer} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ChooseInfluencer;
