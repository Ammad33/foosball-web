import React from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './Signup.module.scss';
import mainStyles from './../../index.module.scss';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
const FacebookSVG = () => {
  return <SVG src={require('../../assets/facebookClr.svg')} />;
};
const GoogleSVG = () => {
  return <SVG src={require('../../assets/googleClr.svg')} />;
};
const AppleSVG = () => {
  return <SVG src={require('../../assets/apple.svg')} />;
};

const Signup = () => {
  const history = useHistory();
  return (
    <div className={styles.signupContainer}>
      <h1>Sign Up</h1>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        type='text'
      />
      <TextField
        id='outlined-basic'
        label='EMAIL'
        variant='outlined'
        type='text'
      />
      <TextField
        id='outlined-basic'
        label='password'
        variant='outlined'
        type='password'
        helperText='password'
        error='false'
      />
      <div className={styles.actionsContainer}>
        <Button className={mainStyles.defaultButton} variant='contained'>
          Signup
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
      <div>
        <hr data-content='AND' />
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

export default Signup;
