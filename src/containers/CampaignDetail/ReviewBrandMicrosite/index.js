import React, { useEffect, useContext, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';
import styles from './ReviewBrandMicrosite.module.scss';
import Button from '@material-ui/core/Button';
import WhitneyTemplate from '../../../assets/Whitney Template 1.png';
import EverettTemplate from '../../../assets/Everett_Template.png';
import LemmonTemplate from '../../../assets/Lemmon_Template.png';
import ArvonTemplate from '../../../assets/Arvon_Template.png';
import { API, graphqlOperation } from 'aws-amplify';
import { RootContext } from '../../../context/RootContext';
import Iframe from 'react-iframe';
import config from '../../../config';



const ReviewBrandMicrosite = ({ name, data, campaignId }) => {
	const history = useHistory();
	const [campaign, setCampaign] = useState('');
	const {
		brandId, currentUser
	} = useContext(RootContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		let id = campaignId.split('#');
		setCampaign(id[1]);
	}, [])

	const approveMicrosite = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation myMutation {
						approveMicrosite(brandId: "${brandId}", campaignId: "${campaignId}")
					}`
				)
			)
			window.location.reload();
		}
		catch (e) {
			console.log("Error In approving microsite", e)
		}

	}

	const getTemplate = (template) => {
		switch (template) {
			case 'ONE':
				return (
					<img src={WhitneyTemplate} />
				)
			case 'TWO':
				return (
					<img src={EverettTemplate} />

				)
			case 'THREE':
				return (
					<img src={LemmonTemplate} />

				)
			case 'FOUR':
				return (
					<img src={ArvonTemplate} />

				)
			default:
				return '';
		}
	}

	return (
		<div className={styles.mainContainer}>
			<div className={styles.crumsContainer}>
				<span onClick={() => history.push('/campaigns')}>Campaigns</span>
				<ChevronRight />
				<span onClick={() => history.push('/campaignDetail')}>
					{name}
				</span>
				<ChevronRight />
				<span>Review Microsite</span>
			</div>
			<div className={styles.contentContainer}>
				<div className={styles.secondContainer}>
					<Iframe
						url={`${process.env.REACT_APP_FOMO_URL}/?brandId=${brandId}&campaignId=campaign%23${campaign}&accessToken=${currentUser.signInUserSession.accessToken.jwtToken}`}
						width="100%"
						height="100%"
						id="myId"
						// className="myClassname"
						className={styles.secondContainer}
						display="initial"
						position="relative" />
				</div>
				<div className={styles.actionsContainer}>
					<div className={styles.declineBtn}>Decline with comments</div>
					<button className={styles.approveBtn} onClick={() => approveMicrosite()}>Approve</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewBrandMicrosite;
