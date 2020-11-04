import React from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './ForgotPassword.module.scss';
import mainStyles from './../../index.module.scss';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const history = useHistory();
  return (
    <div className={styles.forgotPasswordContainer}>
      <h1>Forgot your password?</h1>
      <p>Will send you an email with instructions to reset your password.</p>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        type='text'
      />
      <div className={styles.actionsContainer}>
        <Button className={mainStyles.defaultButton} variant='contained'>
          Send a link
        </Button>
        <Button
          onClick={() => {
            history.push('/login');
          }}
          className={mainStyles.defaultOutlinedButton}
          variant='outlined'
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
