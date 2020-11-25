import React, { useState, useEffect } from 'react';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CampaignsCard from './CampaignsCard';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import styles from './Campaings.module.scss';
import SelectMenu from '../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import AddCampaign from '../AddCampaign';
import { useHistory, useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import SVG from 'react-inlinesvg';
import { makeStyles } from '@material-ui/core/styles';


const IconCampaign = () => {
  return <SVG src={require('../../assets/Campaigns_large.svg')} />;
};



const Brand = (brandId , handleBrandId , meData ,active,  setActive , campaigns ) => {
  const history = useHistory();
	const [addCampaign, setAddCampagin] = useState(false);

	
  return (
    <>
      <AddCampaign
        open={addCampaign}
        handleCancel={() => setAddCampagin(false)}
      />
      <div className={styles.campaignsContainer}>
        <div className={styles.CampaignHeadingContainer}>
          <div className={styles.CampaignHeading}>
            <span>Campaigns</span>
						<FormControl fullWidth variant='outlined'>
							<Select
								id='Select Brand Id'
								fullWidth
								label='Select Brand Id'
								variant='outlined'
								value={brandId}
								onChange={(e) =>
									handleBrandId(e.target.value)
								}
								
								MenuProps={{ variant: 'menu' }}
								input={<SelectMenu />}
							>
								<MenuItem value='brandId' disabled>
									Brand Id
								</MenuItem>
								{/* {meData.map((item) => (
									<MenuItem value={item}>{item.organization.id} </MenuItem>
								))} */}
							</Select>
        		</FormControl>
            {/* <p>
              Most recent <ExpandMoreIcon fontSize='small' />
            </p> */}
          </div>
					<button onClick={() => setAddCampagin(true)}>
						<AddIcon /> New Campaign
					</button>
        </div>
        <div className={styles.CampaignHeadingButton}>
          <button
            className={active === 'ALL' ? styles.allActive : ''}
            onClick={() => setActive('ALL')}
          >
            All
          </button>
          <button
            className={active === 'DRAFT' ? styles.draftActive : ''}
            onClick={() => setActive('DRAFT')}
          >
            Draft
          </button>
          <button
            className={active === 'PENDING' ? styles.pendingActive : ''}
            onClick={() => setActive('PENDING')}
          >
            Pending
          </button>
          <button
            className={active === 'LIVE' ? styles.liveActive : ''}
            onClick={() => setActive('LIVE')}
          >
            Live
          </button>
          <button
            className={active === 'CLOSED' ? styles.closedActive : ''}
            onClick={() => setActive('CLOSED')}
          >
            Closed
          </button>
          <button
            className={active === 'LAST' ? styles.lostActive : ''}
            onClick={() => setActive('LAST')}
          >
            Lost
          </button>
        </div>
        {campaigns.length == 0 ? (
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{ paddingTop: '15%' }}
          >
            <Grid item xs={12}>
              <IconCampaign />
            </Grid>
            <Grid item xs={12}>
              <div className={styles.noCampaignYet}>No Campaigns Yet</div>
            </Grid>
            <Grid item xs={12}>
              <div className={styles.noCampaignYetHelper}>
                Click on the button New Campaign button to get started creating
                a campaign.
              </div>
            </Grid>
          </Grid>
        ) : (
            ''
          )}
        {/* <Grid container spacing={3}>
          {campaigns.length > 0 &&
            campaigns.map((campaign) => {
              if (campaign.status !== active && active !== 'ALL') {
                return null;
              }
              return (
                <Grid
                  className={styles.gridItem}
                  item
                  key={campaign.id}
                  onClick={() => history.push(`/campaignDetail/${campaign.id}`)}
                >
                  <CampaignsCard campaign={campaign} />
                </Grid>
              );
            })}
        </Grid> */}
      </div>
    </>
  );
};

export default Brand;
