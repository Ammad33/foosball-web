import React, { useState, useContext } from 'react';
import styles from './InviteCard.module.scss';
import DeclineDialog from '../../../components/CancellationDialog';
import Translation from '../../../assets/translation.json';
import { API, graphqlOperation } from 'aws-amplify';
import { RootContext } from '../../../context/RootContext';
import NegotiateDialog from '../NegotiateDialog';
import {useHistory} from 'react-router-dom';



const InviteCard = ({ createdBy, campaignId, handleStatus, invitationMessage, handleReviewAndSign }) => {
	const history = useHistory();
	const [decline, setDecline] = useState(false);
	const [declineReason, setDeclineReason] = useState('');
	const [reasonDetail, setReasonDetail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [negotiateDialog , setNegotiateDialog] = useState(false);
	const [negotiateItem , setNegotiateItem] = useState('');
	const [negotiate, setNegotiate] = useState('');

	// const [negotiate, setNegotiate] = useState([
  //   {
  //     negotiateItem: '',
	// 		negotiateMessage: '',
	// 		negotiateValue: '',
  //   },
  // ]);



	const {
		brandId
	} = useContext(RootContext);


	const reasons = [
		"Schedule conflict",
		"Campaign compensation",
		"Conflict of interest",
		"Other",
	]

	const negotiateItems = [
		"Post Fee",
		"Story Fee",
		"Monthly Retainer Fee",
		"Revenue Share",
		"Post Frequency",
		"Campaign Duration",
		"Other"
	]

	const handleNegotiateItem = (val) => {
		setNegotiateItem(val);
	}

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

	const acceptCampaignInvite = async () => {
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
			acceptCampaignTerms();
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
				handleDeclineCampaignInvite = {declineCampaignInvite}
				errorMessage = {errorMessage}
			/>

			<NegotiateDialog
				open = {negotiateDialog}
				handleClose = {()=> setNegotiateDialog(false)}
				negotiateItems = {negotiateItems}
				negotiateItem = {negotiateItem}
				handleNegotiateItem = {handleNegotiateItem}
				handleAnotherItem = {handleAnotherItem}
			/>

			<div className={styles.declineContainer}>
				<h1>{createdBy.name} has invited you to a campaign</h1>
				<p className={styles.firstp}>{invitationMessage}</p>
				<p className={styles.secondp}></p>
				<div className={styles.buttonContainer}>
					<button className={styles.accept} onClick={() => handleAcceptInvite()} >Accept</button>
					<button className={styles.nego} 	onClick={() => setNegotiateDialog(true)}>Negotiate</button>
					<button className={styles.decline} onClick={() => setDecline(true)} >Decline</button>
				</div>
			</div> </>)
};

export default InviteCard