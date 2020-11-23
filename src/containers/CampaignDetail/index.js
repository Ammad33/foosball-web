import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, Avatar, Chip, Card, CardContent } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './CampaignsDetails.module.scss';
import edit from '../../assets/edit.svg';
import BrandCampaignDetail from './BrandCampaignDetail';
import { useHistory, useParams } from 'react-router-dom';
import InfluencerCampaignDetail from './InfluencerCampaignDetail';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link2 } from 'react-feather';



const CampaignDetail = () => {

	const history = useHistory();

	const { campaignId } = useParams();
	const [brandState, setBrandState] = useState(true);

	const handleBrandState = () => {
		setBrandState(brandState ? false : true);
	}

	return (
		<div className={styles.detailContainer}>
			<Link onClick={handleBrandState}> Toggle Campiagn Detail influencer</Link>
			{brandState ? (<InfluencerCampaignDetail campaignId={campaignId} />) : (<BrandCampaignDetail campaignId={campaignId} />)}


		</div>
	);
};

export default CampaignDetail;
