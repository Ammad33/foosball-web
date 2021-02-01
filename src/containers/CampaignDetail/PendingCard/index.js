import React from 'react';
import styles from './PendingCard.module.scss';

const PendingCard = ({ handlecreateMircositeFlag,handleSignContractFlag, data }) => {
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
			{data.internalState === 'INFLUENCER_ACCEPTED_TERMS' ? (
				<>
					<h1>Sign Contract Terms.</h1>
					<p className={styles.firstp}></p>
					<p className={styles.secondp}></p>
					<button onClick={() => handleSignContract()}>Sign Contract</button>
				</>
			) : (
					<>
						<h1>Create Your Microsite.</h1>
						<p className={styles.firstp}></p>
						<p className={styles.secondp}></p>
						<button onClick={() => handleCreateMicroSite()}>Create new Microsite</button>
					</>
				)
			}


		</div >)
};

export default PendingCard