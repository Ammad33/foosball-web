import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './Login.module.scss';
import { RootContext } from '../../context/RootContext';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';
import mainStyles from './../../index.module.scss';

const Login = () => {
  const {
    currentUser,
    setCurrentUser,
    logoutMessage,
    setLogoutMessage,
  } = useContext(RootContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSignin = async () => {
    try {
      const user = await Auth.signIn(username, password);
      setCurrentUser(user);
      setLogoutMessage('');
    } catch (e) {
      setErrorMessage(e.message);
      setLogoutMessage('');
    }
  };

  if (currentUser && currentUser !== null) {
    return <Redirect to='/campaigns' />;
  }

  return (
    <div className={styles.signinContainer}>
      <h1>Login</h1>
      <TextField
        id='outlined-basic'
        onChange={(e) => setUsername(e.target.value)}
        label='Username'
        variant='outlined'
        type='text'
      />
      <TextField
        id='outlined-basic'
        onChange={(e) => setPassword(e.target.value)}
        label='Password'
        variant='outlined'
        type='password'
      />
      <a href='#'>Forgot Password?</a>
      <div class={styles.actionsContainer}>
        <Button
          className={mainStyles.defaultButton}
          onClick={onSignin}
          variant='contained'
        >
          Login
        </Button>
        <Button
          className={mainStyles.defaultOutlinedButton}
          onClick={onSignin}
          variant='outlined'
        >
          Signup
        </Button>
      </div>
      {errorMessage !== '' ? (
        <p className={styles.error}>
          <i>{errorMessage}</i>
        </p>
      ) : null}
      {logoutMessage !== '' ? (
        <p className={styles.logOut}>
          <i>{logoutMessage}</i>
        </p>
      ) : null}
      <div>
        <hr data-content='AND' />
        <div className={styles.socialContainers}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
