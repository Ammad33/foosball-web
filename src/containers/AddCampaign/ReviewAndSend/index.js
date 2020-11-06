import React from 'react';
import styles from './ReviewAndSend.module.scss';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
import moment from 'moment';

const EditSVG = ({ onClick }) => {
	return <SVG src={require('../../../assets/edit.svg')} onClick={onClick} />;
};
const ReviewAndSend = ({ toggleComponent, campaignName, startDate, endDate, startTime, endTime, discount, discountType,
	customeMessage, selectedMembers, budget, targetGrossSale, collections, deliverables, compensations, selectedNegotiable, selectedInfluncer, handleActiveStep }) => {
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
							return (
								<Grid item xs={4} key={index}>
									<div className={styles.teamMemberItem}>
										<Avatar src={member.avatar} />
										<span>{member.name}</span>
									</div>
								</Grid>);
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
				<div className={styles.deliverablesContainer}>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Deliverable Deadline</p>
								<span>October 30, 2020</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Social Platform</p>
								<span>Instagram</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Campaign Type</p>
								<span>Story</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Frame Content Type</p>
								<span>Video</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Frames Required</p>
								<span>5</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Brand tag</p>
								<span>Required - @shopgoodtobe</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Hashtag</p>
								<span>Required - #shopgoodtobe</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.deliverableItem}>
								<p>Post Frequency</p>
								<span>5 posts every 1 month</span>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Compensation</h3>
					<EditSVG onClick={() => handleActiveStep(6)} />
				</div>
				<div className={styles.compensationContainer}>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<div className={styles.compensationItem}>
								<p>Compensation Type</p>
								<span>Required - #shopgoodtobe</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.compensationItem}>
								<p>Revenue Share Percentage</p>
								<span>5 posts every 1 month</span>
							</div>
						</Grid>
					</Grid>
				</div>
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
