import React, { useState } from 'react';
import { Edit, Phone } from 'react-feather';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import styles from './Social.module.scss';
import moment from 'moment';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';

const Facebook = () => {
	return (
		<SVG src={require('../../../../assets/Facebook block.svg')} />
	);
};
const Instagram = () => {
	return (
		<SVG src={require('../../../../assets/Instagram block.svg')} />
	);
};
const Youtube = () => {
	return (
		<SVG src={require('../../../../assets/Youtube block.svg')} />
	);
};

const Social = ({ handleEdit }) => {

	return (
		<>
			<Grid container spacing={3} md={10}>
				<Grid item xs={12} sm={12} md={4}>
					<div className={styles.influencerInfoContainer}>
						<div className={styles.socialIcons} >
							<Instagram />
						</div>
						<div className={styles.detailSubContent}>
							94.1K Followers
						</div>
						<div className={styles.influencerHandler}>
							@samOzkural
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<div className={styles.influencerInfoContainer}>
						<div className={styles.socialIcons} >
							<Youtube />
						</div>
						<div className={styles.detailSubContent}>
							94.1K Followers
						</div>
						<div className={styles.influencerHandler}>
							Sam Ozkural
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<div className={styles.influencerInfoContainer}>
						<div className={styles.socialIcons} >
							<Facebook />
						</div>
						<div className={styles.detailSubContent}>
							94.1K Followers
						</div>
						<div className={styles.influencerHandler}>
							Sam Ozkural
						</div>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default Social;
