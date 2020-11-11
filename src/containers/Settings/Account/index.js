import React, { useState } from 'react';
import styles from './Account.module.scss';
import mainStyles from '../../../index.module.scss';
import { Grid, InputAdornment } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CDialog from '../../../components/ConfirmationDialog';
import Translation from '../../../assets/translation.json';
import SVG from 'react-inlinesvg';

const Eye_offSVG = () => {
  return <SVG src={require('../../../assets/eye-off.svg')} />;
};
const EyeSVG = () => {
  return <SVG src={require('../../../assets/eye.svg')} />;
};
const Account = () => {
  const [openCDialog, setOpenCDialog] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordCleared, setPasswordCleared] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleCancelCDialog = () => {
    setOpenCDialog(false);
  };
  const handleConfirmCDialog = () => {
    setOpenCDialog(false);
  };

  const getInputEndormentContent = () => {
    if (!passwordCleared) {
      return <a onClick={() => setPasswordCleared(true)}>Change</a>;
    } else {
      return passwordShown ? (
        <div onClick={togglePasswordVisiblity}>
          <EyeSVG />
        </div>
      ) : (
        <div onClick={togglePasswordVisiblity}>
          <Eye_offSVG />
        </div>
      );
    }
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Full Name'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Brand Name'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Email'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Password'
              type={passwordShown ? 'text' : 'password'}
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    className={styles.inputendornment}
                    position='end'
                  >
                    <span>
                      {getInputEndormentContent()}
                      {/* {passwordShown ? (
                        <div onClick={togglePasswordVisiblity}>
                          {' '}
                          <EyeSVG />{' '}
                        </div>
                      ) : (
                        <div onClick={togglePasswordVisiblity}>
                          {' '}
                          <Eye_offSVG />{' '}
                        </div>
                      )} */}
                    </span>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
      <hr className={mainStyles.hr} />
      <div className={styles.actionsContainer}>
        <div className={styles.accountDeletionContainer}>
          <p className={styles.deleteTitle}>Delete Account</p>
          <div className={styles.deleteAccountTextAndButton}>
            <p>By deleting your account you will lose all your data</p>
            <Button
              onClick={() => {
                setOpenCDialog(true);
              }}
              className={mainStyles.textDangerButton}
            >
              Delete Account
            </Button>
          </div>
        </div>
        <div className={styles.saveContainer}>
          <button className={clsx(styles.nextButton)}>Save</button>
        </div>
      </div>
      <CDialog
        open={openCDialog}
        cancelText={'Delete'}
        confirmText={'Cancel'}
        onCancel={handleCancelCDialog}
        onConfirm={handleConfirmCDialog}
        message={Translation.DIALOG.ACCOUNT_DELETE_CDIALOG_MSG}
      />
    </div>
  );
};

export default Account;
