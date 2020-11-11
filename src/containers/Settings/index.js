import React, { useState } from 'react';
import styles from './Setting.module.scss';
import { Grid } from '@material-ui/core';
import Account from './Account';

const Setting = () => {
  const [active, setActive] = useState('account');

  const getContents = () => {
    switch (active) {
      case 'account':
        return <Account />;
      case 'notification':
        return <div>Notification</div>;
      case 'connectedAccounts':
        return <div>Connected Account</div>;
      case 'contacts':
        return <div>Contacts</div>;
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className={styles.settingContainer}>
      <div className={styles.settingHeading}>
        <h1>Settings</h1>
      </div>
      <div className={styles.settingHeadingButton}>
        <button
          className={active === 'account' ? styles.active : ''}
          onClick={() => setActive('account')}
        >
          Account
        </button>
        <button
          className={active === 'notification' ? styles.active : ''}
          onClick={() => setActive('notification')}
        >
          Notification
        </button>
        <button
          className={active === 'connectedAccounts' ? styles.active : ''}
          onClick={() => setActive('connectedAccounts')}
        >
          Connected Accounts
        </button>
        <button
          className={active === 'contacts' ? styles.active : ''}
          onClick={() => setActive('contacts')}
        >
          Contacts
        </button>
      </div>
      <div>{getContents()}</div>
    </div>
  );
};

export default Setting;
