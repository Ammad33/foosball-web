import React from 'react';
import { Edit } from 'react-feather';
import styles from './InfluencerCard.module.scss';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import clsx from 'clsx';
import { Facebook, Youtube, Instagram } from 'react-feather';




const InfluencerCard = ({ influencer }) => {
	// debugger;
	return (
		<div>


			<Card
				// className={clsx(
				// 	styles.influencerCard,
				// 	selected ? styles.selectedInfluencer : ''
				// )}
				className={styles.influencerCard}
			// onClick={() => toggleInfluncer(influencer)}
			>
				<CardContent className={styles.cardContent}>
					<div className={styles.cardDetails}>
						<div className={styles.personInfo}>
							<Avatar
								className={styles.personAvatar}
								src={influencer.avatar}
							/>
						</div>
						<span className={styles.first_last}>{influencer.name}
							<div className={styles.influencername}>{influencer.description}</div></span>
					</div>
				</CardContent>
			</Card>




		</div>
	);
};

export default InfluencerCard;
