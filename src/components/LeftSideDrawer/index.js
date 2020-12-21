import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from './ListItem';
import SVG from 'react-inlinesvg';
import { RootContext } from './../../context/RootContext';
import styles from './LeftSide.module.scss';
import { Users, Mail } from 'react-feather';

const IconProspects = () => {
  return <SVG src={require('../../assets/Prospects.svg')} />;
};
const IconCampaign = () => {
  return <SVG src={require('../../assets/Campaigns.svg')} />;
};

const IconReports = () => {
  return <SVG src={require('../../assets/Reports.svg')} />;
};

const IconWallet = () => {
  return <SVG src={require('../../assets/Wallet.svg')} />;
};
const LeftSideDrawer = () => {
  const history = useHistory();
  const { activeRoute, setActiveRoute } = useContext(RootContext);

  return (
    <>
      <ListItem
        className={styles.listItem}
        icon={<IconCampaign />}
        active={activeRoute === 'Campaign' ? true : false}
        title={'Campaigns'}
        onClick={() => {
          setActiveRoute('Campaign');
          history.push('/campaigns');
        }}
      />

      <ListItem
        icon={<IconProspects />}
        active={activeRoute === 'Prospects' ? true : false}
        title={'Prospects'}
        onClick={() => setActiveRoute('Prospects')}
      />

      <ListItem
        icon={<IconReports />}
        active={activeRoute === 'Reports' ? true : false}
        title={'Reports'}
        onClick={() => {
          setActiveRoute('Reports');
          history.push('/reports');
        }}
        title={'Reports'}
      />

      <ListItem
        icon={<Mail />}
        active={activeRoute === 'Messages' ? true : false}
        onClick={() => {
          setActiveRoute('Messages');
          history.push('/messages');
        }}
        title={'Messages'}
      />

      <ListItem
        icon={<Users />}
        active={activeRoute === 'Contacts' ? true : false}
        onClick={() => {
          setActiveRoute('Contacts');
          history.push('/contacts');
        }}
        title={'Contacts'}
      />

      <ListItem
        icon={<IconWallet />}
        active={activeRoute === 'Wallets' ? true : false}
        title={'Wallets'}
        onClick={() => setActiveRoute('Wallets')}
      />
    </>
  );
};

export default LeftSideDrawer;
