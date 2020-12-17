import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {
  const prevUser = JSON.parse(window.localStorage.getItem('user')) || null;
  const preActiveRoute = localStorage.getItem('route') || 'Campaign';
  const brandsStored = JSON.parse(localStorage.getItem('brands')) || null;
  const bId = localStorage.getItem('bId') || null;
  const bName = localStorage.getItem('bName') || null;
	const bType = localStorage.getItem('bType') || null;
	const rId = localStorage.getItem('rId') || null; 
  const [currentUser, setCurrentUser] = useState(prevUser);
  const [logoutMessage, setLogoutMessage] = useState('');
  const [activeRoute, setActiveRoute] = useState(preActiveRoute);
  const [activeCampaign, setActiveCampaign] = useState('');
  const [brandId, setBrandIdd] = useState(bId);
  const [brands, setBrands] = useState(brandsStored);
  const [brandName, setBrandName] = useState(bName);
	const [brandType, setBrandType] = useState(bType);
	const [roleId, setRoleId] = useState(rId);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!currentUser) window.localStorage.clear();
    else window.localStorage.setItem('user', JSON.stringify(currentUser));
    if (!activeRoute) localStorage.removeItem('route');
    else localStorage.setItem('route', activeRoute);
    if (!brandId) localStorage.removeItem('bId');
    else localStorage.setItem('bId', brandId);
    if (!brands || brands == null) localStorage.removeItem('brands');
    else localStorage.setItem('brands', JSON.stringify(brands));
    if (!brandName) localStorage.removeItem('bName');
    else localStorage.setItem('bName', brandName);
    if (!brandType) localStorage.removeItem('bType');
		else localStorage.setItem('bType', brandType);
		if (!roleId) localStorage.removeItem('rId');
		else localStorage.setItem('rId', roleId);
  }, [currentUser, activeRoute, brandId, brands, brandName, brandType , roleId]);

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
  };

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
