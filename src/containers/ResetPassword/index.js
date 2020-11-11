import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './ResetPassword.module.scss';
import mainStyles from './../../index.module.scss';
import Reset from './reset';


const ResetPassword = () => {
	const [resetConfirmation , setResetConfirmation] = useState(false);

  const [inputType, setInputType] = useState('password');
  return (
		resetConfirmation ? 
		<Reset/>:
    <div className={styles.resetPasswordContainer}>
      <h1 className={styles.heading}>Reset Password</h1>
      <p className={styles.des}>Enter you new password below</p>
      <TextField
        id='outlined-basic'
        label='Password'
        variant='outlined'
        type={inputType}
      />
      <div className={styles.actionsContainer}>
        <Button className={mainStyles.defaultButton} variant='contained' onClick={()=>setResetConfirmation(true)}>
          <p className={styles.buttonText}>Reset Password</p>
        </Button>
        <Button className={mainStyles.defaultOutlinedButton} variant='outlined'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
