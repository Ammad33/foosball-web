import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CampaignsCard from './CampaignsCard';
import AddIcon from '@material-ui/icons/Add';
import styles from './Campaings.module.scss';
import AddCampaign from '../AddCampaign';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import SVG from 'react-inlinesvg';
import { RootContext } from '../../context/RootContext';

const IconCampaign = () => {
  return <SVG src={require('../../assets/Campaigns_large.svg')} />;
};

const Campaigns = () => {
  const history = useHistory();
  const [active, setActive] = useState('ALL');
  const [campaigns, setCampaigns] = useState([]);
  const [bkupCampaigns, setBkupCampaigns] = useState([]);
  const [addCampaign, setAddCampagin] = useState(false);
  const [meData, setMeData] = useState([]);
  const [brandName, setBrandName] = useState([]);
  const { brandId, setBrands, searchValue } = useContext(RootContext);

  useEffect(() => {
    if (!brandId || brandId === '') {
      getMeData();
    }
  }, []);

  const getMeData = async () => {
    try {
      const mydata = await API.graphql({
        query: `{
						me {
							email
							fullName
							id
							organizations {
								organization {
									id
									name
									__typename
									... on Influencer {
										invites {
										name
										}
									}
									imageUrl
									email
									roles {
										id
									}
								}
							}
							about
							age
							companyTitle
							imageUrl
							joined
							modified
							phoneNumber
						}
				}`,
      });

      setBrands(mydata.data.me.organizations);
      setMeData(mydata.data.me.organizations);
      setBrandName(mydata.data.me.organizations[0].organization.__typename);
    } catch (e) {
      console.log(e);
    }
  };
  const getCampaigns = async () => {
    try {
      const campaigns = await API.graphql({
        query: `{
        campaigns(brandId: "${brandId}") {
          campaigns {
            name
            description
            id
            status
            startDate
            endDate
          }
        }
      }`,
      });
      setCampaigns(campaigns.data.campaigns.campaigns);
      setBkupCampaigns(campaigns.data.campaigns.campaigns);
    } catch (e) { }
  };

  useEffect(() => {
    if (brandId !== '') {
      setCampaigns([]);
      getCampaigns();
    }
  }, [brandId, addCampaign]);

  useEffect(() => {
    searchCampaigns();
  }, [searchValue]);

  const searchCampaigns = () => {
    let copiedCampaigns = [...bkupCampaigns];
    if (searchValue.trim()) {
      copiedCampaigns = copiedCampaigns.filter((campaign) => {
        return (
          campaign.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
      });
    }
    setCampaigns(copiedCampaigns);
  };

  const handleDelete = async (campaignId) => {

    try {
      await API.graphql(
        graphqlOperation(`mutation deleteCampaign($brandId: ID!, $id: ID!) {
          deleteCampaign(brandId: $brandId, id:$id)
        }`, {
          brandId: brandId,
          id: campaignId
        })
      );
      getCampaigns();
    } catch (e) {
      console.log('delete campaign error ', e);
    }
  }


  return (
    <>
      {addCampaign && (
        <AddCampaign
          open={addCampaign}
          handleCancel={() => setAddCampagin(false)}
          brandId={brandId}
        />
      )}
      <div className={styles.campaignsContainer}>
        <div className={styles.CampaignHeadingContainer}>
          <div className={styles.CampaignHeading}>
            <span>Campaigns</span>
            <p>
              Most recent <ExpandMoreIcon fontSize='small' />
            </p>
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
        <Grid container spacing={3}>
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
                >
                  <CampaignsCard campaign={campaign} onClick={() => history.push(`/campaignDetail/${campaign.id}`)} handleDelete={handleDelete} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Campaigns;
