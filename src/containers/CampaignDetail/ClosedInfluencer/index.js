import React from 'react';
import styles from '../InfluencerCampaignDetail/InfluencerCampaignDetail.module.scss';
import { Avatar, Chip, Popover } from '@material-ui/core';
import { ChevronRight, MoreVertical, Download, Mail, X } from 'react-feather';
import clsx from 'clsx';
import Performance from '../Performance';
import Posts from '../Posts';
import Activity from '../Activity';
import CampaignDetail from '../CampaignDetail';
import Compensation from '../Compensation';
import Deliverables from '../Deliverables';
import Collections from '../Collections';
import Contract from '../Contract';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

const ClosedInfluencer = ({ handleEdit, data, handleSeeClick }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Popover
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
              <Compensation compensation={data && data.compensation && data.compensation !== null ? _.compact(data.compensation) : []} onClick={handleSeeClick} handleEdit={handleEdit} />
            </div>
            <div style={{ marginTop: '30px' }}>
              <Collections handleEdit={handleEdit} />
            </div>
          </div>
          <div className={styles.second}>
            <Deliverables
              deliverables={data.deliverables}
              handleEdit={handleEdit}
              onClick={handleSeeClick}
            />
            <Contract />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClosedInfluencer;
