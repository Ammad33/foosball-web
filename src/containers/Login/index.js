import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './Login.module.scss';
import { RootContext } from '../../context/RootContext';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

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
      <h1>Signin</h1>
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
      <Button onClick={onSignin} variant='contained' color='primary'>
        Signin
      </Button>
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
    </div>
  );
};

export default Login;
