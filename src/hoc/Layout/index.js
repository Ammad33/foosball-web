import React from 'react';
import LeftSideDrawer from '../../components/LeftSideDrawer';
import Header from '../../components/Header';
// import RightSideDrawer from '../../components/RightSideDrawer';

const Layout = ({ children }) => {
  return (
    <div style={{ height: '100%' }}>
      {/* <Header /> */}
      <main style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <LeftSideDrawer />
        <div
          style={{
            height: '100%',
            padding: '20px',
            flex: '1',
            borderTop: '1px solid #8fab20',
          }}
        >
          {children}
        </div>
        {/* <RightSideDrawer/> */}
      </main>
    </div>
  );
};

export default Layout;
