import React from 'react';
import styles from './ReviewAndSend.module.scss';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
import moment from 'moment';

const EditSVG = ({ onClick }) => {
	return <SVG src={require('../../../assets/edit.svg')} onClick={onClick} />;
};
const ReviewAndSend = ({ team, campaignName, startDate, endDate, startTime, endTime, discount, discountType,
	customeMessage, selectedMembers, budget, targetGrossSale, collections, deliverables, compensations, compensationPayment, selectedNegotiable, selectedInfluncer, handleActiveStep }) => {

	const getCompensationType = (compensation) => {
		switch (compensation) {
			case 'REVENUE_SHARE':
				return (
					'Revenue Share');
			case 'CASH_PER_POST':
				return ('Cash Per Post');
			case 'CASH_PER_MONTHLY_DELIVERABLE':
				return ('Cash Per Monthly Deliverable');
			case 'GIFT_CARD':
				return ('Gift Card');
		}
	}

	const getCompensationHeading = (compensation) => {

		switch (compensation) {
			case 'REVENUE_SHARE':
				return (
					'Revenue Share Percentage');
			case 'CASH_PER_POST':
				return ('Amount per Post');
			case 'CASH_PER_MONTHLY_DELIVERABLE':
				return ('Amount Per Monthly Deliverable');
			case 'GIFT_CARD':
				return ('Amount Per Gift Card');
		}
	}

	const getCompensationAmount = (compensation) => {

		switch (compensation.compensationType) {
			case 'REVENUE_SHARE':
				return (
					<span>{compensation.amount && compensation.amount}% ({budget} $)</span>);
			case 'CASH_PER_POST':
				return (<span>{compensation.amount && compensation.amount}$</span>);
			case 'CASH_PER_MONTHLY_DELIVERABLE':
				return (<span>{compensation.amount && compensation.amount}$</span>);
			case 'GIFT_CARD':
				return (<span>{compensation.amount && compensation.amount}$</span>);
		}
	}

	return (
		<div class={styles.mainContainer}>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Campaign Details</h3>
					<span>
						<EditSVG
							onClick={() => handleActiveStep(1)} />
					</span>
				</div>
				<div className={styles.campaigndDetails}>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<div className={styles.campaignItemInfo}>
								<p>Campaign Name</p>
								<span>{campaignName}</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.campaignItemInfo}>
								<p>Start Date, Time</p>
								<span>{moment(startDate).format('MM/DD/YYYY')},  {startTime}</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.campaignItemInfo}>
								<p>End Date, Time</p>
								<span>{moment(endDate).format('MM/DD/YYYY')},  {endTime}</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.campaignItemInfo}>
								<p>Promotional Discount</p>
								<span>{discount}%</span>
							</div>
						</Grid>
						<Grid item xs={8}>
							<div className={styles.campaignItemInfo}>
								<p>Custom Message to Influencer</p>
								<span>
									{customeMessage}
								</span>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Team Members</h3>
					<EditSVG onClick={() => handleActiveStep(2)} />
				</div>
				<div className={styles.teamMembersContainer}>
					<Grid container spacing={3}>
						{selectedMembers.length > 0 && selectedMembers.map((member, index) => {
							const element = team.findIndex(item => item.user.id === member);
							if (element !== -1) {
								return (
									<Grid item xs={4} key={index}>
										<div className={styles.teamMemberItem}>
											<Avatar src={team[element].user.imageUrl} />
											<span>{team[element].user.fullName}</span>
										</div>
									</Grid>);
							}

						})
						}
					</Grid>
				</div>
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Budget & Conversion</h3>
					<EditSVG onClick={() => handleActiveStep(3)} />
				</div>
				<div className={styles.budgetAndConversionContainer}>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<div className={styles.budgetContainerItem}>
								<p>Budget</p>
								<span>${budget}</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.budgetContainerItem}>
								<p>Target Gross Sale Goal</p>
								<span>${targetGrossSale}</span>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Collection</h3>
					<EditSVG onClick={() => handleActiveStep(4)} />
				</div>
				<div className={styles.collectionContainer}>
					{collections.map((item, index) => {
						return (
							<div className={styles.collectionSection} key={index}>
								<p className={styles.sectionTitle}>{item.collectionName}</p>
								<div className={styles.collectionItems}>
									{
										item.collectionItems.length > 0 && item.collectionItems.map((collection, index) => {
											return (
												<div className={styles.collectionItem} key={index}>
													<div className={styles.itemPlaceholderBox}></div>
													<p className={styles.itemText}>{collection.name} / #</p>
												</div>
											);
										})
									}
								</div>
							</div>
						)
					})
					}
				</div>
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Deliverables</h3>
					<EditSVG onClick={() => handleActiveStep(5)} />
				</div>
				{
					deliverables.map((item, index) => {
						return (<div className={styles.deliverablesContainer}>
							<Grid container spacing={3} key={index}>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Deliverable Deadline</p>
										<span>{moment(item.deliverableDeadDate).format('MMMM Do, YYYY')}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Social Platform</p>
										<span>{item.platform}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Post Type</p>
										<span>{item.deliverableType}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Content Type</p>
										<span>{item.frameContentType}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Frames Required</p>
										<span>{item.framesRequired}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Brand tag</p>
										<span>Required - @{item.brandTag}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Hashtag</p>
										<span>Required - #{item.hashTag}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Post Frequency</p>
										<span>{item.NoPost} posts every {item.perTimePeriod}</span>
									</div>
								</Grid>
							</Grid>
						</div>
						)
					})
				}
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Compensation</h3>
					<EditSVG onClick={() => handleActiveStep(6)} />
				</div>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<div className={styles.compensationInfluencer}>
							<p>Influencer Payment Schedule</p>
							<span>{compensationPayment}</span>
						</div>
					</Grid>
				</Grid>

				{
					compensations.map((item, index) => {
						return (
							<div className={styles.compensationContainer} key={index}>
								<Grid container spacing={3}>
									<Grid item xs={4}>
										<div className={styles.compensationItem}>
											<p>Compensation Type</p>
											<span>{getCompensationType(item.compensationType)}</span>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div className={styles.compensationItem}>
											<p>{getCompensationHeading(item.compensationType)}</p>
											{getCompensationAmount(item)}
										</div>
									</Grid>
								</Grid>
							</div>
						)
					})
				}

			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Negotiables</h3>
					<EditSVG onClick={() => handleActiveStep(7)} />
				</div>
				<div className={styles.negotiablesContainer}>
					<Grid container spacing={3}>
						{
							selectedNegotiable.map((nego, index) => {
								if (nego.isChecked) {
									return (
										<Grid item xs={4} key={index}>
											<div className={styles.negotiableItem}>
												<p>{nego.text}</p>
											</div>
										</Grid>
									);
								}
							})
						}
					</Grid>
				</div>
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Influencer</h3>
					<EditSVG onClick={() => handleActiveStep(8)} />
				</div>
				<div className={styles.influencerContainer}>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<div className={styles.influencerItem}>
								<Avatar
									className={styles.avatarMedium}
									src={selectedInfluncer.avatar}
								/>
								<p>@{selectedInfluncer.name}</p>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default ReviewAndSend;
