import React, { useEffect, useState, useContext } from 'react';
import { RootContext } from './../../context/RootContext';

import BrandContacts from './BrandContacts';
import InfluencerContacts from './InfluencerContacts';

const Contacts = () => {
	const {
		brandType
	} = useContext(RootContext);
	debugger;
	return (
		<>
			<div>
				{brandType === 'Brand'? (<BrandContacts />) : (<InfluencerContacts />) }
		</div>
		</>
	)
};

export default Contacts;