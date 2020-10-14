import React, { useState } from 'react';
import ListItem from './ListItem';
import Campaigns from '../../assets/Campaigns.svg';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';

const LeftSideDrawer = () => {
  const [active, setActive] = useState('Campaign');

  return (
    <>
      <ListItem
        icon={<AssignmentSharpIcon fontSize='small' />}
        active={active === 'Campaign' ? true : false}
        title={'Campaigns'}
        onClick={() => setActive('Campaign')}
      />

      <ListItem
        icon={<OfflineBoltIcon fontSize='small' />}
        active={active === 'Prospects' ? true : false}
        title={'Prospects'}
        onClick={() => setActive('Prospects')}
      />

      <ListItem
        icon={<BarChartIcon fontSize='small' />}
        active={active === 'Reports' ? true : false}
        title={'Reports'}
        onClick={() => setActive('Reports')}
        title={'Messages'}
      />

      <ListItem
        icon={<MailOutlineIcon fontSize='small' />}
        active={active === 'Messages' ? true : false}
        onClick={() => setActive('Messages')}
        title={'Messages'}
      />

      <ListItem
        icon={<AttachMoneyIcon fontSize='small' />}
        active={active === 'Wallet' ? true : false}
        title={'Wallet'}
        onClick={() => setActive('Wallet')}
      />

      <ListItem
        icon={<SettingsSharpIcon fontSize='small' />}
        active={active === 'Settings' ? true : false}
        title={'Settings'}
        onClick={() => setActive('Settings')}
      />
    </>
  );
};

export default LeftSideDrawer;
