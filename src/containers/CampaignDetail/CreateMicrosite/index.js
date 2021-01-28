import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './CreateMicrosite.module.scss';
import Button from '@material-ui/core/Button';
import { ChevronRight} from 'react-feather';

const CreateMicrosite = ({
	name,
	handleCreateMicrosite
}) => {
	const history = useHistory();
	// const handleCreateMicrosite = () => {
	// 	handleCreateMicrosite();
	// }

	return (
		<>
			<div className={styles.mainContainer}>
				<div className={styles.crumsContainer}>
					<span onClick={() => history.push('/campaigns')}>Campaigns</span>
					<ChevronRight />
					<span onClick={() => window.location.reload()}>
						{name}
					</span>
					<ChevronRight />
					<span>Review and Sign</span>
					<ChevronRight />
					<span>Create Microsite</span>
				</div>
				<div className={styles.contentContainer}>
					<div className={styles.micrositeContainer}>
						<p> Choose a microsite template below and then customize it.</p>
					</div>
					<div className={styles.actionsContainer}>
						<Button className={styles.declineBtn}>Default</Button>
						<button className={styles.approveBtn} onClick={() => handleCreateMicrosite()}> Sign</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateMicrosite;
