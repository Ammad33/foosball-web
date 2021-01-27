import React, {useState, useContext} from 'react';
import styles from './InviteCard.module.scss';
import DeclineDialog from '../../../components/CancellationDialog';
import Translation from '../../../assets/translation.json';
import { API, graphqlOperation } from 'aws-amplify';
import {RootContext} from '../../../context/RootContext';



const InviteCard = ({createdBy, campaignId, handleStatus, invitationMessage}) => {
	const [decline, setDecline] = useState(false);
	const [declineReason , setDeclineReason] = useState('');
	const [reasonDetail , setReasonDetail] = useState('');
	const {
   brandId
  } = useContext(RootContext);


	const reasons = [
		"Schedule is fully booked at this time",
		"Campaign compensation is too low",
		"Brand is a conflict of interest for my current deals",
		"Other (please specify below)",
	]

	const handleDeclineReason = (val) => {
		setDeclineReason(val);
	}
	const handleReasonDetail = (val) => {
		setReasonDetail(val);
	}
	const handleAcceptInvite = () => {
		acceptCampaignInvite()
	}

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
			handleStatus();
			acceptCampaignTerms();
		}	
		catch(e) {
			console.log("Error in accepting invite", e)
		}
	}


	const acceptCampaignTerms = async () => {
		try {
			await API.graphql (
				graphqlOperation (
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
			console.log("Error in accepting campaign terms " , e)
		}
	}


    return (
			<>
			<DeclineDialog 
			open={decline} 
			handleClose={() => setDecline(false)} 
			reason={declineReason} 
			reasons = {reasons}
			handleReason = {handleDeclineReason} 
			message={Translation.DIALOG.CAMPAIGN_DECLINE_DIALOG_MSG}
			buttonText = "Decline"
			handleReasonDetail = {handleReasonDetail}
			reasonDetail = {reasonDetail}

			/>
        <div className={styles.declineContainer}>
            <h1>{createdBy.name} has inivted you to a campaign</h1>
            <p className={styles.firstp}>{invitationMessage}</p>
            <p className={styles.secondp}></p>
            <div className={styles.buttonContainer}>
                <button className={styles.accept} onClick={()=>handleAcceptInvite()} >Accept</button>
                <button className={styles.nego}>Negotiate</button>
                <button className={styles.decline} onClick={() => setDecline(true)} >Decline</button>
            </div>
        </div> </>)
};

export default InviteCard