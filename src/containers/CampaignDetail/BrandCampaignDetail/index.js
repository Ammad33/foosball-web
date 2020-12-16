import React, { useState } from 'react';
import styles from './BrandCampaignDetail.module.scss';
import { X } from 'react-feather';
import Drawer from '../../../components/RightDrawer';
import ActivityDetail from '../ActivityDetail';
import CompensationDetail from '../CompensationDetail';
import DeliverablesDetail from '../DeliverablesDetail';
import AddCampaign from '../../AddCampaign';
import TeamMembersDetail from '../TeamMembersDetail';
import DraftBrandCampaignDetail from '../DraftBrandCampaignDetail';
import PendingBrandCampaignDetail from '../PendingBrandCampaignDetail';
import LiveBrandCampaignDetail from '../LiveBrandCampaignDetail';
import ClosedBrandCampaignDetail from '../ClosedBrandCampaignDetail';
import LostBrandCampaignDetail from '../LostBrandCampaignDetail';
import _ from 'lodash';

const BrandCampaignDetail = ({ handleDelete, status, addCampaign, updateCampaign, setAddCampagin, data, addInTeam,
  removeInTeam, search,
  handleSearch, selectedMembers,
  team }) => {
  const [step, setStep] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [element, setElement] = useState('');

  const handleEdit = (step) => {
    setAddCampagin(true);
    setStep(step);
  };

  const handleSeeClick = (value) => {
    setElement(value);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    if (element === 'TeamMembers') {
      updateCampaign();
    }
    setElement('');
    setOpenDrawer(false);
  };
  const getDrawerElement = (element) => {
    switch (element) {
      case 'Activity':
        return <ActivityDetail type={'Brand'} />;
      case 'Deliverable':
        return <DeliverablesDetail deliverables={data && data.deliverables} />;
      case 'Compensation':
        return <CompensationDetail compensations={data && data.compensation && data.compensation !== null ? _.compact(data.compensation) : []} budget={data.budget.amount} />;
      case 'TeamMembers':
        return <TeamMembersDetail addInTeam={addInTeam}
          removeInTeam={removeInTeam}
          search={search}
          handleSearch={handleSearch}
          selectedMembers={selectedMembers}
          team={team} />;
      default:
        return;
    }
  };


  const getPage = (status) => {
    switch (status) {
      case 'DRAFT':
        return (
          <DraftBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            name={data && data.name}
            handleDelete={handleDelete}
          />
        );
      case 'CLOSED':
        return (
          <ClosedBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            name={data && data.name}
            handleDelete={handleDelete}
          />
        );
      case 'LIVE':
        return (
          <LiveBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            name={data && data.name}
            handleDelete={handleDelete}
          />
        );
      case 'INVITE':
        return (
          <PendingBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            name={data && data.name}
            handleDelete={handleDelete}
          />
        );
      case 'LOST':
        return (
          <LostBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            name={data && data.name}
            handleDelete={handleDelete}
          />
        );
      case 'PENDING':
        return (
          <PendingBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            name={data && data.name}
            handleDelete={handleDelete}
          />
        );
      case 'DECLINED':
        return (
          <LostBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
            name={data && data.name}
            handleDelete={handleDelete}
          />
        );
      default:
        return <div>Default</div>;
    }
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
      {status !== '' && getPage(status)}
    </>
  );
};

export default BrandCampaignDetail;
