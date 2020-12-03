import React, { useState, useEffect } from 'react';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import styles from './brandProfile.module.scss';
import { Avatar } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import SVG from 'react-inlinesvg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BrandInformation from './BrandInformation';
import ProductCategories from './ProductCategories';
import PopularProducts from './PopularProducts'
import Divider from '@material-ui/core/Divider';
import RightMenu from './RightMenu';




const BrandProfile = () => {

	return (
		<>
			<div className={styles.ProfileContainer}>
				<Grid container>
					<Grid container spacing={3} md={10}>
						<Grid item xs={12} sm={12} md={10}>

							<div className={styles.ProfileHeading}>
								<Avatar
									className={styles.brandImage}
									alt='Profile'
									src='https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'
								/>
								<div>
									<div className={styles.brandName}>
										Brand Name
							</div>
									<Link to='#'>Change Profile Picture</Link>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={5}>
							<BrandInformation />
						</Grid>
						<Grid item xs={12} sm={12} md={5}>
							<ProductCategories />
						</Grid>
						<Grid item xs={12} sm={12} md={8}>
							<PopularProducts />
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={2} className={styles.exploreInfluencers} >
						<RightMenu/>
					</Grid>
				</Grid>

			</div>

		</>
	);
};

export default BrandProfile;
