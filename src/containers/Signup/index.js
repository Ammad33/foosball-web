import React, { useState, useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import { Auth } from 'aws-amplify';
import { Button, Grid, InputAdornment } from '@material-ui/core';
import TextField from '../../components/TextField';
import styles from './Signup.module.scss';
import mainStyles from './../../index.module.scss';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FacebookSVG from '../../assets/facebook-logo-2019-thumb.png';
import GoogleSVG from '../../assets/google-logo-icon-png-transparent-background-osteopathy-16.png';
import AppleSVG from '../../assets/apple-logo-png-index-content-uploads-10.png';

import { Link } from 'react-router-dom';

// const FacebookSVG = () => {
//   return <SVG src={require('../../assets/facebook-logo-2019-thumb.png')} />;
// };
// const GoogleSVG = () => {
//   return <SVG src={require('../../assets/google-logo-icon-png-transparent-background-osteopathy-16.png')} />;
// };
// const AppleSVG = () => {
//   return <SVG src={require('../../assets/apple-logo-png-index-content-uploads-10.png')} />;
// };
const Eye_offSVG = () => {
  return <SVG src={require('../../assets/eye-off.svg')} />;
};
const EyeSVG = () => {
  return <SVG src={require('../../assets/eye.svg')} />;
};

const Signup = () => {
  const history = useHistory();
  const {
    currentUser,
    setCurrentUser,
    logoutMessage,
    setLogoutMessage,
  } = useContext(RootContext);

  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setFullname] = useState('');
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorState, setErrorState] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSignup = async () => {
    try {
      if (terms === true) {
        const user = await Auth.signUp({
          username,
          password,
          attributes: { name },
        });
        const loggedInUser = await Auth.signIn(username, password);
        setCurrentUser(loggedInUser);
        console.log(user);
        setErrorState(false);
        setLogoutMessage('');
        setErrorMessage('');
        history.push('/onboarding');
      } else {
        setErrorMessage('Terms and conditions');
        setErrorState(true);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setErrorState(true);
      setLogoutMessage('');
    }
  };

  const [terms, setTerms] = useState(false);
  const handleTerms = () => {
    setTerms(terms ? false : true);
  };
  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.heading}>Sign Up</h1>
      <TextField
        id='outlined-basic'
        label='Full Name'
        onChange={(e) => setFullname(e.target.value)}
        variant='outlined'
        type='text'
      />
      <TextField
        id='outlined-basic'
        label='Email'
        onChange={(e) => setEmail(e.target.value)}
        variant='outlined'
        type='text'
      />
      <TextField
        id='outlined-basic'
        label='Create Password'
        onChange={(e) => setPassword(e.target.value)}
        variant='outlined'
        type={passwordShown ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment className={styles.inputendornment} position='end'>
              <span>
                {passwordShown ? (
                  <div onClick={togglePasswordVisiblity}>
                    {' '}
                    <EyeSVG />{' '}
                  </div>
                ) : (
                  <div onClick={togglePasswordVisiblity}>
                    {' '}
                    <Eye_offSVG />{' '}
                  </div>
                )}
              </span>
            </InputAdornment>
          ),
        }}
      />

      <Grid container alignItems='center'>
        <Grid item xs={1} className={styles.optionsItem}>
          {terms ? (
            <span>
              <CheckCircleIcon onClick={handleTerms} />
            </span>
          ) : (
            <span>
              <RadioButtonUncheckedIcon
                onClick={handleTerms}
                className={styles.svgDisabled}
              />
            </span>
          )}
        </Grid>
        <Grid item xs={10}>
          <p className={styles.textStyle1}>
            I agree to the <Link to='#'>Terms of Service</Link> and{' '}
            <Link to='#'>Privacy Policy</Link>
          </p>
        </Grid>
      </Grid>
      <div className={styles.actionsContainer}>
        <Button
          onClick={onSignup}
          className={mainStyles.defaultButton}
          variant='contained'
        >
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
      <Grid item xs={10}>
        <p className={styles.errorText}>{errorState ? errorMessage : ' '}</p>
      </Grid>

      <div>
        <div className={styles.line}>
          <div className={styles.line2}> </div>
          <div className={styles.lineText}> or continue with</div>
          <div className={styles.line2}></div>
        </div>
        <div className={styles.socialContainers}>
          <div>
            <img className={styles.logoDiv} src={GoogleSVG} alt='Google' />
          </div>
          <div>
            <img className={styles.logoDiv} src={FacebookSVG} alt='Facebook' />
          </div>
          <div>
            <img className={styles.logoDiv} src={AppleSVG} alt='Apple' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
