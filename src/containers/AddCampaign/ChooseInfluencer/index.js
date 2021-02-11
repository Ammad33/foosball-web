import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import InfluencerCard from './InfluencerCard';
import styles from './ChooseInfluencer.module.scss';
import _ from 'lodash';

const ChooseInfluencer = ({
  selectedInfluncer,
  toggleInfluncer,
  influencers,
  handleActiveForInfluncer,
  handleInfluencers,
}) => {
  const [sortedInfluencers, setSortedInfluencers] = useState([...influencers]);
  /**check for conditions and activate the next button for influencer */
  useEffect(() => {
    handleActiveForInfluncer();
  }, [selectedInfluncer]);

  useEffect(() => {
    const selectedInfluencerIndex = _.findIndex(influencers, {
      id: selectedInfluncer && selectedInfluncer.id,
    });
    if (selectedInfluencerIndex > -1) {
      let influencersCopy = _.cloneDeep(sortedInfluencers);
      const firstInfluencer = influencersCopy[0];
      influencersCopy[0] = influencersCopy[selectedInfluencerIndex];
      influencersCopy[selectedInfluencerIndex] = firstInfluencer;
      setSortedInfluencers(influencersCopy);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        {sortedInfluencers.map((influencer) => {
          const index =
            selectedInfluncer !== null &&
            selectedInfluncer.name === influencer.name
              ? true
              : false;
          return (
            <Grid
              item
              md={6}
              xs={12}
              className={styles.gridItem}
              style={{ marginTop: 20 }}
              key={influencer.socialTag}
            >
              <InfluencerCard
                influencer={influencer}
                selected={index}
                toggleInfluncer={toggleInfluncer}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ChooseInfluencer;
