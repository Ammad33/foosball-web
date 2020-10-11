import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';

import CampaignsCard from './CampaignsCard';

const Campaigns = () => {
  const { authToken } = useContext(RootContext);

  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
        return <CampaignsCard />;
      })}
    </div>
  );
};

export default Campaigns;
