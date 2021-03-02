import React, { useState, useContext } from 'react';
import styles from './InviteCard.module.scss';
import DeclineDialog from '../../../components/CancellationDialog';
import Translation from '../../../assets/translation.json';
import { API, graphqlOperation } from 'aws-amplify';
import { RootContext } from '../../../context/RootContext';
import NegotiateDialog from '../NegotiateDialog';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';



const InviteCard = ({ createdBy, campaignId, handleStatus, invitationMessage, handleReviewAndSign, negotiables, data }) => {
	const history = useHistory();
	const [decline, setDecline] = useState(false);
	const [declineReason, setDeclineReason] = useState('');
	const [reasonDetail, setReasonDetail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [negotiateDialog, setNegotiateDialog] = useState(false);
	const [negotiate, setNegotiate] = useState([
		{
			negotiateItem: '',
			negotiateMessage: '',
			negotiateValue: '',
			negotiateStartDate: '',
			negotiateEndDate: '',
		},
	]);
	const [startDateOpen, setStartDateOpen] = useState(false);
	const [endDateOpen, setEndDateOpen] = useState(false);



	const {
		brandId,
	} = useContext(RootContext);


	const reasons = [
		"Schedule conflict",
		"Campaign compensation",
		"Conflict of interest",
		"Other",
	]


	const getNegotiables = (item) => {
	
		var temp = negotiate.filter((nego) =>  (nego.negotiateItem === item));
		
		let USD = 'USD';
		if (!temp || temp.length < 1) {
			return 
		}
		if (temp[0].negotiateItem === 'revenueShare'){
			return {percentage:  temp[0].negotiateValue} 
		}
		else  {
			return {amount:  temp[0].negotiateValue  ,currency: USD}
		}

	};

	const handleNegotiation = () => {
		setNegotiateDialog(true);
		acceptCampaignInvite("negotiate")
	}

	const handleNegotiate = (val, index, fieldName) => {
		const nego = [...negotiate];
		if (fieldName === 'Negotiate Item') {
			nego[index]['negotiateItem'] = val;
		}
		if (fieldName === 'Negotiate Value') {
			nego[index]['negotiateValue'] = val;
		}
		if (fieldName === 'Negotiate Message') {
			nego[index]['negotiateMessage'] = val;
		}
		if (fieldName === 'Negotite StartDate') {
			const moment_date = moment(val).format('L');
			const startDate =
				val !== '' && moment(val, 'MM/DD/YYYY', true).isValid()
					? moment_date
					: val
			const endDate = (moment(moment_date).add(1, 'M').format('MM/DD/YYYY'));
			nego[index]['negotiateStartDate'] = startDate;
			nego[index]['negotiateEndDate'] = endDate;
			setStartDateOpen(false);
		}
		setNegotiate(nego);
	};



	const handleDeclineReason = (val) => {
		setDeclineReason(val);
	}
	const handleReasonDetail = (val) => {
		setReasonDetail(val);
	}
	const handleAcceptInvite = () => {
		acceptCampaignInvite()
		handleReviewAndSign();
	}

	const handleAnotherItem = () => {
		const nego = [...negotiate];

		nego.push({
			negotiateItem: '',
			negotiateMessage: '',
			negotiateValue: '',
		});

		setNegotiate(nego);
	};

	const acceptCampaignInvite = async (negotiate) => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation AcceptInvite {
						acceptCampaignInvite(input: {
							brandId: "${createdBy.id}" , 
							influencerId: "${brandId}", 
							id: "${campaignId}"}) 
							{
							id
						}
					}`
				)
			)
			if (!negotiate) {
				acceptCampaignTerms();
			}
		}
		catch (e) {
			console.log("Error in accepting invite", e)
		}
	}


	const acceptCampaignTerms = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation AcceptCampaignTerms {
						influencerAcceptCampaignTerms(input: {
							campaignId: "${campaignId}",
							influencerId: "${brandId}"
						})
					}`
				)
			)
		}
		catch (e) {
			console.log("Error in accepting campaign terms ", e)
		}
	}

	const declineCampaignInvite = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation declineInvite {
						declineCampaign (
							id: "${campaignId}",
							influencerId: "${brandId}",
							reason: "${declineReason}",
							message: "${reasonDetail}"
						)
					}`
				)
			)
			setDecline(false)
			history.push(`/campaigns`);
		}
		catch (err) {
			console.log("Error In declining campaign invite", err)
			let message = '';

			if (err.errors && err.errors.length > 0)
				err.errors.forEach(m => {
					message = message + m.message;
				});

			setErrorMessage(message);
			return null;
		}
	}


	const negotiateCampaign = async () => {
		try {
			let data = {
				campaignId: campaignId,
				message: negotiate[0].negotiateMessage,
				revenueShare: getNegotiables("revenueShare"),
				postFee: getNegotiables("postFee"),
				giftCard: getNegotiables("giftCard"),
				monthlyRetainerFee: getNegotiables("monthlyRetainerFee"),


			}
			await API.graphql(
				graphqlOperation(
					`mutation negotiateCampaign($input: NegotiationInput! ) {
						influencerNegotiate (
							influencerId: "${brandId}" ,
							input: $input ){
								
								id
						}
					}`
					,
					{
						input: data,
					}
				)
			)
			setNegotiateDialog(false);
			window.location.reload();
		}
		catch (e) {
			console.log("error in negotiate Campaign", e)
		}
	}


	return (
		<>
			<DeclineDialog
				open={decline}
				handleClose={() => setDecline(false)}
				reason={declineReason}
				reasons={reasons}
				handleReason={handleDeclineReason}
				message={Translation.DIALOG.CAMPAIGN_DECLINE_DIALOG_MSG}
				buttonText="Decline"
				handleReasonDetail={handleReasonDetail}
				reasonDetail={reasonDetail}
				handleDeclineCampaignInvite={declineCampaignInvite}
				errorMessage={errorMessage}
			/>

			<NegotiateDialog
				open={negotiateDialog}
				negotiables={negotiables}
				handleClose={() => setNegotiateDialog(false)}
				negotiate={negotiate}
				handleNegotiate={handleNegotiate}
				handleAnotherItem={handleAnotherItem}
				negotiateCampaign={negotiateCampaign}
				startDateOpen={startDateOpen}
				endDateOpen={endDateOpen}
				handleStartDateOpen={(value) => setStartDateOpen(value)}
				handleEndDateOpen={(value) => setEndDateOpen(value)}
			/>

			<div className={styles.declineContainer}>
				<h1>{createdBy.name} has invited you to a campaign</h1>
				<p className={styles.firstp}>{invitationMessage}</p>
				<p className={styles.secondp}></p>
				<div className={styles.buttonContainer}>
					<button className={styles.accept} onClick={() => handleAcceptInvite()} >Accept</button>
					<button className={styles.nego} onClick={() => handleNegotiation()}>Negotiate</button>
					<button className={styles.decline} onClick={() => setDecline(true)} >Decline</button>
				</div>
			</div> </>)
};

export default InviteCard