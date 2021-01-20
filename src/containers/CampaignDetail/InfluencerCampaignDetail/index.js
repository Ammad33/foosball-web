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
import InviteInfluencer from '../InviteInfluencer';
import PendingInfluencer from '../PendingInfluencer';
import LiveInfluencer from '../LiveInfluencer';
import DeclineInfluencer from '../DeclineInfluencer';
import DraftBrandCampaignDetail from '../DraftBrandCampaignDetail';
import _ from 'lodash';

const CampaignDetailInfluencer = ({
  headingValue,
  status,
  handleDelete,
  addCampaign,
  setAddCampagin,
  data,
  addInTeam,
  removeInTeam,
  search,
  handleSearch,
  selectedMembers,
  team,
  updateCampaign,
  setAll,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [step, setStep] = useState(1);
  const [element, setElement] = useState('');

  const handleEdit = (step) => {
    setAddCampagin(true);
    setStep(step);
  };

  const handleActiveStep = () => {
    let negotialble = true;
    Object.values(data.negotiables).map((item) => {
      if (item === true) {
        negotialble = false;
      }
    });

    if (
      (data.discount && data.discount !== null &&
        data.discount.percentage &&
        data.discount.percentage === '') || data.discount === null ||
      (data.discount !== null && data.discount.amount && data.discount.amount.amount === '') ||
      data.invitationMessage === null || data.invitationMessage === ''
    ) {
      setStep(1);
      setAddCampagin(true);
    } else if (
      data.budget === null || data.budget.amount === '' ||
      data.targetGrossSales === null || data.targetGrossSales.amount === ''
    ) {
      setStep(3);
      setAddCampagin(true);
    } else if (data.deliverables === null || data.deliverables && data.deliverables.length === 0) {
      setStep(5);
      setAddCampagin(true);
    } else if (data.compensation === null || data.compensation && data.compensation.length === 0) {
      setStep(6);
      setAddCampagin(true);
    } else if (negotialble) {
      setStep(7);
      setAddCampagin(true);
    } else if (data.influencer === null) {
      setStep(8);
      setAddCampagin(true);
    }
  };

  const handleCloseDrawer = () => {
    if (element === 'TeamMembers') {
      updateCampaign();
    }
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
            handleDelete={handleDelete}
            handleActiveStep={handleActiveStep}
            setAll={setAll}
            headingValue={headingValue}
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
            handleDelete={handleDelete}
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
            handleDelete={handleDelete}
          />
        );
      case 'INVITED':
        return (
          <InviteInfluencer
            data={data}
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            getTotal={getTotal}
            name={data && data.name}
            handleDelete={handleDelete}
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
            handleDelete={handleDelete}
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
            handleDelete={handleDelete}
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
            handleDelete={handleDelete}
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
        return <DeliverablesDetail deliverables={data && data.deliverables} />;
      case 'Compensation':
        return (
          <CompensationDetail
            compensations={
              data && data.compensation && data.compensation !== null
                ? _.compact(data.compensation)
                : []
            }
            targetGrossSales={data.targetGrossSales.amount}
          />
        );
      case 'TeamMembers':
        return (
          <TeamMembersDetail
            addInTeam={addInTeam}
            removeInTeam={removeInTeam}
            search={search}
            handleSearch={handleSearch}
            selectedMembers={selectedMembers}
            team={team}
          />
        );
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
    compensations &&
      compensations !== null &&
      compensations.length > 0 &&
      compensations.forEach((item) => {

        if (item.__typename === 'CompRevenueShare' && data && data.targetGrossSales && data.targetGrossSales !== null) {

          total =
            total + parseFloat(item.percentage * 1000) * parseFloat(data.targetGrossSales.amount / 100);
        } else {
          total = total + parseFloat(item.amount.amount);
        }
      });
    return parseFloat(total).toFixed(2);
  };

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
