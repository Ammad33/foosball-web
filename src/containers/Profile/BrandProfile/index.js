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
	const history = useHistory()
	const [viewBrandProfile, setViewBrandProfile] = useState(false);
	useEffect(() => {
		if (history.location.pathname == "/brandProfile")
			setViewBrandProfile(true);
	});
	//debugger;
	return (
		<>
			<div className={styles.ProfileContainer}>
				<Grid container>
					<Grid container spacing={3} md={9}>
						<Grid item xs={12} sm={12} md={12} style={{ display: 'flex' }}>
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
									{viewBrandProfile ? (<button >Message</button>
									) : (
											<Link to='#'>Change Profile Photo</Link>
										)}
								</div>								
							</div>
						{viewBrandProfile ? (
							<div className={styles.ButtonContainer}>
								<button className={styles.prospects}>
									Add to Prospects
									</button>
							</div>
						) : ('')}
					</Grid>
					<Grid item xs={12} sm={12} md={5}>
						{(viewBrandProfile || !viewBrandProfile) && <BrandInformation viewBrandProfile={viewBrandProfile} />}
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						{(viewBrandProfile || !viewBrandProfile) && <ProductCategories viewBrandProfile={viewBrandProfile} />}
					</Grid>
					<Grid item xs={12} sm={12} md={11}>
						{(viewBrandProfile || !viewBrandProfile) && <PopularProducts viewBrandProfile={viewBrandProfile} />}
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={1} className={styles.exploreInfluencers} >
					{(viewBrandProfile || !viewBrandProfile) && <RightMenu viewBrandProfile={viewBrandProfile} />}
				</Grid>
				</Grid>

		</div>

		</>
	);
};

export default BrandProfile;
