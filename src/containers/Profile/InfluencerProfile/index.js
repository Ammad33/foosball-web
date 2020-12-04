import React, { useState, useEffect } from 'react';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import styles from './InfluencerProfile.module.scss';
import { Avatar } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import SVG from 'react-inlinesvg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import InfluencerInformation from './InfluencerInformation';
import InfluencerCategories from './InfluencerCategories';
import InfluencerPosts from './RecentPosts'
import Divider from '@material-ui/core/Divider';
import RightMenu from './RightMenu';
import Social from './Social';
import AverageEngagement from './AverageEngagement';



const User = () => {
	return (
		<span >
			<SVG src={require('../../../assets/user.svg')} />
		</span>
	);
};
const MapPin = () => {
	return (
		<span >
			<SVG src={require('../../../assets/map-pin.svg')} />
		</span>
	);
};

const InfluencerProfile = () => {

	return (
		<>
			<div className={styles.ProfileContainer}>
				<Grid container>
					<Grid container spacing={3} md={10}>
						<Grid item xs={12} sm={12} md={10}>

							<div className={styles.ProfileHeading}>
								<Avatar
									className={styles.InfluencerImage}
									alt='Profile'
									src='https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'
								/>
								<div>
									<div className={styles.InfluencerName}>
										Influencer Name
										</div>
										<div className= {styles.address}><User/> 25-30 <MapPin/> Fort Lauderdale, FL</div>
									<Link to='#'>Change Profile Photo</Link>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={5}>
							<InfluencerInformation />
						</Grid>
						<Grid item xs={12} sm={12} md={5}>
							<InfluencerCategories />
						</Grid>
						<Social />
						<Grid item xs={12} sm={12} md={8}>
							<InfluencerPosts />
						</Grid>
						<Grid item xs={12} sm={12} md={8}>
							<AverageEngagement />
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={2} className={styles.exploreBrands} >
						<RightMenu />
					</Grid>
				</Grid>

			</div>

		</>
	);
};

export default InfluencerProfile;
