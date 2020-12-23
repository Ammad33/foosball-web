import React, { useState } from 'react';
import styles from './AccountHistory.module.scss';
import Earning from './Earning'

const AccountHistory = () => {
	const [active, setActive] = useState('Influencer Invoices');
	const [expanded, setExpanded] = React.useState((0));

	const handleExpandClick = (event) => {
		if (expanded === event.currentTarget.dataset["target"]) {
			setExpanded(0)
		}
		else {
			setExpanded(event.currentTarget.dataset["target"]);
		}
	};

	const branddata = [
		{
			id: 1,
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
			campaign: 'CampaignName',
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
				<div className={styles.accountHistoryHeadingContainer}>
					<div className={styles.accountHistoryHeading}>
						<span>Account History</span>
					</div>
				</div>
				<div className={styles.FiltersContainer}>
					<button
						className={active === 'Influencer Invoices' ? styles.active : ''}
						onClick={() => {
							setActive('Influencer Invoices');
						}}
					>
						Influencer Invoices
          </button>
					<button
						className={active === 'fomopromo Invoices' ? styles.active : ''}
						onClick={() => {
							setActive('fomopromo Invoices');
						}}
					>
						fomopromo Invoices
          </button>
				</div >
				<div>
					<Earning data={branddata}
						handleExpandClick={handleExpandClick}
						expanded={expanded} />
				</div>
			</div>

		</>
	);
};

export default AccountHistory;
