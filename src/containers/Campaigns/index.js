import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';

const Campaigns = () => {
  const { authToken } = useContext(RootContext);

  return <h1>Campaigns {authToken}</h1>;
};

export default Campaigns;
