import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {

  const prevUser = JSON.parse(window.localStorage.getItem('user')) || null;
  const preActiveRoute = localStorage.getItem('route') || 'Campaign';
  const bId = localStorage.getItem('bId') || null;
  const [currentUser, setCurrentUser] = useState(prevUser);
  const [logoutMessage, setLogoutMessage] = useState('');
  const [activeRoute, setActiveRoute] = useState(preActiveRoute);
  const [activeCampaign, setActiveCampaign] = useState('');
  const [brandId, setBrandIdd] = useState(bId);

  useEffect(
    () => {
      if (!currentUser) localStorage.clear();
      else window.localStorage.setItem('user', JSON.stringify(currentUser));
      if (!activeRoute) localStorage.removeItem('route');
      else localStorage.setItem('route', activeRoute)
      if (!brandId) localStorage.removeItem('bId')
      else localStorage.setItem('bId', brandId)
    },
    [currentUser, activeRoute, brandId]
  );

  const defaultContext = {
    currentUser,
    setCurrentUser,
    logoutMessage,
    setLogoutMessage,
    activeRoute,
    setActiveRoute,
    activeCampaign,
    setActiveCampaign,
    brandId,
    setBrandIdd
  };

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};