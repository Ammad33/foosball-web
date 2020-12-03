import React, { useState, useEffect, useContext, useCallback } from 'react';
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
import { RootContext } from '../../../context/RootContext'

const BrandCampaignDetail = ({ status, addCampaign, setAddCampagin, data }) => {

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
    setElement('');
    setOpenDrawer(false);
  };
  const getDrawerElement = (element) => {
    switch (element) {
      case 'Activity':
        return <ActivityDetail type={'Brand'} />;
      case 'Deliverable':
        return <DeliverablesDetail />;
      case 'Compensation':
        return <CompensationDetail />;
      case 'TeamMembers':
        return <TeamMembersDetail />;
      default:
        return;
    }
  };

  // const getCampaign = async () => {
  //   try {
  //     const campaign = await API.graphql({
  //       query: `{
  //         campaign(brandId: "${brandId}", id: "${campaignId}") {
  //           id
  // 					name
  // 					startDate
  // 					status
  //           endDate
  //           discount {
  //             ... on PercentageDiscount {
  //               __typename
  //               percentage
  //             }
  //             ... on FlatDiscount {
  //               __typename
  //               amount {
  //                 amount
  //                 currency
  //               }
  //             }
  //           }
  //           budget {
  //             amount
  //             currency
  //           }
  //           targetGrossSales {
  //             amount
  //             currency
  //           }
  //           brandTeam {
  //             id
  //             imageUrl
  //             fullName
  //           }
  //           brand {
  //             id
  //           }
  //           negotiables {
  //             campaign_duration
  //             monthly_retainer_fee
  //             post_fee
  //             post_frequency
  //             revenue_share
  //             story_fee
  //           }
  //         }
  //     }`,
  //     });
  //     console.log('campaign', campaign.data.campaign);
  //     setData(campaign.data.campaign);
  //   } catch (e) { }
  // };

  const getPage = (status) => {
    switch (status) {
      case 'DRAFT':
        return (
          <DraftBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
          />
        );
      case 'CLOSED':
        return (
          <ClosedBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
          />
        );
      case 'LIVE':
        return (
          <LiveBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
          />
        );
      case 'INVITE':
        return (
          <PendingBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
          />
        );
      case 'LOST':
        return (
          <LostBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
          />
        );
      case 'PENDING':
        return (
          <PendingBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
          />
        );
      case 'DECLINED':
        return (
          <LostBrandCampaignDetail
            handleEdit={handleEdit}
            handleSeeClick={handleSeeClick}
            data={data}
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
