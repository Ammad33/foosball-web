import React, { useState } from 'react';
import {
  Avatar,
  Popover,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextareaAutosize,
} from '@material-ui/core';
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
  AlertCircle,
  ChevronDown,
} from 'react-feather';
import Activity from '../Activity';
import CampaignDetail from '../CampaignDetail';
import TeamMembers from '../TeamMembers';
import BudgetAndConversion from '../BudgetAndConversion';
import Deliverables from '../Deliverables';
import Collections from '../Collections';
import Compensation from '../Compensation';
import Negotiables from '../Negotiables';
import SelectMenu from '../../../components/SelectMenu';

import styles from './PendingBrandCampaignDetail.module.scss';

const PendingBrandCampaignDetail = ({ handleEdit, data, handleSeeClick }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [pendingOffer, setPendingOffer] = useState(false);
  const [openNegotiateDialog, setOpenNegotiateDialog] = useState(false);
  const [openDeclineDialog, setOpenDeclineDialog] = useState(false);
  const [allSet, setAllSet] = useState(false);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const getStatusContainerContent = () => {
    return (
      <div
        className={clsx(
          styles.campaignPendingContainer,
          allSet ? styles.allSetCampaignPendingContainer : ''
        )}
      >
        {allSet ? (
          <>
            <h1>You're all set</h1>
            <p>
              No action items as of right now. We will let you know when there
              is something you need to do.
            </p>
          </>
        ) : (
          <>
            <h1>
              {pendingOffer ? (
                'Sam sent a counter offer'
              ) : (
                <>
                  <AlertCircle /> Microsite ready for approval
                </>
              )}
            </h1>
            {pendingOffer ? (
              <>
                <p>
                  <i>Sam is proposing a Revenue share of 3% instead of 2%</i>
                </p>
                <p>
                  <i>Sam is proposing $40 cash per post instead of $30</i>
                </p>
              </>
            ) : (
              <p>
                The influencer has sent you the microsite to review and approve.
              </p>
            )}
            {pendingOffer ? (
              <div className={styles.offerButtons}>
                <button
                  className={styles.acceptButton}
                  onClick={() => setAllSet(true)}
                >
                  Accept
                </button>
                <button
                  className={styles.negotiateButton}
                  onClick={() => setOpenNegotiateDialog(true)}
                >
                  Negotiate
                </button>
                <button
                  className={styles.declineButton}
                  onClick={() => setOpenDeclineDialog(true)}
                >
                  Decline
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  history.push('/review-brand-microsite');
                }}
              >
                View
              </button>
            )}
          </>
        )}
      </div>
    );
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
            <Mail /> <p>Message Influencer</p>
          </div>
          <div>
            <Copy /> <p>Duplicate Campaign</p>
          </div>
          <div>
            <Download /> <p>Download Campaign</p>
          </div>
          <div>
            <XCircle /> <p>Cancel Campaign</p>
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
                className={clsx(styles[`pendingCampaign`])}
                size='small'
                label='Pending'
              />
            </div>
            <div className={styles.influencerSocial}>
              <Avatar src='data:image/jpeg;base64,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' />
              Sam Ozkural
            </div>
            <Checkbox
              checked={pendingOffer}
              onChange={(e) => setPendingOffer(e.target.checked)}
            />
            <span>Show offer from influencer view</span>
          </div>
          <div>
            <MoreVertical onClick={handleClick} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.flexContainer}>
            {getStatusContainerContent()}

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
          <div className={styles.flexContainer}>
            <Compensation handleEdit={handleEdit} onClick={handleSeeClick} />
            <Negotiables />
            <div style={{ width: '391px' }}></div>
          </div>
        </div>
      </div>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby='Negotiate Dialog'
        open={openNegotiateDialog}
        classes={{ paper: styles.negotiationDialog }}
      >
        <DialogTitle className={styles.dialogTitle} id='negotiate-dialog-title'>
          <p className={styles.titleText}>Negotiate</p>
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <FormControl className={styles.selectFormControl} variant='outlined'>
            <InputLabel id='demo-simple-select-outlined-label'>
              Negotiated Item
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              MenuProps={{ variant: 'menu' }}
              label='Negotiated Item'
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <button onClick={() => setOpenNegotiateDialog(false)}>Cancel</button>
          <button className={clsx(styles.sendButton, styles.disabled)}>
            Send to Influencer
          </button>
        </DialogActions>
      </Dialog>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby='Decline Dialog'
        open={openDeclineDialog}
        classes={{ paper: styles.declineDialog }}
      >
        <DialogTitle className={styles.dialogTitle} id='decline-dialog-title'>
          <p className={styles.titleText}>
            Send the influencer a message with your decline
          </p>
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <textarea
            className={styles.rejectionTextContainer}
            placeholder='Enter custom message'
          />
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <button onClick={() => setOpenDeclineDialog(false)}>Cancel</button>
          <button className={clsx(styles.sendButton, styles.active)}>
            Send to Influencer
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PendingBrandCampaignDetail;
