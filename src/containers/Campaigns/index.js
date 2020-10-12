import React, { useState } from 'react';
import { RootContext } from '../../context/RootContext';
import { Grid, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CampaignsCard from './CampaignsCard';
import styles from './Campaings.module.scss';

const campaignsData = [
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Draft',
    influencerImg:
      'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80',
    mediaTag: 'brokenl',
  },
  {
    showWarningStatus: true,
    name: 'Campaign Name',
    id: 123456,
    status: 'Pending',
    influencerImg:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    mediaTag: 'jurica',
  },
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Live',
    influencerImg:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    mediaTag: 'aatiktas',
  },
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Closed',
    influencerImg:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    mediaTag: 'miracle',
  },
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Lost',
    influencerImg:
      'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
    mediaTag: 'happy',
  },
  {
    showWarningStatus: true,
    name: 'Campaign Name',
    id: 123456,
    status: 'Draft',
    influencerImg:
      'https://images.unsplash.com/photo-1598538086152-73d85a973709?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    mediaTag: 'varlien',
  },
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Pending',
    influencerImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    mediaTag: 'sooprun',
  },
  {
    showWarningStatus: true,
    name: 'Campaign Name',
    id: 123456,
    status: 'Live',
    influencerImg:
      'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    mediaTag: 'sazzad',
  },
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Closed',
    influencerImg:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    mediaTag: 'chiefexof',
  },
  {
    showWarningStatus: true,
    name: 'Campaign Name',
    id: 123456,
    status: 'Lost',
    influencerImg:
      'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    mediaTag: 'haris',
  },
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Draft',
    influencerImg:
      'https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    mediaTag: 'jackson',
  },
  {
    showWarningStatus: false,
    name: 'Campaign Name',
    id: 123456,
    status: 'Pending',
    influencerImg:
      'https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80',
    mediaTag: 'andrea',
  },
];

const Campaigns = () => {
  const [active, setActive] = useState('all');

  return (
    <div>
      <div className={styles.CampaignHeeding}>
        <h1>Campaigns</h1>
        <p>
          Most recent <ExpandMoreIcon fontSize='small' />
        </p>
      </div>
      <div className={styles.CampaignHeedingButton}>
        <button
          className={active === 'all' ? styles.allActive : ''}
          onClick={() => setActive('all')}
        >
          All
        </button>
        <button
          className={active === 'draft' ? styles.draftActive : ''}
          onClick={() => setActive('draft')}
        >
          Draft
        </button>
        <button
          className={active === 'pending' ? styles.pendingActive : ''}
          onClick={() => setActive('pending')}
        >
          Pending
        </button>
        <button
          className={active === 'live' ? styles.liveActive : ''}
          onClick={() => setActive('live')}
        >
          Live
        </button>
        <button
          className={active === 'closed' ? styles.closedActive : ''}
          onClick={() => setActive('closed')}
        >
          Closed
        </button>
        <button
          className={active === 'last' ? styles.lastActive : ''}
          onClick={() => setActive('last')}
        >
          Last
        </button>
      </div>
      <Grid container spacing={1}>
        {campaignsData.map((campaign) => {
          return (
            <Grid
              className={styles.gridItem}
              item
              xs={12}
              sm={12}
              md={4}
              lg={3}
              xl={2}
              key={campaign.mediaTag}
            >
              <CampaignsCard campaign={campaign} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Campaigns;
