import React, { useState } from 'react';
import styles from './Wallet.module.scss';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paperclip, MoreVertical, Archive, Trash } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
import Earning from './Earning'

const Wallet = () => {
	const [active, setActive] = useState('Earnings');	
	const [expanded, setExpanded] = React.useState((0));

	const handleExpandClick = (event , index) => {
		debugger;
		if (expanded == event.currentTarget.dataset["target"]){
			setExpanded(0)
		}
		else {
			setExpanded(event.currentTarget.dataset["target"]);
		}
	};

	const branddata = [
		{
			id: 1,
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			sales: '$1555',
			totalCampaignSale: '$5,1235',
			averageCartValue: '$65',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			averageCartQuality: '2',
			totalInfluencerPayout: '$9891',
		},
		{
			id: 2,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			sales: '$1555',
			totalCampaignSale: '$5,1235',
			averageCartValue: '$65',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			averageCartQuality: '2',
			totalInfluencerPayout: '$9891',
		},
		{
			id: 3,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			sales: '$1555',
			totalCampaignSale: '$5,1235',
			averageCartValue: '$65',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			averageCartQuality: '2',
			totalInfluencerPayout: '$9891',
		},
		{
			id: 4,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			sales: '$1555',
			totalCampaignSale: '$5,1235',
			averageCartValue: '$65',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			averageCartQuality: '2',
			totalInfluencerPayout: '$9891',
		},
		{
			id: 5,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			sales: '$1555',
			totalCampaignSale: '$5,1235',
			averageCartValue: '$65',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			averageCartQuality: '2',
			totalInfluencerPayout: '$9891',
		},
		{
			id: 6,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			sales: '$1555',
			totalCampaignSale: '$5,1235',
			averageCartValue: '$65',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			averageCartQuality: '2',
			totalInfluencerPayout: '$9891',
		}
	]



	const influencerData = [
		{
			id: 1,
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Care / of',
			earnings: '$1555',
			totalCampaignEarning: '$5,1235',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			totalSale: '$9891',
		},
		{
			id: 2,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			earnings: '$1555',
			totalCampaignEarning: '$5,1235',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			totalSale: '$9891',
		},
		{
			id: 3,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			earnings: '$1555',
			totalCampaignEarning: '$5,1235',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			totalSale: '$9891',
		},
		{
			id: 4,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			earnings: '$1555',
			totalCampaignEarning: '$5,1235',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			totalSale: '$9891',
		},
		{
			id: 5,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			earnings: '$1555',
			totalCampaignEarning: '$5,1235',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			totalSale: '$9891',
		},
		{
			id: 6,	
			campaign: 'CampaignName' ,
			date: '11/1/2020 - 12/1/2020',
			img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
			member: 'Sam Ozkural',
			earnings: '$1555',
			totalCampaignEarning: '$5,1235',
			compensation: 'Revenue Share 5%',
			campaignDuration: '11/1/2020 - 12/1/2020',
			totalSale: '$9891',
		}
	]
	return (
		<>
			<div className={styles.mainContainer}>
				<div className={styles.walletHeadingContainer}>
					<div className={styles.walletHeading}>
						<span>Wallet</span>
					</div>
				</div>
				<div className={styles.FiltersContainer}>
					<button
						className={active === 'Earnings' ? styles.active : ''}
						onClick={() => {
							setActive('Earnings');
						}}
					>
						Earnings
          </button>
					<button
						className={active === 'Billing' ? styles.active : ''}
						onClick={() => {
							setActive('Billing');
						}}
					>
						Billing
          </button>
				</div >
				<div>
					<Earning  data = {branddata}
					handleExpandClick = {handleExpandClick}
					expanded = {expanded} />
				</div>
			</div>

		</>
	);
};

export default Wallet;
