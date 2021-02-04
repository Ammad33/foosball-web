import React from 'react';
import styles from './PendingCard.module.scss';

const PendingCard = ({ handlecreateMircositeFlag, handleSignContractFlag, data }) => {
	const handleCreateMicroSite = () => {
		handlecreateMircositeFlag();
	}
	const handleSignContract = () => {
		handleSignContractFlag();
	}

	return (


		<div className={styles.pendingContainer}>
			{/* <h1>You're all set!</h1>
            <p className={styles.firstp}>No action items as of right now. We will let you know when there</p>
            <p className={styles.secondp}>is something you need to do.</p> */}
			{data && data.internalState && data.internalState === 'INFLUENCER_ACCEPTED_TERMS' ? (
				<>
					<h1>Sign Contract Terms.</h1>
					<p className={styles.firstp}></p>
					<p className={styles.secondp}></p>
					<button onClick={() => handleSignContract()}>Sign Contract</button>
				</>
			) :
				data && data.internalState && data.internalState === 'MICROSITE_APPROVAL_REQUESTED' ? (
					<>
						<h1>You're all set!</h1>
						<p className={styles.firstp}>No action items as of right now. We will let you know when there</p>
						<p className={styles.secondp}>is something you need to do.</p>
					</>
				) :
					data && data.microsite && data.microsite != null ? (
						<>
							<h1>Finalize the Microsite.</h1>
							<p className={styles.firstp}>Finalize the microsite and send it to brand for approval.</p>
							<p className={styles.secondp}></p>
							<div className={styles.buttonContainer}>
								<button onClick={() => handleCreateMicroSite()} style={{ marginTop: '30px' }}>Edit Microsite</button>
							</div>
						</>
					) : (
							<>
								<h1>Create the Microsite.</h1>
								<p className={styles.firstp}>Customize the site your followers will shop on throughout this</p>
								<p className={styles.secondp}>campaign.</p>
								<div className={styles.buttonContainer}>
									<button onClick={() => handleCreateMicroSite()}>Create Microsite</button>
								</div>
							</>
						)}
		</div >)
};

export default PendingCard