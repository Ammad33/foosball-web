import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import { Grid, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CampaignsCard from './CampaignsCard';
import styles from './Campaings.module.scss';

const Campaigns = () => {
  const { authToken } = useContext(RootContext);

  return (
    <Container>
      <div className={styles.CampaignHeeding}>
        <h1>Campaigns</h1>
        <p>Most recent <ExpandMoreIcon fontSize="small" /></p>
      </div>
      <div className={styles.CampaignHeedingButton}>
        <button>
          All
        </button>
        <button>
          Draft
        </button>
        <button>
          Pending
        </button>
        <button>
          Closed
        </button>
        <button>
          Last
        </button>
      </div>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
          return (
            <Grid item xs={12} sm={12} md={4}>
              <CampaignsCard />
            </Grid>)
        })}
      </Grid>
    </Container>
  );
};

export default Campaigns;
