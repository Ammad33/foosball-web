import React, { useState, useContext } from 'react';
import {
	Avatar,
	Popover,
	Checkbox,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	FormControl,
	MenuItem,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { Select, Grid } from '@material-ui/core';
import clsx from 'clsx';
import TextField from '../../../components/TextField';
import {
	MoreVertical,
	Download,
	Copy,
	Mail,
	ChevronRight,
	XCircle,
	Circle,
	Plus,
} from 'react-feather';

import Activity from '../Activity';
import CampaignDetail from '../CampaignDetail';
import TeamMembers from '../TeamMembers';
import BudgetAndConversion from '../BudgetAndConversion';
import Deliverables from '../Deliverables';
import Collections from '../Collections';
import Compensation from '../Compensation';
import Negotiables from '../Negotiables';
import SelectMenu from '../../../components/SelectMenu';
import _ from 'lodash';
import SVG from 'react-inlinesvg';
import styles from './PendingBrandCampaignDetail.module.scss';
import CancelDialog from '../../../components/CancellationDialog';
import Translation from '../../../assets/translation.json';
import ReviewBrandMicrosite from '../ReviewBrandMicrosite'
import { API, graphqlOperation } from 'aws-amplify';
import { RootContext } from '../../../context/RootContext';



const Chevron = () => {
	return (
		<span className={styles.dropDownCustomizeSvg}>
			<SVG src={require('../../../assets/chevron-down.svg')} />
		</span>
	);
};

const options = [];
for (let i = 3; i <= 20; i += 1) {
	options.push(i);
}

const PendingBrandCampaignDetail = ({
	data,
	handleSeeClick,
	name,
	campaignId
}) => {
	const reasons = [
		'Schedule conflict',
		'Both parties agree to terminate the campaign',
		'Other (please specify below)',
	];

	const history = useHistory();
	const [anchorEl, setAnchorEl] = useState(null);
	const [pendingOffer, setPendingOffer] = useState(false);
	const [openNegotiateDialog, setOpenNegotiateDialog] = useState(false);
	const [openDeclineDialog, setOpenDeclineDialog] = useState(false);
	const [allSet, setAllSet] = useState(true);
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	const [negotitaedItem, setNegotiatedItem] = useState('');
	const [percentage, setPercentage] = useState('');
	const [customeMessage, setCustomeMessage] = useState('');
	const [cancel, setCancel] = useState(false);
	const [cancelReason, setCancelReason] = useState('');
	const [reasonDetail, setReasonDetail] = useState('');
	const [flag, setFlag] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [brandRejectMessage, setBrandRejectMessage] = useState('');
	const { brandId } = useContext(RootContext);



	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCancelReason = (val) => {
		setCancelReason(val);
	};
	const handleCancelDialogOpen = () => {
		setCancel(true);
		handleClose();
	};
	const handleReasonDetail = (val) => {
		setReasonDetail(val);
	};


	const startCampaign = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation startCampaign {
startCampaignDev (
brandId: "${brandId}",
campaignId: "${campaignId}"
)
}`
				)
			)
			window.location.reload();
		}
		catch (err) {
			console.log("Error in signing contract ", err)
			let message = '';

			if (err.errors && err.errors.length > 0)
				err.errors.forEach(m => {
					message = message + m.message;
				});

			setErrorMessage(message);
			return null;
		}
	}

	const handleAcceptInvite = () => {
		brandAcceptOffer()
	}

	const handleRejectOffer = () => {
		setOpenDeclineDialog(true)
		brandRejectOffer();
	}
	const brandAcceptOffer = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation brandAcceptOffer {
						brandAcceptOffer(
						brandId: "${brandId}" ,
						offerId: "${data.negotiations[0].id}",
						campaignId: "${campaignId}"){
							brand {
								id
							}
						}
						}`
				)
			)
			window.location.reload();
		}
		catch (e) {
			console.log("Error in accepting invite", e)
		}
	}

	const brandRejectOffer = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation brandReject {
						brandRejectOffer(
						brandId: "${brandId}" ,
						campaignId: "${campaignId}",
						message: "${brandRejectMessage}")
						{
						message
						}
					}`
				)
			)
			window.location.reload();
		}
		catch (e) {
			console.log("Error in brand reject offer", e)
		}
	}


	const getStatusContainerContent = () => {
		return (
			<>
				<CancelDialog
					open={cancel}
					handleClose={() => setCancel(false)}
					reason={cancelReason}
					reasons={reasons}
					handleReason={handleCancelReason}
					message={Translation.DIALOG.CAMPAIGN_CANCEL_DIALOG_MSG}
					buttonText='Cancel Campaign'
					handleReasonDetail={handleReasonDetail}
					reasonDetail={reasonDetail}
				/>
				<div
					className={clsx(
						styles.campaignPendingContainer,
						data.internalState === "MICROSITE_APPROVAL_REQUESTED" || data.internalState === "NEGOTIATING" ? styles.allSetCampaignPendingContainer : ''
					)}
				>
					{data.internalState === "MICROSITE_APPROVAL_REQUESTED" ? (
						<>
							<h1>
								<span>Microsite ready for approval</span>
							</h1>
							<p>
								The influencer has sent you the microsite to review and
								approve.
</p>
							<button onClick={() => setFlag(true)} >View</button>
						</>
					) : data.internalState === "NEGOTIATING" ? (
						<>
							<h1>
								Sam sent a counter offer
</h1>
							<p>
								<i>Sam is proposing a Revenue share of 3% instead of 2%</i>
							</p>
							<p>
								<i>Sam is proposing $40 cash per post instead of $30</i>
							</p>
							<div className={styles.offerButtons}>
								<button
									className={styles.acceptButton}
									onClick={() => handleAcceptInvite()}
								>
									Accept
</button>
								<button
									className={styles.negotiateButton}
									onClick={() => setOpenNegotiateDialog(true)}
								>
									Negotiate
</button>
								<button
									className={styles.declineButton}
									onClick={() => setOpenDeclineDialog(true)}
								>
									Decline
</button>
							</div>
						</>
					) : (
								<>
									<h1>You're all set</h1>
									<p>
										No action items as of right now. We will let you know when there
										is something you need to do.
</p>
								</>
							)

					}


					{allSet ? (
						""
					) : (
							<>
								<h1>
									{pendingOffer ? (
										'Sam sent a counter offer'
									) : (
											<>
												<span>Microsite ready for approval</span>
											</>
										)}
								</h1>
								{pendingOffer ? (
									<>
										<p>
											<i>Sam is proposing a Revenue share of 3% instead of 2%</i>
										</p>
										<p>
											<i>Sam is proposing $40 cash per post instead of $30</i>
										</p>
									</>
								) : (
										<p>
											The influencer has sent you the microsite to review and
											approve.
										</p>
									)}
								{pendingOffer ? (
									<div className={styles.offerButtons}>
										<button
											className={styles.acceptButton}
											onClick={() => handleAcceptInvite()}
										>
											Accept
										</button>
										<button
											className={styles.negotiateButton}
											onClick={() => setOpenNegotiateDialog(true)}
										>
											Negotiate
										</button>
										<button
											className={styles.declineButton}
											onClick={() => setOpenDeclineDialog(true)}
										>
											Decline
										</button>
									</div>
								) : (
										<button
											onClick={() => {
												history.push('/review-brand-microsite');
											}}
											style={{ border: 'none' }}
										>
											View
										</button>
									)}
							</>
						)}
				</div>
			</>
		);
	};

	return (
		<>
			{flag ? (<ReviewBrandMicrosite
				name={name}
				data={data}
				campaignId={data.id} />) : (
					<>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
						>
							<div className={styles.popOver}>
								<div>
									<Mail /> <p>Message Influencer</p>
								</div>
								<div>
									<Copy /> <p>Duplicate Campaign</p>
								</div>
								<div style={{ display: "none" }}>
									<Download /> <p>Download Campaign</p>
								</div>
								<div onClick={() => handleCancelDialogOpen()}>
									<XCircle />{' '}
									<p>Cancel Campaign</p>
								</div>
							</div>
						</Popover>
						<div className={styles.mainContainer}>
							<div className={styles.CampaignHeading}>
								<span onClick={() => history.push('/campaigns')}>Campaigns</span>
								<ChevronRight />
								<span>{name}</span>
							</div>
							<div className={styles.campaignBasicInfo}>
								<div className={styles.campaignStatus}>
									<div>
										<h4 className={styles.promotion}>
											Promotion:{" "}
											{data &&
												data !== null &&
												data.discount &&
												data.discount !== null &&
												data.discount.percentage
												? ''
												: data.discount &&
													data.discount !== null &&
													data.discount.amount
													? '$'
													: ''}
											{data &&
												data !== null &&
												data.discount &&
												data.discount !== null &&
												data.discount.amount
												? data.discount.amount.amount
												: data &&
													data.discount &&
													data.discount !== null &&
													data.discount.percentage
													? data.discount.percentage
													: ''}{' '}
											{data &&
												data !== null &&
												data.discount &&
												data.discount !== null &&
												data.discount.percentage
												? '%'
												: data.discount &&
													data.discount !== null &&
													data.discount.amount
													? ''
													: ''}
										</h4>
									</div>
									<div>
										<Chip
											className={data.status === "INVITED" ? (styles.invitedCampaign) : (styles.pendingCampaign)}
											size='small'
											label={data.status.toProperCase()}
										/>
									</div>
									{data.influencer && (
										<div className={styles.influencerSocial}>
											<Avatar src={data.influencer.imageUrl} />
											<span>{data.influencer.name}</span>
										</div>
									)}
									{/* <Checkbox
checked={pendingOffer}
onChange={(e) => setPendingOffer(e.target.checked)}
/>
<span>Show offer from influencer view</span> */}
								</div>
								<div>
									<MoreVertical onClick={handleClick} />
								</div>
							</div>
							<div className={styles.contentContainer}>
								<div className={styles.flexContainer}>
									{getStatusContainerContent()}

									<Activity activities={data?.events} onClick={handleSeeClick} />
								</div>
								<div className={styles.flexContainer}>
									<CampaignDetail campaign={data}>
										<>
											<h6>Custom Message to Influencer</h6>
											<p>
												Hi sam, we are so excited for the chance to work with you. We
												love your content and hope that you see value in working with
												us.
</p>
										</>
									</CampaignDetail>
									<TeamMembers
										onClick={handleSeeClick}
										status={data.status}
										brandTeam={data && data.brandTeam !== null ? data.brandTeam : []}
									/>
									<BudgetAndConversion data={data} status={data.status} />
								</div>
								<div className={styles.flexContainer}>
									<Collections
										status={data.status}
										products={data.products}
										id={data.id}
									/>
									<Deliverables
										deliverables={data.deliverables}
										status={data.status}
										onClick={handleSeeClick}
										campaign={data}
									/>
								</div>
								<div className={styles.flexContainer}>
									<Compensation
										status={data.status}
										onClick={handleSeeClick}
										compensation={
											data && data.compensation && data.compensation !== null
												? _.compact(data.compensation)
												: []
										}
										targetGrossSales={data.targetGrossSales}
										paymentSchedule={data.paymentSchedule}
										deliverables={data && data.deliverables && data.deliverables !== null ? data.deliverables : []}
										startDate={data && data.startDate}
										endDate={data && data.endDate}
									/>
									<Negotiables data={data} status={data.status} />
									<div style={{ width: '391px' }}></div>
								</div>
								{data.internalState === "MICROSITE_APPROVED" ? (<div className={styles.startCampaign} onClick={() => startCampaign()}> Start Campaign</div>) : ('')}
								{errorMessage !== '' && (
									<div style={{ padding: '10px', color: 'red' }}>
										{errorMessage}
									</div>
								)}
							</div>
						</div>

						<Dialog
							disableBackdropClick
							disableEscapeKeyDown
							aria-labelledby='Negotiate Dialog'
							open={openNegotiateDialog}
							classes={{ paper: styles.negotiationDialog }}
						>
							<DialogTitle className={styles.dialogTitle} id='negotiate-dialog-title'>
								<p className={styles.titleText}>Negotiate</p>
							</DialogTitle>
							<DialogContent className={styles.dialogContent}>
								<FormControl fullWidth variant='outlined'>
									<TextField
										className={styles.marginbottomSelect}
										id='Negotiated Item'
										fullWidth
										label='Negotiated Item'
										variant='outlined'
										value={negotitaedItem}
										onChange={(e) => setNegotiatedItem(e.target.value)}
										MenuProps={{ variant: 'menu' }}
										select
										SelectProps={{ IconComponent: () => <Chevron /> }}
									>
										<MenuItem value='' disabled>
											Negotiated Item
										</MenuItem>

										<MenuItem value={'10'}>10</MenuItem>
										<MenuItem value={'20'}>20</MenuItem>
									</TextField>
								</FormControl>
								{negotitaedItem !== '' && (
									<>
										<Grid xs={12} className={styles.marginbottomSelect}>
											<FormControl fullWidth variant='outlined'>
												<Select
													id='revenue'
													fullWidth
													label='Enter Revenue Share'
													variant='outlined'
													value={percentage}
													onChange={(e) => setPercentage(e.target.value)}
													displayEmpty
													IconComponent={() => <Chevron />}
													MenuProps={{ variant: 'menu' }}
													input={<SelectMenu />}
												>
													<MenuItem value='' disabled>
														Select Revenue Share Percentage
													</MenuItem>
													{options.map((option) => (
														<MenuItem key={option} value={option}>
															{option}
														</MenuItem>
													))}
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm={12} md={12}>
											<TextField
												id='outlined-basic'
												fullWidth
												multiline
												value={customeMessage}
												onChange={(e) => setCustomeMessage(e.target.value)}
												rows={12}
												label={'Enter custom message'}
												variant='outlined'
											/>
										</Grid>
										<div className={styles.addMore}>
											<Plus />
											<p>Negotiate another item</p>
										</div>
									</>
								)}
							</DialogContent>
							<DialogActions className={styles.dialogActions}>
								<button onClick={() => setOpenNegotiateDialog(false)}>Cancel</button>
								<button
									className={clsx(
										styles.sendButton,
										negotitaedItem !== '' ? styles.active : styles.disabled

									)}
								>
									Send to Influencer
</button>
							</DialogActions>
						</Dialog>

						<Dialog
							disableBackdropClick
							disableEscapeKeyDown
							aria-labelledby='Decline Dialog'
							open={openDeclineDialog}
							classes={{ paper: styles.declineDialog }}
						>
							<DialogTitle className={styles.dialogTitle} id='decline-dialog-title'>
								<p className={styles.titleText}>
									Send the influencer a message with your decline
</p>
							</DialogTitle>
							<DialogContent className={styles.dialogContent}>
								<Grid item xs={12} sm={12} md={12}>
									<TextField
										id='outlined-basic'
										fullWidth
										multiline
										value={brandRejectMessage}
										onChange={(e) => setBrandRejectMessage(e.target.value)}
										rows={12}
										label={'Enter custom message'}
										variant='outlined'
									/>
								</Grid>
							</DialogContent>
							<DialogActions className={styles.dialogActions}>
								<button onClick={() => setOpenDeclineDialog(false)}>Cancel</button>
								<button className={clsx(styles.sendButton, styles.active)} onClick={() => brandRejectOffer()}>
									Send to Influencer
								</button>
							</DialogActions>
						</Dialog>
					</>
				)}
		</>
	);
};

export default PendingBrandCampaignDetail;