import React, { useState } from 'react';
import { Avatar, Popover } from '@material-ui/core';
import styles from './BrandCampaignDetail.module.scss';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import ChipButton from '../../../components/ChipButton';
import { MoreVertical, Download, Copy, Mail, X } from 'react-feather';
import Posts from '../Posts';
import Activity from '../Activity';
import Performance from '../Performance';
import CampaignDetail from '../CampaignDetail';
import TeamMembers from '../TeamMembers';
import BudgetAndConversion from '../BudgetAndConversion';
import Deliverables from '../Deliverables';
import Collections from '../Collections';
import Contract from '../Contract';
import Compensation from '../Compensation';
import Negotiables from '../Negotiables';
import Translation from '../../../assets/translation.json';
import CDialog from '../../../components/ConfirmationDialog';
import Drawer from '../../../components/RightDrawer';
import ActivityDetail from '../ActivityDetail';
import CompensationDetail from '../CompensationDetail';
import DeliverablesDetail from '../DeliverablesDetail';

import { useHistory } from 'react-router-dom';

const options = [
  'Message Influencer',
  'Duplicate Campaign',
  'Download Campaign',
];

const LinkIcon = () => {
  return <SVG src={require('../../../assets/link.svg')} />;
};
const CopyIcon = () => {
  return <SVG src={require('../../../assets/copy.svg')} />;
};

const BrandCampaignDetail = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openCDialog, setOpenCDialog] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const status = 'closed';
  // const status = 'draft';
  // const status = 'lost';
  // const status ='draft';
  // const status ='draft';

  const [openDrawer, setOpenDrawer] = useState(false);
  const [element, setElement] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSeeClick = (value) => {
    setElement(value);
    setOpenDrawer(true);
  };

  const handleCancelCDialog = () => {
    setOpenCDialog(false);
  };
  const handleConfirmCDialog = () => {
    setOpenCDialog(false);
  };
  const handleCloseDrawer = () => {
    setElement('');
    setOpenDrawer(false);
  };
  const getDrawerElement = (element) => {
    switch (element) {
      case 'Activity':
        return <ActivityDetail type={'Brand'} />;
      case 'Deliverable':
        return <DeliverablesDetail />;
      case 'Compensation':
        return <CompensationDetail />;
      default:
        return;
    }
  };

  const getSectionData = () => {
    switch (status) {
      case 'closed':
        return <Posts />;

        break;
      case 'draft':
        return (
          <div className={styles.campaignDraftContainer}>
            <h1>Compensation not yet defined</h1>
            <p>
              Pickup where you left off and define how you will compensate the
              influencer
            </p>
            <button>Finalize Campaign</button>
          </div>
        );
        break;
      case 'lost':
        return (
          <div className={styles.campaignLostContainer}>
            <h1>We're sorry this one didn't work out</h1>
            <p>
              The influencer declined your campaign and left you a message. Try
              creating a new campaign.
            </p>
            <button>Create new campaign</button>
          </div>
        );
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Drawer anchor={'right'} open={openDrawer} onClose={handleCloseDrawer}>
        <div className={styles.x}>
          <X onClick={handleCloseDrawer} />
        </div>
        {getDrawerElement(element)}
      </Drawer>
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
            <Mail /> <p> Message Influencer</p>
          </div>
          <div
            onClick={() => {
              setOpenCDialog(true);
            }}
          >
            <Copy /> <p>Duplicate Campaign</p>
          </div>
          <div>
            <Download /> <p>Download Campaign</p>
          </div>
        </div>
      </Popover>
      <div className={styles.mainContainer}>
        <div>Crums</div>
        <div className={styles.campaignBasicInfo}>
          <div className={styles.campaignStatus}>
            <div className={styles.micrositeContainer}>
              <div className={styles.linkIconAndName}>
                <LinkIcon />
                <span>Copy Microsite Link</span>
              </div>
              <CopyIcon />
            </div>
            <div>
              <h4>Promotion: 15%</h4>
            </div>
            <div>
              <Chip
                className={clsx(styles.customChip, styles[`closedCampaign`])}
                size='small'
                label='Closed'
              />
            </div>
            <div className={styles.influencerSocial}>
              <Avatar src='data:image/jpeg;base64,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' />
              @samozkural
            </div>
          </div>
          <div>
            <MoreVertical onClick={handleClick} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div>
            <Performance />
          </div>
          <div className={styles.flexContainer}>
            {getSectionData()}
            <Activity onClick={handleSeeClick} />
          </div>
          <div className={styles.flexContainer}>
            <CampaignDetail>
              <>
                <h6>Custom Message to Influencer</h6>
                <p>
                  Hi sam, we are so excited for the chance to work with you. We
                  love your content and hope that you see value in working with
                  us.
                </p>
              </>
            </CampaignDetail>
            <TeamMembers />
            <BudgetAndConversion />
          </div>
          <div className={styles.flexContainer}>
            <Collections />
            <Deliverables onClick={handleSeeClick} />
          </div>
          <div className={styles.flexContainer}>
            <Compensation onClick={handleSeeClick} />
            <Negotiables />
            <Contract />
          </div>
        </div>
      </div>
      <CDialog
        open={openCDialog}
        cancelText={'Cancel'}
        confirmText={'Delete'}
        onCancel={handleCancelCDialog}
        onConfirm={handleConfirmCDialog}
        message={Translation.DIALOG.CAMPAIGN_DELETE_CDIALOG_MSG}
      />
    </>
  );
};

export default BrandCampaignDetail;
