import React, { useState } from 'react';
import { RootContext } from '../../context/RootContext';
import { Grid, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CampaignsCard from './CampaignsCard';
import styles from './Campaings.module.scss';

const Campaigns = () => {
  const [ active , setActive ] = useState('all');

  return (
    <Container>
      <div className={styles.CampaignHeeding}>
        <h1>Campaigns</h1>
        <p>Most recent <ExpandMoreIcon fontSize="small" /></p>
      </div>
      <div className={styles.CampaignHeedingButton}>
        <button className={active === 'all' ? styles.allActive :''} onClick ={()=>  setActive('all')}>
          All
        </button>
        <button className={active === 'draft' ? styles.draftActive :''} onClick ={()=>  setActive('draft')}>
          Draft
        </button>
        <button className={active === 'pending' ? styles.pendingActive :''} onClick ={()=>  setActive('pending')}>  
          Pending
        </button>
        <button className={active === 'live' ? styles.liveActive :''} onClick ={()=>  setActive('live')}>  
          Live
        </button>
        <button className={active === 'closed' ? styles.closedActive :''} onClick ={()=>  setActive('closed')}>
          Closed
        </button>
        <button className={active === 'last' ? styles.lastActive :''} onClick ={()=>  setActive('last')}>
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
