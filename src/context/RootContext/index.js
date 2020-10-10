import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {

  const prevAuth = window.localStorage.getItem('auth') || null;


  const [authToken, setAuthToken] = useState(prevAuth);
    
  useEffect(
    () => {
      if (!authToken) localStorage.clear();
      else window.localStorage.setItem('auth', authToken);
    },
    [authToken]
  );

  const defaultContext = {
    authToken,
    setAuthToken
  };

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};