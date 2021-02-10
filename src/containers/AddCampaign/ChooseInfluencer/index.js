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

/**check for conditions and activate the next button for influencer */  
useEffect(() => {
		handleActiveForInfluncer();
		if (selectedInfluncer != undefined || selectedInfluncer != null){
			onSort();
		}
		
	}, [selectedInfluncer]);

	const [sortedInfluencer , setSortedInfluencer] = useState(influencers)
	
	const onSort = () => {
			let data = [...influencers];
			let pos = data.findIndex((item)=> item.id === selectedInfluncer.id);
			let removedInfluencer = data.splice(pos , 1);
			data.unshift(removedInfluencer[0])	
			setSortedInfluencer(data);
		

	};
	
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        {influencers.map((influencer) => {
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
