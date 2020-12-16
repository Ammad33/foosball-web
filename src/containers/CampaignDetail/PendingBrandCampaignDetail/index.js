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
  InputLabel
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
import _ from 'lodash';

import styles from './PendingBrandCampaignDetail.module.scss';

const PendingBrandCampaignDetail = ({ handleEdit, data, handleSeeClick, name }) => {
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
                    style={{ border: 'none' }}
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
          <span>{name}</span>
        </div>
        <div className={styles.campaignBasicInfo}>
          <div className={styles.campaignStatus}>
            <div>
              <h4 className={styles.promotion}>Promotion: {data && data.discount && data.discount.amount ? data.discount.amount.amount : data && data.discount && data.discount.percentage ? data.discount.percentage : ''} {data && data.discount && data.discount.percentage ? '%' : data.discount.amount ? '$' : ''}</h4>
            </div>
            <div>
              <Chip
                className={clsx(styles[`pendingCampaign`])}
                size='small'
                label='Pending'
              />
            </div>
            {data.influencer &&
              <div className={styles.influencerSocial}>
                <Avatar src={data.influencer.imageUrl} />
                {data.influencer.name}
              </div>
            }
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
            <TeamMembers
              onClick={handleSeeClick}
              handleEdit={handleEdit}
              brandTeam={data && data.brandTeam !== null ? data.brandTeam : []}
            />
            <BudgetAndConversion handleEdit={handleEdit} data={data} />
          </div>
          <div className={styles.flexContainer}>
            <Collections handleEdit={handleEdit} />
            <Deliverables
              deliverables={data.deliverables}
              handleEdit={handleEdit}
              onClick={handleSeeClick}
            />
          </div>
          <div className={styles.flexContainer}>
            <Compensation handleEdit={handleEdit} onClick={handleSeeClick} compensation={data && data.compensation && data.compensation !== null ? _.compact(data.compensation) : []} />
            <Negotiables data={data} handleEdit={handleEdit} />
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
