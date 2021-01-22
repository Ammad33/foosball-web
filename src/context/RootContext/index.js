import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {
  const prevUser = JSON.parse(window.localStorage.getItem('user')) || null;
  const preActiveRoute = localStorage.getItem('route') || 'Campaign';
  const brandsStored = JSON.parse(localStorage.getItem('brands')) || null;
  const influencerStored =
    JSON.parse(localStorage.getItem('influencers')) || null;
  const bId = localStorage.getItem('bId') || null;
  const bName = localStorage.getItem('bName') || null;
  const bType = localStorage.getItem('bType') || null;
  const rId = localStorage.getItem('rId') || null;
  // const org = localStorage.getItem('org') || null;
  const [currentUser, setCurrentUser] = useState(prevUser);
  const [logoutMessage, setLogoutMessage] = useState('');
  const [activeRoute, setActiveRoute] = useState(preActiveRoute);
  const [activeCampaign, setActiveCampaign] = useState('');
  const [brandId, setBrandIdd] = useState(bId);
  const [brands, setBrands] = useState(brandsStored);
  const [brandName, setBrandName] = useState(bName);
  const [brandType, setBrandType] = useState(bType);
  const [roleId, setRoleId] = useState(rId);
  // const [organization , setOrganization] = useState(org);
  const [searchValue, setSearchValue] = useState('');
  const [influencers, setInfluencers] = useState(influencerStored);
  const [showLoader, setShowLoader] = useState(false);
  const [toastrData, setToastrData] = useState({});

  useEffect(() => {
    if (!currentUser) {
      localStorage.clear();
    } else {
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(currentUser));
    }
    if (!activeRoute) {
      localStorage.removeItem('route');
    } else {
      localStorage.removeItem('route');
      localStorage.setItem('route', activeRoute);
    }
    if (!brandId) {
      localStorage.removeItem('bId');
    } else {
      localStorage.removeItem('bId');
      localStorage.setItem('bId', brandId);
    }
    if (!brands || brands == null) {
      localStorage.removeItem('brands');
    } else {
      localStorage.removeItem('brands');
      localStorage.setItem('brands', JSON.stringify(brands));
    }
    if (!influencers || influencers == null) {
      localStorage.removeItem('influencers');
    } else {
      localStorage.removeItem('influencers');
      localStorage.setItem('influencers', JSON.stringify(influencers));
    }
    if (!brandName) {
      localStorage.removeItem('bName');
    } else {
      localStorage.removeItem('bName');
      localStorage.setItem('bName', brandName);
    }
    if (!brandType) {
      localStorage.removeItem('bType');
    } else {
      localStorage.removeItem('bType');
      localStorage.setItem('bType', brandType);
    }
    if (!roleId) {
      localStorage.removeItem('rId');
    } else {
      localStorage.removeItem('rId');
      localStorage.setItem('rId', roleId);
    }
    // if (!organization) localStorage.removeItem('org');
    // else localStorage.setItem('org', organization);
  }, [
    currentUser,
    activeRoute,
    brandId,
    brands,
    brandName,
    brandType,
    roleId,
    influencers,
    // organization,
  ]);

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
    setBrandIdd,
    brands,
    setBrands,
    brandName,
    setBrandName,
    brandType,
    setBrandType,
    roleId,
    setRoleId,
    searchValue,
    setSearchValue,
    influencers,
    setInfluencers,
    showLoader,
    setShowLoader,
    toastrData,
    setToastrData,
    // organization,
    // setOrganization,
  };

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
