import React, { useState, useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import { Auth } from 'aws-amplify';
import { TextField, Button, Grid,InputAdornment } from '@material-ui/core';
import styles from './Signup.module.scss';
import mainStyles from './../../index.module.scss';
import SVG from 'react-inlinesvg';
import { useHistory } from 'react-router-dom';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


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




const Signup = () => {

	const history = useHistory();
	const {
    currentUser,
    setCurrentUser,
    logoutMessage,
    setLogoutMessage,
	} = useContext(RootContext);
	
	const [passwordShown, setPasswordShown] = useState(false);
  const [username, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	
	const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
	};

  const onSignup = async () => {
    try {
      const user = await Auth.signUp({username,password,attributes:{email}});
      //setCurrentUser(user);
      setLogoutMessage('');
    } catch (e) {
      setErrorMessage(e.message);
      setLogoutMessage('');
    }
  };


	const [terms, setTerms] = useState(true);

	const handleTerms = () => {
		setTerms(terms ? false : true);
	}


  return (
    <div className={styles.signupContainer}>
      <h1>Sign Up</h1>
      <TextField
        id='outlined-basic'
				label='Fullname'
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
				type={passwordShown ? "text" : "password"}
				InputProps={{
					endAdornment: <InputAdornment className={styles.inputendornment} position="end">
						<span> <VisibilityOffIcon onClick={togglePasswordVisiblity}/> </span> </InputAdornment>,
				}}
      />

				<Grid container alignItems="center" >
						<Grid item xs={1} className={styles.optionsItem}>
							{terms ?
									<span >  
									<CheckCircleIcon onClick={handleTerms}/>				
									</span>	
									:
									<span >  
										<RadioButtonUncheckedIcon
										onClick={handleTerms}
										className={styles.svgDisabled}/>				
									</span>			
							}
							
						</Grid>
						<Grid item xs={10}>
							<p className= {styles.textStyle}>
								I agree to the Terms of Service and Privacy Policy
							</p>
						</Grid>
				
				</Grid>
      <div className={styles.actionsContainer}>
				<Button 
				onClick={onSignup}
				className={mainStyles.defaultButton} 
				variant='contained'>
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
			<div className={styles.line} >
					<div className={styles.line2}> </div>
					<div className={styles.lineText}> or continue with</div>
					<div className={styles.line2 }>
					</div>
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

export default Signup;
