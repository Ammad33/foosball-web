import React, { useState, useEffect } from 'react';
import styles from './ReviewAndSend.module.scss';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
import moment from 'moment';

const EditSVG = ({ onClick }) => {
	return <SVG src={require('../../../assets/edit.svg')} onClick={onClick} />;
};
const ReviewAndSend = ({ products, team, campaignName, startDate, endDate, startTime, endTime, discount, discountType,
	customeMessage, selectedMembers, budget, targetGrossSale, collections, deliverables, compensations, compensationPayment, selectedNegotiable, selectedInfluncer, handleActiveStep }) => {

	const [totalPosts, setTotalPosts] = useState(0);


	useEffect(() => {
		let totalPost = 0;
		deliverables.forEach(item => {
			if (item.frequency === 'WEEK') {
				totalPost = totalPost + (parseInt(item.posts) * weeksBetween(new Date(startDate), new Date(endDate)));
			} else if (item.frequency === 'BI_WEEKLY') {
				totalPost = totalPost + (parseInt(item.posts) * 2);
			} else {
				totalPost = totalPost + parseInt(item.posts);
			}
		});

		setTotalPosts(totalPost)

	}, []);


	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
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
			default:
				return '';
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
			default:
				return '';
		}
	}

	const getCompensationAmount = (compensation) => {
		switch (compensation.compensationType) {
			case 'REVENUE_SHARE':
				return (
					<span>{compensation.amount && numberWithCommas(Math.trunc(parseFloat(compensation.amount)))}% ($ { numberWithCommas(Math.trunc(compensation.amount * targetGrossSale / 100))})</span>);
			case 'CASH_PER_POST':
				return (<span>$ {compensation.amount && numberWithCommas(Math.trunc(parseFloat(compensation.amount)))}</span>);
			case 'CASH_PER_MONTHLY_DELIVERABLE':
				return (<span>$ {compensation.amount && numberWithCommas(Math.trunc(parseFloat(compensation.amount)))}</span>);
			case 'GIFT_CARD':
				return (<span>$ {compensation.amount && numberWithCommas(Math.trunc(parseFloat(compensation.amount)))}</span>);
			default:
				return <span></span>
		}
	}

	const getCompensationTypeValue = (compensation) => {
		switch (compensation.compensationType) {
			case 'REVENUE_SHARE':
				return (
					<h5>${numberWithCommas(Math.trunc(parseFloat(compensation.amount && (compensation.amount * parseFloat(targetGrossSale) / 100).toFixed(2))))}</h5>);
			case 'CASH_PER_POST':
				return (<h5>${compensation.amount && numberWithCommas(Math.trunc((parseFloat(compensation.amount) * totalPosts)))}</h5>);
			case 'CASH_PER_MONTHLY_DELIVERABLE':
				return (<h5>${compensation.amount && numberWithCommas(Math.trunc(parseFloat(compensation.amount)))}</h5>);
			case 'GIFT_CARD':
				return (<h5>${compensation.amount && numberWithCommas(Math.trunc(parseFloat(compensation.amount)))}</h5>);
			default:
				return <h5></h5>
		}
	}

	const getPostFrequency = (frequency) => {
		switch (frequency) {
			case 'BI_MONTHLY':
				return (' 2 months');
			case 'WEEK':
				return (' 1 week');
			case 'MONTH':
				return (' 1 month');
			case 'BI_WEEKLY':
				return (' 2 weeks');
			default:
				return '';
		}
	}

	console.log(weeksBetween(new Date(startDate), new Date(endDate)));

	const getTotal = () => {
		let total = 0;
		compensations.forEach(item => {
			if (item.compensationType === 'REVENUE_SHARE') {
				total = total + parseFloat(item.amount * parseFloat(targetGrossSale) / 100);
			} else if (item.compensationType === 'CASH_PER_POST') {
				let totalPost = 0;
				deliverables.forEach(item => {
					if (item.frequency === 'WEEK') {
						totalPost = totalPost + (parseInt(item.posts) * weeksBetween(new Date(startDate), new Date(endDate)));
					} else if (item.frequency === 'BI_WEEKLY') {
						totalPost = totalPost + (parseInt(item.posts) * 2);
					} else {
						totalPost = totalPost + parseInt(item.posts);
					}
				});
				total = total + (parseFloat(item.amount) * totalPost);
			} else {
				total = total + parseFloat(item.amount);
			}
		})
		return parseFloat(total).toFixed(2);
	}

	const overAmount = () => {
		let over = 0;
		compensations.forEach(item => {
			if (item.compensationType === 'REVENUE_SHARE') {
				over = parseFloat(item.amount * parseFloat(targetGrossSale) / 100) - parseFloat(budget);
			}
		});

		return parseFloat(over);
	}
	// console.log(overAmount());
	const [collectionData, setCollectionData] = useState([]);

	function weeksBetween(d1, d2) {
		return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
	}

	useEffect(() => {
		window.scrollTo(0, 0);



		console.log();

		let collls = [];
		if (products && products.length > 0) {

			products.forEach(item => {
				let index = collections.findIndex(collItem => collItem.id === item.collectionId);
				if (index !== -1) {
					collls.push({
						name: collections[index].name,
						products: collections[index].products && collections[index].products.products.filter(itm => {
							let secIndex = item.products.findIndex(sec => sec.productId === itm.id);
							if (secIndex !== -1) {
								return itm
							}
						})
					})
				}
			})
		}

		setCollectionData(collls);
	}, [products])

	console.log(collectionData);

	return (
		<div class={styles.mainContainer}>
			<div className={styles.influe}>
				<div className={styles.influencerContainer}><Avatar className={styles.avatar} src={selectedInfluncer.imageUrl} /> <p>{selectedInfluncer.name}</p></div>
			</div>
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
								<span>{moment(startDate).format('MM/DD/YYYY')}, {startTime}</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.campaignItemInfo}>
								<p>End Date, Time</p>
								<span>{moment(endDate).format('MM/DD/YYYY')}, {endTime}</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.campaignItemInfo}>
								<p>Promotional Discount</p>
								<span>{numberWithCommas(discount)}{discountType === 'Percentage' ? "%" : "$"}</span>
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
								<span>${numberWithCommas(Math.trunc(budget))}</span>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.budgetContainerItem}>
								<p>Target Gross Sale Goal</p>
								<span>${numberWithCommas(Math.trunc(targetGrossSale))}</span>
							</div>
						</Grid>
					</Grid>
				</div>
				{overAmount() > 0 &&
					<div className={styles.compensationBadge}>
						<p>You are ${numberWithCommas(Math.trunc(overAmount()))} over budget</p>
					</div>
				}
			</div>
			<div class={styles.section}>
				<div className={styles.titleAndAction}>
					<h3>Collection</h3>
					<EditSVG onClick={() => handleActiveStep(4)} />
				</div>
				<div className={styles.collectionContainer}>
					{collectionData.map((item, index) => {
						return (
							<div className={styles.collectionSection} key={index}>
								<p className={styles.sectionTitle}>{item.name}</p>
								<div className={styles.collectionItems}>
									{
										item.products.length > 0 && item.products.map((collection, index) => {
											return (
												<div className={styles.collectionItem} key={index}>
													<div className={styles.itemPlaceholderBox}><img className={styles.itemPlaceholderBox} src={collection.images && collection.images.images.length > 0 && collection.images.images[0].src} /></div>
													<p className={styles.boxItem}>{collection.name}</p>
													<p className={styles.boxPrice}>${collection.priceRange && collection.priceRange.max ? collection.priceRange.max.amount : ''} </p>
													{/* <span>(1234367)</span> */}
													{collection && collection.estimatedQty && collection.estimatedQty !== null && <p className={styles.boxPrice}> 25 in stock</p>}

													{/* <p className={styles.itemText}>{collection.name} / #</p> */}
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
							<h4 style={index > 0 ? { marginTop: '40px' } : {}}>Deliverable {index + 1}</h4>
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
										<span>{item.postType && item.postType !== null ? item.postType.toProperCase() : ''}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Content Type</p>
										<span>{item.frameContentType && item.frameContentType !== null ? item.frameContentType.toProperCase() : ''}</span>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Frames Required</p>
										<span>{item.framesRequired && item.framesRequired !== null ? item.framesRequired : ''}</span>
									</div>
								</Grid>
								{item.brandTag &&
									<Grid item xs={4}>
										<div className={styles.deliverableItem}>
											<p>Brand tag</p>
											<span>@{item.brandTag}</span>
										</div>
									</Grid>
								}
								{item.hashTag &&
									<Grid item xs={4}>
										<div className={styles.deliverableItem}>
											<p>Hashtag</p>
											<span>#{item.hashTag}</span>
										</div>
									</Grid>
								}
								<Grid item xs={4}>
									<div className={styles.deliverableItem}>
										<p>Post Frequency</p>
										<span>{item.posts} posts every {getPostFrequency(item.frequency)}</span>
									</div>
								</Grid>
							</Grid>
						</div>
						)
					})
				}
				<div className={styles.postTotalContainer}>
					<h4>Post Total:</h4>
					<h5>{totalPosts} Posts</h5>
				</div>
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
								<div className={styles.compensationHeading}><h4>Compensation Type {index + 1}</h4><h5>{(getCompensationTypeValue(item))}</h5></div>
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
				<div className={styles.compensationHeading}><h4>Total Compensation Estimate:</h4><h5>${numberWithCommas(Math.trunc((getTotal())))}</h5></div>

				{overAmount() > 0 && <div style={{ margin: '20px 0px 10px 0px' }} className={styles.compensationBadge}>
					<p>You are ${numberWithCommas(Math.trunc(overAmount()))} over budget</p>
				</div>}
				<p className={styles.estimateText}>* some amounts may be estimates based on target sales</p>			</div>
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
		</div >
	);
};

export default ReviewAndSend;