import React, { useState } from 'react';
import styles from './Account.module.scss';
import mainStyles from '../../../index.module.scss';
import { Grid, InputAdornment } from '@material-ui/core';
import TextField from '../../../components/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CDialog from '../../../components/ConfirmationDialog';
import Translation from '../../../assets/translation.json';
import SVG from 'react-inlinesvg';
import { Avatar } from '@material-ui/core';


const Eye_offSVG = () => {
  return <SVG src={require('../../../assets/eye-off.svg')} />;
};
const EyeSVG = () => {
  return <SVG src={require('../../../assets/eye.svg')} />;
};
const Account = ({fullname, handleFullName , email , handleEmail , brandName , handleBrandName}) => {
  const [openCDialog, setOpenCDialog] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);
	const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [passwordCleared, setPasswordCleared] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
	const [actionType, setActionType] = useState('');
	const [editPassword, setEditPassword] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
	};
	const toggleNewPasswordVisiblity = () => {
    setNewPasswordShown(newPasswordShown ? false : true);
  };

  const handleCancelCDialog = () => {
    setOpenCDialog(false);
  };
  const handleConfirmCDialog = () => {
    setOpenCDialog(false);
	};
	const handleSetPasswordCleared = () => {
		setPasswordCleared(true)
		setEditPassword(true);
	};

  const getInputEndormentContent = () => {
    if (!passwordCleared) {
      return <a onClick={handleSetPasswordCleared}>Edit</a>;
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
			<div className={styles.brandContainter}>
				<Avatar
					className={styles.brandImage}
					alt='Profile'
					src='https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'
				/>
				<span>Change Profile Picture</span>
			</div>
      <div className={styles.formContainer}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
							fullWidth
							value = {fullname}
							onChange={handleFullName}
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
							value = {brandName}
							onChange = {handleBrandName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Email'
							variant='outlined'
							value = {email}
							onChange = {handleEmail}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              label={editPassword ? 'Old Password' : 'Password'}   
              type={passwordShown ? 'text' : 'password'}
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    className={styles.inputendornment}
                    position='end'
                  >
                    <span>{getInputEndormentContent()}</span>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
					<Grid item xs={6}>
					</Grid>
					{
						editPassword ? (
						<>
						<Grid item xs={6}>
							<TextField
								id='outlined-basic'
								fullWidth
								label='New Password'
								type={newPasswordShown ? 'text' : 'password'}
								variant='outlined'
								InputProps={{
									endAdornment: (
										<InputAdornment className={styles.inputendornment} position='end'>
											<span>
												{newPasswordShown ? (
													<div onClick={toggleNewPasswordVisiblity}>
														{' '}
														<EyeSVG />{' '}
													</div>
												) : (
													<div onClick={toggleNewPasswordVisiblity}>
														{' '}
														<Eye_offSVG />{' '}
													</div>
												)}
											</span>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={6}>
						</Grid>
						<Grid item xs={6}>
							<button
									className={styles.active}
									//onClick={}
								>
									Update
							</button>
							<button
									className={styles.notActive}
									//onClick={}
								>
									Cancel
							</button>
						</Grid>

						</>
						): (" ")
					}
					
        </Grid>
      </div>
      <hr className={mainStyles.hr} />
      <div className={styles.actionsContainer}>
        <div className={styles.accountDeactivationContainer}>
          <p className={styles.deleteTitle}>Deactivate Account</p>
          <div className={styles.deleteAccountTextAndButton}>
            <p>
              If you know longer need your account, or want to temporarily
              disable it, you can deactivate your account.
            </p>
            <Button
              onClick={() => {
                setActionType('Deactivate');
                setOpenCDialog(true);
							}}
							className={clsx(
								mainStyles.textDangerButton,
								styles.DeactivateButton
							)}
             
            >
              Deactivate Account
            </Button>
          </div>
        </div>
        <div className={styles.accountDeletionContainer}>
          <p className={styles.deleteTitle}>Delete Account</p>
          <div className={styles.deleteAccountTextAndButton}>
            <p>By deleting your account you will lose all your data.</p>
            <Button
              onClick={() => {
                setActionType('Delete');
                setOpenCDialog(true);
              }}
              className={clsx(
								mainStyles.textDangerButton,
								styles.DeactivateButton
							)}
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
        cancelText={actionType}
        confirmText={'Cancel'}
        onCancel={handleCancelCDialog}
        onConfirm={handleConfirmCDialog}
        message={
          actionType === 'Delete'
            ? Translation.DIALOG.ACCOUNT_DELETE_CDIALOG_MSG
            : Translation.DIALOG.ACCOUNT_DEACTIVATE_CDIALOG_MSG
        }
      />
    </div>
  );
};

export default Account;
