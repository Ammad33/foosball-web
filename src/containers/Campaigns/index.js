import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import { Grid, Container } from '@material-ui/core';
import CampaignsCard from './CampaignsCard';

const Campaigns = () => {
  const { authToken } = useContext(RootContext);

  return (
    <Container>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
          return (
            <Grid item xs={12} sm={12} md={4}>
              <CampaignsCard />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Campaigns;
