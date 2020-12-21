import React, { useState, useEffect, useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import styles from './TeamData.module.scss';
import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';
import SVG from 'react-inlinesvg';
import { RootContext } from '../../../context/RootContext';
import { Plus, MoreVertical, Mail, Edit, Trash } from 'react-feather';
import TextField from '../../../components/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import CDialog from '../../../components/ConfirmationDialog';
import Translation from '../../../assets/translation.json';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import AddMember from '../AddMember';

const Xcircle = () => {
  return <SVG src={require('../../../assets/x-circle.svg')} />;
};

const Msg = () => {
  return <SVG src={require('../../../assets/Msg.svg')} />;
};

const TeamData = ({ TeamMembers, index, handleRemoveMember }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [openCDialog, setOpenCDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleTeam = () => {};
  const closeHandle = () => {
    setAddOpen(false);
  };

  const openDialog = (index) => {
    setOpenCDialog(true);
    setAnchorEl(null);
  };
  const handleCancelCDialog = () => {
    setOpenCDialog(false);
  };
  const handleConfirmCDialog = (index) => {
    setOpenCDialog(false);
    handleRemoveMember(index);
  };

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <>
      <AddMember open={addOpen} closeAdd={closeHandle} />
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
          <div className={styles.removeDiv} onClick={() => openDialog(index)}>
            {' '}
            <Xcircle /> <p>Remove Member </p>
          </div>
        </div>
      </Popover>
      <div>
        <div className={styles.headerContainer}>
          {TeamMembers.user.imageUrl !== null ? (
            <Avatar className={styles.avatar} src={TeamMembers.user.imageUrl} />
          ) : (
            <div className={styles.msgSVG}>
              <Msg className={styles.avatar} />
            </div>
          )}
          <span>{TeamMembers.user.fullName}</span>
          {TeamMembers.invitationAccepted ? (
            <p>
              <Link
                to='#'
                style={{ color: 'transparent', marginRight: '20px' }}
              >
                Resend Invitation
              </Link>
            </p>
          ) : (
            <p>
              <Link to='#' style={{ marginRight: '20px' }}>
                Resend Invitation
              </Link>
            </p>
          )}
          <Select
            className={styles.dropDown}
            value='Member'
            onChange={handleTeam}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            variant='outlined'
            placeholder='Team'
          >
            <MenuItem value=''>
              <em>Team</em>
            </MenuItem>
            <MenuItem value='Member'>Member</MenuItem>
            <MenuItem value='Creator'>Creator</MenuItem>
          </Select>
          <MoreVertical
            style={{ float: 'right', marginLeft: '30px' }}
            onClick={handleClick}
          />
        </div>
        <Divider className={styles.divider} />
      </div>
      <CDialog
        open={openCDialog}
        cancelText={'Remove'}
        confirmText={'Cancel'}
        onCancel={handleConfirmCDialog}
        onConfirm={handleCancelCDialog}
        message={Translation.DIALOG.TEAM_MEMBER_DELETE_CDIALOG_MSG}
      />
    </>
  );
};

export default TeamData;
