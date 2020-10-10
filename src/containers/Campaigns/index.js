import React,{useContext} from 'react';
import {RootContext} from '../../context/RootContext';

const Campaigns = () => {
const {authToken} = useContext(RootContext);

return(<>Campaigns {authToken}</>);
}

export default Campaigns;