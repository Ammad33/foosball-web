import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from './ListItem';
import SVG from 'react-inlinesvg';
import { Button } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { RootContext } from './../../context/RootContext';
import styles from './LeftSide.module.scss';

const IconProspects = () => {
  return <SVG src={require('../../assets/Prospects.svg')} />;
};
const IconCampaign = () => {
  return <SVG src={require('../../assets/Campaigns.svg')} />;
};
const IconMessages = () => {
  return <SVG src={require('../../assets/Messages.svg')} />;
};
const IconReports = () => {
  return <SVG src={require('../../assets/Reports.svg')} />;
};
const IconSettings = () => {
  return <SVG src={require('../../assets/settings.svg')} />;
};
const IconWallet = () => {
  return <SVG src={require('../../assets/Wallet.svg')} />;
};
const LeftSideDrawer = () => {
  const history = useHistory();
  const [active, setActive] = useState('Campaign');
  const { setCurrentUser, setLogoutMessage, currentUser } = useContext(
    RootContext
  );

  const signOut = async () => {
    try {
      const signOut = await Auth.signOut({ global: true });
      setLogoutMessage('Successfully logged out');
      setCurrentUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <>
      <ListItem
        icon={<IconCampaign />}
        active={active === 'Campaign' ? true : false}
        title={'Campaigns'}
        onClick={() => {
          setActive('Campaign');
          history.push('/campaigns');
        }}
      />

      <ListItem
        icon={<IconProspects />}
        active={active === 'Prospects' ? true : false}
        title={'Prospects'}
        onClick={() => setActive('Prospects')}
      />

      <ListItem
        icon={<IconReports />}
        active={active === 'Reports' ? true : false}
        title={'Reports'}
        onClick={() => setActive('Reports')}
        title={'Reports'}
      />

      <ListItem
        icon={<IconMessages />}
        active={active === 'Messages' ? true : false}
        onClick={() => setActive('Messages')}
        title={'Messages'}
      />

      <ListItem
        icon={<IconWallet />}
        active={active === 'Wallet' ? true : false}
        title={'Wallet'}
        onClick={() => setActive('Wallet')}
      />

      <ListItem
        icon={<IconSettings />}
        active={active === 'Settings' ? true : false}
        title={'Settings'}
        onClick={() => setActive('Settings')}
      />

      <div className={styles.logoutButton}>
        <Button onClick={signOut} variant='contained' color='secondary'>
          Logout
        </Button>
      </div>

      <div className={styles.tokenContainer}>
        <p>Email: {currentUser.attributes.email}</p>
        <p>Access Token: </p>
        <p className={styles.token}>
          {currentUser.signInUserSession.accessToken.jwtToken}
        </p>
        <p>Id Token: </p>
        <p className={styles.token}>
          {currentUser.signInUserSession.idToken.jwtToken}
        </p>
        <p>Refresh Token: </p>
        <p className={styles.token}>
          {currentUser.signInUserSession.refreshToken.token}
        </p>
      </div>
    </>
  );
};

export default LeftSideDrawer;
