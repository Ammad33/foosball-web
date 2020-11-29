import React, { useState } from 'react';
import { Popover } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import {
  MoreVertical,
  Download,
  Copy,
  Mail,
  X,
  ChevronRight,
  XCircle,
  Delete,
  Trash,
} from 'react-feather';
import Activity from '../Activity';
import CampaignDetail from '../CampaignDetail';
import TeamMembers from '../TeamMembers';
import BudgetAndConversion from '../BudgetAndConversion';
import Deliverables from '../Deliverables';
import Collections from '../Collections';

import styles from './DraftBrandCampaignDetail.module.scss';

const DraftBrandCampaignDetail = ({ handleEdit, data, handleSeeClick }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
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
            <Copy /> <p>Duplicate Campaign</p>
          </div>
          <div>
            <Download /> <p>Download Campaign</p>
          </div>
          <div>
            <Trash /> <p>Delete Campaign</p>
          </div>
        </div>
      </Popover>
      <div className={styles.mainContainer}>
        <div className={styles.CampaignHeading}>
          <span onClick={() => history.push('/campaigns')}>Campaigns</span>
          <ChevronRight />
          <span>Campaign Name</span>
        </div>
        <div className={styles.campaignBasicInfo}>
          <div className={styles.campaignStatus}>
            <div>
              <h4 className={styles.promotion}>Promotion: 15%</h4>
            </div>
            <div>
              <Chip
                className={clsx(styles[`draftCampaign`])}
                size='small'
                label='Draft'
              />
            </div>
          </div>
          <div>
            <MoreVertical onClick={handleClick} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.campaignDraftContainer}>
              <h1>Compensation not yet defined</h1>
              <p>
                Pickup where you left off and define how you will compensate the
                influencer
              </p>
              <button>Finalize Campaign</button>
            </div>
            <Activity onClick={handleSeeClick} />
          </div>
          <div className={styles.flexContainer}>
            <CampaignDetail campaign={data} handleEdit={handleEdit}>
              <>
                <h6>Custom Message to Influencer</h6>
                <p>
                  Hi sam, we are so excited for the chance to work with you. We
                  love your content and hope that you see value in working with
                  us.
                </p>
              </>
            </CampaignDetail>
            <TeamMembers onClick={handleSeeClick} />
            <BudgetAndConversion handleEdit={handleEdit} />
          </div>
          <div className={styles.flexContainer}>
            <Collections handleEdit={handleEdit} />
            <Deliverables handleEdit={handleEdit} onClick={handleSeeClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftBrandCampaignDetail;
