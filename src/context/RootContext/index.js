import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {

  const prevUser = JSON.parse(window.localStorage.getItem('user')) || null;

  const [currentUser, setCurrentUser] = useState(prevUser);
    
  useEffect(
    () => {
      if (!currentUser) localStorage.clear();
      else window.localStorage.setItem('user', JSON.stringify(currentUser));
    },
    [currentUser]
  );

  const defaultContext = {
    currentUser,
    setCurrentUser
  };

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};