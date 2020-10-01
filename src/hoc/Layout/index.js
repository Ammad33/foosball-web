import React from 'react';
import LeftSideDrawer from '../../components/LeftSideDrawer';
import RightSideDrawer from '../../components/RightSideDrawer';

const Layout = ({ children }) => {

    return (
        <div >
            <main  style={{display:'flex', flexDirection:'row'}}>
                <LeftSideDrawer />
                <div>
                    {children}
                </div>
                <RightSideDrawer/>
            </main>
        </div>
    );
};

export default Layout;