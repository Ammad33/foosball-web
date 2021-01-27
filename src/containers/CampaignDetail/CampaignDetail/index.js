import React from 'react';
import { Edit } from 'react-feather';
import styles from './CampaignDetail.module.scss';
import moment from 'moment';
import clsx from 'clsx';

const CampaignDetail = ({ children, handleEdit, campaign }) => {
	return (
		<div
			className={clsx(
				styles.campaignContainer,
				children ? styles.withChildHeight : styles.withNoChildHeight
			)}
		>
			<div className={styles.headerContainer}>
				<h1>Campaign Details</h1>
				{(campaign && campaign.status === 'DRAFT') ||
					(campaign && campaign.status !== 'INVITED') ? (
						<Edit onClick={() => handleEdit(1)} />
					) : (
						''
					)}
			</div>

			{/* <div className={styles.detailSubContent}>
        <h6>Campaign ID</h6>
        <p>{campaign && campaign.id}</p>
      </div> */}
			<div className={styles.dateContainer}>
				<div className={styles.detailSubContent}>
					<h6>StartDate, Time</h6>
					<p>
						{campaign &&
							moment(campaign.startDate * 1000).format('MM/DD/YYYY, HH:mm')}
					</p>
				</div>
				<div className={styles.detailSubContent}>
					<h6>End Date, Time</h6>
					<p>
						{campaign &&
							moment(campaign.endDate * 1000).format('MM/DD/YYYY, HH:mm')}
					</p>
				</div>
			</div>
			<div className={styles.detailSubContent}>
				<h6>Promotional Discount</h6>
				<p>{campaign && campaign.discount && campaign.discount !== null && campaign.discount.amount ? campaign.discount.amount.amount : campaign && campaign.discount && campaign.discount !== null && campaign.discount.percentage ? campaign.discount.percentage : ''} {campaign && campaign.discount && campaign.discount !== null && campaign.discount.percentage ? '%' : '$'}</p>
			</div>
			{campaign.discount.__typename === 'FlatDiscount' ?(
				<div className={styles.detailSubContent}>
					<h6>Minimum Cart Value</h6>
					<p>{campaign && campaign.discount && campaign.discount !== null && campaign.discount.amount ? campaign.discount.minimum.amount :''} {'$'}</p>
				</div>): ("")}
			{children ? (
				<div className={styles.detailSubContent}>
					{campaign && campaign.invitationMessage ?
						<>
							<h6>Custom Message to Influencer</h6>
							<p>{campaign.invitationMessage}</p>
						</> :
						<>
							<h6>Custom Message to Influencer</h6>
						</>}
				</div>
			) : (
					''
				)}
		</div>
	);
};

export default CampaignDetail;
