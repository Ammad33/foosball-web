import React, { useState } from 'react';
import styles from './InfluencerCampaignDetail.module.scss';
import { X } from 'react-feather';
import ActivityDetail from '../ActivityDetail';
import DeliverablesDetail from '../DeliverablesDetail';
import Drawer from '../../../components/RightDrawer';
import CompensationDetail from '../CompensationDetail';
import AddCampaign from '../../AddCampaign';
import ClosedInfluencer from '../ClosedInfluencer';
import LostInfluencer from '../LostInfluencer';
import TeamMembersDetail from '../TeamMembersDetail';
import InviteInfluencer from '../InviteInflunecr';
import PendingInfluencer from '../PendingInfluencer';
import LiveInfluencer from '../LiveInfluencer';
import DeclineInfluencer from '../DeclineInfluencer';
import DraftBrandCampaignDetail from '../DraftBrandCampaignDetail';
import _ from 'lodash';

const CampaignDetailInfluencer = ({ status, addCampaign, setAddCampagin, data }) => {

  const [openDrawer, setOpenDrawer] = useState(false);
  const [step, setStep] = useState(1);
  const [element, setElement] = useState('');

  const handleEdit = (step) => {
    setAddCampagin(true);
    setStep(step);
  };

  const handleCloseDrawer = () => {
    setElement('');
    setOpenDrawer(false);
  };

  const getPage = (status) => {
    switch (status) {
      case 'DRAFT':
        return (
          <DraftBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            getTotal={getTotal}
            name={data && data.name}
          />
        );
      case 'CLOSED':
        return (
          <ClosedInfluencer
            data={data}
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            getTotal={getTotal}
            name={data && data.name}
          />
        );
      case 'LIVE':
        return (
          <LiveInfluencer
            data={data}
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            getTotal={getTotal}
            name={data && data.name}
          />
        );
      case 'INVITE':
        return (
          <InviteInfluencer
            data={data}
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            getTotal={getTotal}
            name={data && data.name}
          />
        );
      case 'LOST':
        return (
          <LostInfluencer
            data={data}
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            getTotal={getTotal}
            name={data && data.name}
          />
        );
      case 'PENDING':
        return (
          <PendingInfluencer
            data={data}
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            getTotal={getTotal}
            name={data && data.name}
          />
        );
      case 'DECLINED':
        return (
          <DeclineInfluencer
            data={data}
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            getTotal={getTotal}
            name={data && data.name}
          />
        );
      default:
        return;
    }
  };

  const getDrawerElement = (element) => {
    switch (element) {
      case 'Activity':
        return <ActivityDetail />;
      case 'Deliverable':
        return <DeliverablesDetail />;
      case 'Compensation':
        return <CompensationDetail compensations={data && data.compensation && data.compensation !== null ? _.compact(data.compensation) : []} budget={data.budget.amount} />;
      case 'TeamMembers':
        return <TeamMembersDetail />;
      default:
        return;
    }
  };

  const handleSeeClick = (value) => {
    setElement(value);
    setOpenDrawer(true);
  };
  const getTotal = (compensations) => {
    let total = 0;
    compensations && compensations !== null && compensations.length > 0 && compensations.forEach(item => {
      if (item.__typename === 'CompRevenueShare' && data && data.budget) {
        total = total + parseInt(item.percentage * parseFloat(data && data.budget));
      } else {
        total = total + parseInt(item.amount.amount);
      }
    })
    return total;
  }

  return (
    <>
      {addCampaign && (
        <AddCampaign
          open={addCampaign}
          step={step}
          campaign={data}
          brandId={data.brand.id}
          handleCancel={() => setAddCampagin(false)}
        />
      )}
      <Drawer anchor={'right'} open={openDrawer} onClose={handleCloseDrawer}>
        <div className={styles.x}>
          <X onClick={handleCloseDrawer} />
        </div>
        {getDrawerElement(element)}
      </Drawer>
      {getPage(status)}
    </>
  );
};

export default CampaignDetailInfluencer;
