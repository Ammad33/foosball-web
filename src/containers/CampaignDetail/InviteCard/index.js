import React, {useState, useContext} from 'react';
import styles from './InviteCard.module.scss';
import DeclineDialog from '../../../components/CancellationDialog';
import Translation from '../../../assets/translation.json';
import { API, graphqlOperation } from 'aws-amplify';
import {RootContext} from '../../../context/RootContext';



const InviteCard = () => {
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

	const AcceptCampaignInvite = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation AcceptInvite {
						acceptCampaignInvite(input: {
							brandId: "a2c47aec-589d-4c41-9874-6471e76485bb", 
							influencerId: "${brandId}", 
							id: "campaign#0fc57bbd-bf04-4880-9260-a9282673d6f1"}) 
							{
							id
						}
					}`
				)
			)
		}
		catch(e) {
			console.log("Error in accepting invite, e")
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
            <h1>Care of has inivted you to a campaign</h1>
            <p className={styles.firstp}>"Hi sam, we are so excited for the chance to work with you, we.</p>
            <p className={styles.secondp}>love your content and hope that you see value in working with</p>
            <div className={styles.buttonContainer}>
                <button className={styles.accept} onClick={AcceptCampaignInvite()} >Accept</button>
                <button className={styles.nego}>Negotiate</button>
                <button className={styles.decline} onClick={() => setDecline(true)} >Decline</button>
            </div>
        </div> </>)
};

export default InviteCard