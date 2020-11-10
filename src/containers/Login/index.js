import React, { useState, useContext } from 'react';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import styles from './Login.module.scss';
import { RootContext } from '../../context/RootContext';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';
import mainStyles from './../../index.module.scss';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
const FacebookSVG = () => {
  return <SVG src={require('../../assets/facebookClr.svg')} />;
};
const GoogleSVG = () => {
  return <SVG src={require('../../assets/googleClr.svg')} />;
};
const AppleSVG = () => {
  return <SVG src={require('../../assets/apple.svg')} />;
};
const EyeSVG = () => {
  return <SVG src={require('../../assets/eye-off.svg')} />;
};

const Login = () => {
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    currentUser,
    setCurrentUser,
    logoutMessage,
    setLogoutMessage,
  } = useContext(RootContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSignin = async () => {
    try {
      const user = await Auth.signIn(email, password);
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
      <h1 className={styles.heading}>Login</h1>
      <TextField
        id='outlined-basic'
        onChange={(e) => setEmail(e.target.value)}
        label='Email'
        variant='outlined'
        type='text'
      />
      <TextField
        id='outlined-basic'
        onChange={(e) => setPassword(e.target.value)}
        label='Password'
        variant='outlined'
        type={passwordShown ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment className={styles.inputendornment} position='end'>
              <span>
                {passwordShown ? (
                  <VisibilityIcon onClick={togglePasswordVisiblity} />
                ) : (
                  <VisibilityOffIcon onClick={togglePasswordVisiblity} />
                )}
              </span>
            </InputAdornment>
          ),
        }}
      />
      <a
        onClick={() => {
          history.push('/forgot-password');
        }}
      >
        Forgot Password?
      </a>
      <div className={styles.actionsContainer}>
        <Button
          className={mainStyles.defaultButton}
          onClick={onSignin}
          variant='contained'
        >
          Login
        </Button>
        <Button
          onClick={() => {
            history.push('/signup');
          }}
          className={mainStyles.defaultOutlinedButton}
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
        <div className={styles.line}>
          <div className={styles.line2}> </div>
          <div className={styles.lineText}> or continue with</div>
          <div className={styles.line2}></div>
        </div>
        <div className={styles.socialContainers}>
          <div>
            <GoogleSVG />
          </div>
          <div>
            <FacebookSVG />
          </div>
          <div>
            <AppleSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
