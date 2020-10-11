import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import { Grid } from '@material-ui/core';
import CampaignsCard from './CampaignsCard';

const Campaigns = () => {
  const { authToken } = useContext(RootContext);

  return (
    <div>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <CampaignsCard />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Campaigns;
