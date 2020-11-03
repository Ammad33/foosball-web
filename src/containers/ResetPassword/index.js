import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './ResetPassword.module.scss';
import mainStyles from './../../index.module.scss';
const ResetPassword = () => {
  const [inputType, setInputType] = useState('password');
  return (
    <div className={styles.resetPasswordContainer}>
      <h1>Reset Password</h1>
      <p>Enter you new password below</p>
      <TextField
        id='outlined-basic'
        label='Password'
        variant='outlined'
        type={inputType}
      />
      <div className={styles.actionsContainer}>
        <Button className={mainStyles.defaultButton} variant='contained'>
          Reset Password
        </Button>
        <Button className={mainStyles.defaultOutlinedButton} variant='outlined'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
