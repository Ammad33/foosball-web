import React, { useState, useContext, useEffect } from 'react';
import { API } from 'aws-amplify';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import styles from './Login.module.scss';
import { RootContext } from '../../context/RootContext';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';
import mainStyles from './../../index.module.scss';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
import FacebookSVG from '../../assets/facebook-logo-2019-thumb.png';
import GoogleSVG from '../../assets/google-logo-icon-png-transparent-background-osteopathy-16.png';
import AppleSVG from '../../assets/apple-logo-png-index-content-uploads-10.png';

const EyeOffSVG = () => {
  return <SVG src={require('../../assets/eye-off.svg')} />;
};
const EyeSVG = () => {
  return <SVG src={require('../../assets/eye.svg')} />;
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
    setActiveRoute,
  } = useContext(RootContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [meData, setMeData] = useState([]);

  const onSignin = async () => {
    try {
      const user = await Auth.signIn(email, password);
      setCurrentUser(user);
			setLogoutMessage('');
			getMeData();
    } catch (e) {
      setErrorMessage(e.message);
      setLogoutMessage('');
    }
	};

	// if (currentUser && currentUser !== null) {
	// 	getMeData();

  // }

  const getMeData = async () => {
    try {
      const mydata = await API.graphql({
        query: `{
						me {
							email
							fullName
							id
							organizations {
								organization {
									id
									name
									__typename
									... on Influencer {
										invites {
										name
										}
									}
									imageUrl
									email
								}
							}
							about
							age
							companyTitle
							imageUrl
							joined
							modified
							phoneNumber
						}
				}`,
			});
			debugger;
      setMeData(mydata.data.me.organizations[0].organization.__typename);
      if (mydata.data.me.organizations[0].organization.__typename == 'Brand') {
        history.push(`/campaigns`);
      } else {
        history.push('/influencer');
      }
    } catch (e) {
      console.log(e);
    }
  };



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
                  <div onClick={togglePasswordVisiblity}>
                    {' '}
                    <EyeSVG />{' '}
                  </div>
                ) : (
                  <div onClick={togglePasswordVisiblity}>
                    {' '}
                    <EyeOffSVG />{' '}
                  </div>
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

export default Login;
