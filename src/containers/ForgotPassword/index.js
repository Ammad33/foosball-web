import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import styles from './ForgotPassword.module.scss';
import mainStyles from './../../index.module.scss';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
	const history = useHistory();
	const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const onForgotPassword = async () => {
    try {
      const user = await Auth.forgotPassword(username);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <h1 className={styles.heading}>Forgot your password?</h1>
      <p className={styles.des}>Will send you an email with instructions to reset your password.</p>
      <TextField
        id='outlined-basic'
				label='Email'
				onChange={(e) => setUsername(e.target.value)}
        variant='outlined'
				type='text'
				style= {{marginTop: "35px"}}
      />
      <div className={styles.actionsContainer}>
        <Button onClick={onForgotPassword} className={mainStyles.defaultButton} variant='contained'>
          <p className={styles.buttonText}>
						Send a link </p>
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
