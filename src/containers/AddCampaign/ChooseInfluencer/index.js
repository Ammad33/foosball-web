import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import InfluencerCard from './InfluencerCard';
import styles from './ChooseInfluencer.module.scss';

const ChooseInfluencer = ({
  selectedInfluncer,
  toggleInfluncer,
  influencers,
  handleActiveForInfluncer,
}) => {

/**check for conditions and activate the next button for influencer */  
useEffect(() => {
    handleActiveForInfluncer();
	}, [selectedInfluncer]);
	
	// const onSort = (value) => {
	// 	setSelectedState(value);
	// 	if (value === 'Recent Activity') {
	// 		let data = [...campaigns];
	// 		let myArray = _.sortBy(data, function (dateObj) {
	// 			return new Date(dateObj.created);
	// 		}).reverse();
	// 		setCampaigns(myArray);
	// 		setAnchorEl(null);
	// 		setBrandDropDown(false);
	// 	}
	// 	if (value === 'Alphabetical') {
	// 		let data = [...campaigns];
	// 		let myArray = _.sortBy(data, (o) => o.name.toLowerCase());
	// 		setCampaigns(myArray);
	// 		setAnchorEl(null);
	// 		setBrandDropDown(false);
	// 	}
	// };



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
