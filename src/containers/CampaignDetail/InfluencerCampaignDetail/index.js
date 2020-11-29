import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Avatar, Chip, Popover } from '@material-ui/core';
import styles from './InfluencerCampaignDetail.module.scss';
import { ChevronRight, MoreVertical, Download, Mail, X } from 'react-feather';
import { useHistory } from 'react-router-dom';
import ActivityDetail from '../ActivityDetail';
import DeliverablesDetail from '../DeliverablesDetail';
import Drawer from '../../../components/RightDrawer';
import CompensationDetail from '../CompensationDetail';
import AddCampaign from '../../AddCampaign';
import ClosedInfluencer from '../ClosedInfluencer';
import LostInfluencer from '../LostInfluencer';
import TeamMembersDetail from '../TeamMembersDetail';
import InviteInfluencer from '../InviteInflunecr';
import PendingInfluencer from '../PendingInfluencer';
import LiveInfluencer from '../LiveInfluencer';
import DeclineInfluencer from '../DeclineInfluencer';
import { API } from 'aws-amplify';

const CampaignDetailInfluencer = ({ campaignId, status }) => {
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [addCampaign, setAddCampagin] = useState(false);
  const [step, setStep] = useState(1);
  const [element, setElement] = useState('');
  const [data, setData] = useState(null);

  const getCampaign = async () => {
    try {
      const campaign = await API.graphql({
        query: `{
          campaign(brandId: "8ece73cc-3079-4f45-b7bb-4f6007c8344d", id: "${campaignId}") {
            id
						name
						status
            startDate
            endDate
            discount {
              ... on PercentageDiscount {
                __typename
                percentage
              }
              ... on FlatDiscount {
                __typename
                amount {
                  amount
                  currency
                }
              }
            }
            budget {
              amount
              currency
            }
            targetGrossSales {
              amount
              currency
            }
          }
      }`,
      });
      console.log('campaign', campaign.data.campaign)
      setData(campaign.data.campaign)
    } catch (e) {
    }
  };

  useEffect(() => {
    getCampaign();
  }, [addCampaign]);

  const handleEdit = (step) => {
    setAddCampagin(true);
    setStep(step);
  };


  const handleCloseDrawer = () => {
    setElement('');
    setOpenDrawer(false);
  };

  const getPage = (status) => {
    switch (status) {
      case 'Closed':
        return <ClosedInfluencer handleEdit={handleEdit} handleSeeClick={handleSeeClick} />;
      case 'Live':
        return <LiveInfluencer handleEdit={handleEdit} handleSeeClick={handleSeeClick} />;
      case 'Invite':
        return <InviteInfluencer handleEdit={handleEdit} handleSeeClick={handleSeeClick} />;
      case 'Lost':
        return <LostInfluencer handleEdit={handleEdit} handleSeeClick={handleSeeClick} />;
      case 'Pending':
        return <PendingInfluencer handleEdit={handleEdit} handleSeeClick={handleSeeClick} />;
      case 'Declined':
        return <DeclineInfluencer handleEdit={handleEdit} handleSeeClick={handleSeeClick} />;
      default:
        return;
    }
  }

  const getDrawerElement = (element) => {
    switch (element) {
      case 'Activity':
        return <ActivityDetail />;
      case 'Deliverable':
        return <DeliverablesDetail />;
      case 'Compensation':
        return <CompensationDetail />;
      case 'TeamMembers':
        return <TeamMembersDetail />;
      default:
        return;
    }
  };

  const handleSeeClick = (value) => {
    setElement(value);
    setOpenDrawer(true);
  };

  return (
    <>
      {addCampaign && (
        <AddCampaign
          open={addCampaign}
          step={step}
          campaign={data}
          handleCancel={() => setAddCampagin(false)}
        />
      )}
      <Drawer anchor={'right'} open={openDrawer} onClose={handleCloseDrawer}>
        <div className={styles.x}>
          <X onClick={handleCloseDrawer} />
        </div>
        {getDrawerElement(element)}
      </Drawer>
      {getPage(status)}
      {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={styles.popOver}>
          <div>
            {' '}
            <Mail /> <p> Message Brand</p>
          </div>
          <div className={styles.secondElement}>
            {' '}
            <Download /> <p>Download Campaign</p>
          </div>
        </div>
      </Popover>

      <div className={styles.campaignsContainer}>
        <div className={styles.CampaignHeading}>
          <span onClick={() => history.push('/campaigns')}>Campaigns</span>
          <ChevronRight />
          <span>Campaigns Name</span>
        </div>
        <div className={styles.subHeadingSection}>
          <div className={styles.subCampaignSubHeading}>
            <p>Estimated Compensation: $2,600</p>
            <div className={styles.borderDiv}></div>
            <Chip className={clsx(styles.campaignStatus)} label={'Closed'} />
            <div className={styles.borderDiv}></div>

            <div className={styles.avatarContainer}>
              <Avatar
                className={styles.avatar}
                src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
              />
              <span>Care of</span>
            </div>
          </div>
          <MoreVertical onClick={handleClick} />
        </div>

        <Performance />
        <div className={styles.firstConatiner}>
          <Posts />
          <Activity onClick={handleSeeClick} />
        </div>
        <div className={styles.secondContainer}>
          <div>
            <div className={styles.first}>
              <CampaignDetail campaign={data} handleEdit={handleEdit} />
              <Compensation onClick={handleSeeClick} handleEdit={handleEdit} />
            </div>
            <div style={{ marginTop: '30px' }}>
              <Collections handleEdit={handleEdit} />
            </div>
          </div>
          <div className={styles.second}>
            <Deliverables handleEdit={handleEdit} onClick={handleSeeClick} />
            <Contract />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CampaignDetailInfluencer;
