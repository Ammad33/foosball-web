import React, { useState } from 'react';
import { Edit } from 'react-feather';
import styles from './SimilarBrands.module.scss';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import clsx from 'clsx';
import { Facebook, Youtube, Instagram } from 'react-feather';
import InflencerBrandProfile from '../../../InfluencerProfile';
import { useHistory } from 'react-router-dom';


const SimilarBrands = ({ influencer}) => {
	const history = useHistory();
	const [influencerProfile, setInfluencerProfile] = useState(false);
	// const handleInfluencerProfile = () => {
	// 	setInfluencerProfile(true)
	// 	debugger;
	// 	return (

	// 	)
	// }
	return (
		<div>
			<Card
				className={styles.influencerCard}
				// onClick={() => history.push('/brandProfile')}
			>
				<CardContent className={styles.cardContent}>
					<div className={styles.cardDetails}>
						<div className={styles.personInfo}>
							<Avatar
								className={styles.personAvatar}
								src={influencer.avatar}
							/>
						</div>
						<span className={styles.BrandName}>{influencer.name}
							<div className={styles.BrandDescription}>{influencer.description}</div></span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default SimilarBrands;
