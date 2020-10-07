import React from 'react';
import { Link } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import StorageIcon from '@material-ui/icons/Storage';
import AppsIcon from '@material-ui/icons/Apps';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TerrainIcon from '@material-ui/icons/Terrain';

import styles from './../../styles/LeftSideDrawer.module.css';

const LeftSideDrawer = () => {
  return (
    <div className={styles.leftDrawer}>
      <ul className={styles.sidebarList}>
        <li>
          <Link className={styles.sidebarLink} to='/'>
            <EqualizerIcon />
            Dashboard
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/account-profile'>
            <EqualizerIcon />
            Account Profile
          </Link>
        </li>
        {/* <li>
          <Link className={styles.sidebarLink} to='/campaigns'>
            <EqualizerIcon />
            Campaigns
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/products'>
            <StorageIcon />
            Products
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/users'>
            <GroupIcon />
            Users
          </Link>
        </li> */}
        <li>
          <Link className={styles.sidebarLink} to='/regional-settings'>
            <AppsIcon />
            Regional Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideDrawer;
