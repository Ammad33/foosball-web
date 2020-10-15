import React, { useState } from 'react';
import ListItem from './ListItem';
import Campaigns from '../../assets/Campaigns.svg';
import SVG from 'react-inlinesvg';


//import Prospects from '../../assets/Prospects.svg';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
const IconProspects = () => {return <SVG src={require('../../assets/Prospects.svg')} />};
const IconCampaign = () => {return <SVG src={require('../../assets/Campaigns.svg')} />};
const IconMessages = () => {return <SVG src={require('../../assets/Messages.svg')} />};
const IconReports = () => {return <SVG src={require('../../assets/Reports.svg')} />};
const IconSettings = () => {return <SVG src={require('../../assets/settings.svg')} />};
const IconWallet = () => {return <SVG src={require('../../assets/Wallet.svg')} />};
const LeftSideDrawer = () => {
  const [active, setActive] = useState('Campaign');

  return (
    <>
      <ListItem
        icon={<IconCampaign />}
        active={active === 'Campaign' ? true : false}
        title={'Campaigns'}
        onClick={() => setActive('Campaign')}
      />

      <ListItem
        icon={<IconProspects/>}
        active={active === 'Prospects' ? true : false}
        title={'Prospects'}n
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
    </>
  );
};

export default LeftSideDrawer;
