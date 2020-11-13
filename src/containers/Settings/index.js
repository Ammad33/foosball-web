import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from './Setting.module.scss';
import Notifications from './Notifications';

import Account from './Account';
import ConnectedAccounts from './ConnectedAccounts';
import Contacts from './Contacts';
import Brands from './Brands';

const Setting = () => {
  const [active, setActive] = useState('account');
  const [actionRequired, setActionRequired] = useState(true);
  const [signContracts, setSignContracts] = useState(true);
  const [influncerPosts, setInfluncerPosts] = useState(false);
  const [campaignStart, setCampaignStart] = useState(false);

  const getContents = () => {
    switch (active) {
      case 'account':
        return <Account />;
      case 'notification':
        return (
          <Notifications
            actionRequired={actionRequired}
            signContracts={signContracts}
            influncerPosts={influncerPosts}
            campaignStart={campaignStart}
            hanldeActionRequired={(e) => setActionRequired(e.target.checked)}
            hanldeSignContracts={(e) => setSignContracts(e.target.checked)}
            hanldeInfluencerPost={(e) => setInfluncerPosts(e.target.checked)}
            hanldeCampaignStart={(e) => setCampaignStart(e.target.checked)}
          />
        );
      case 'connectedAccounts':
        return <ConnectedAccounts />;
      case 'contacts':
        // return <Contacts />;
        return <Brands />;
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
      <Grid containers>{getContents()}</Grid>
    </div>
  );
};

export default Setting;
