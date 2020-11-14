import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {

  const prevUser = JSON.parse(window.localStorage.getItem('user')) || null;
  const preActiveRoute = localStorage.getItem('route') || 'Campaign';
  const [currentUser, setCurrentUser] = useState(prevUser);
  const [logoutMessage, setLogoutMessage] = useState('');
  const [activeRoute, setActiveRoute] = useState(preActiveRoute)

  useEffect(
    () => {
      if (!currentUser) localStorage.clear();
      else window.localStorage.setItem('user', JSON.stringify(currentUser));
      if (!activeRoute) localStorage.removeItem('route');
      else localStorage.setItem('route', activeRoute)
    },
    [currentUser, activeRoute]
  );

  const defaultContext = {
    currentUser,
    setCurrentUser,
    logoutMessage,
    setLogoutMessage,
    activeRoute,
    setActiveRoute
  };

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};