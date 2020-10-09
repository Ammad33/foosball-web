import React from 'react';
import {Drawer} from '@material-ui/core';


const LeftSideDrawer = () => {
  return (
   <Drawer variant="permanent">
    <div  style={{width:'240px'}}>
      Side Drawer
    </div>
    </Drawer>

  );
};

export default LeftSideDrawer;
