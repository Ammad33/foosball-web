import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';
<<<<<<< HEAD
import { Grid } from '@material-ui/core';
=======
import {Grid,Container} from '@material-ui/core';
>>>>>>> b2a3489583e2372767282e54e47fcaafc60fbf2f
import CampaignsCard from './CampaignsCard';

const Campaigns = () => {
  const { authToken } = useContext(RootContext);

  return (
    <Container>
      
      <Grid container spacing={2}>
<<<<<<< HEAD
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
=======
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
        return(
          <Grid item xs={12} sm={12} md={4}> 
>>>>>>> b2a3489583e2372767282e54e47fcaafc60fbf2f
              <CampaignsCard />
            </Grid>
          );
        })}
      </Grid>
      </Container>
  );
};

export default Campaigns;
