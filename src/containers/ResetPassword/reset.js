import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './ResetPassword.module.scss';
import mainStyles from './../../index.module.scss';

const Reset = () => {
  const [inputType, setInputType] = useState('password');
  return (
    <div className={styles.resetPasswordContainer}>
      <h1 className={styles.heading}>Password Reset</h1>
      <p className={styles.des}>You can now login using your new password.</p>
      <TextField
        id='outlined-basic'
        label='Password'
        variant='outlined'
        type={inputType}
      />
      <div className={styles.actionsContainer}>
        <Button className={mainStyles.defaultOutlinedButton} variant='outlined'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Reset;
