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
          <Link className={styles.sidebarLink} to='/organizations'>
            <EqualizerIcon />
            Organizations
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/companies'>
            <TerrainIcon />
            Companies
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/teams'>
            <GroupIcon />
            Teams
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/members'>
            <GroupIcon />
            Members
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/datasets'>
            <StorageIcon />
            Datasets
          </Link>
        </li>
        <li>
          <Link className={styles.sidebarLink} to='/apps'>
            <AppsIcon />
            Apps
          </Link>
        </li>
      </ul>
      {/* <List style={{ width: '240px' }}>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );
};

export default LeftSideDrawer;
