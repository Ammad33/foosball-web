import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { Button, MenuItem } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { RootContext } from './../../context/RootContext';
import styles from './Logout.module.scss';


const Logout = () => {

  const {
    setCurrentUser,
    setLogoutMessage,
    setBrandName,
    setBrandIdd, setRoute, setBrands,setbrandType
  } = useContext(RootContext);

  const signOut = async () => {
    try {
      const signOut = await Auth.signOut({ global: true });
      setLogoutMessage('Successfully logged out');
      setCurrentUser();
      setBrands(null);
      setBrandName();
			setBrandIdd();
			setbrandType();
      setRoute('/');

    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <>
      <MenuItem className={styles.itemsFont} onClick={signOut} >
        Logout
    </MenuItem>
    </>
  )

};

export default Logout;