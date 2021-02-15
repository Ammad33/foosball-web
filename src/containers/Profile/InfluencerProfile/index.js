import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import styles from './InfluencerProfile.module.scss';
import { RootContext } from '../../../context/RootContext';
import { Avatar } from '@material-ui/core';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import InfluencerInformation from './InfluencerInformation';
import InfluencerCategories from './InfluencerCategories';
import InfluencerPosts from './RecentPosts';
import RightMenu from './RightMenu';
import Social from './Social';
import { API, graphqlOperation } from 'aws-amplify';
import AverageEngagement from './AverageEngagement';
import uploadImages from '../../../actions/uploadImges';

const User = () => {
	return (
		<span>
			<SVG src={require('../../../assets/user.svg')} />
		</span>
	);
};
const MapPin = () => {
	return (
		<span>
			<SVG src={require('../../../assets/map-pin.svg')} />
		</span>
	);
};

const InfluencerProfile = () => {
	const [isOwner, setIsOwner] = useState(false);

	const [influencerProfile, setInfluencerProfile] = useState(null);
	const [imageUrl, setImageUrl] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [influencerName, setInfluencerName] = useState('');

	useEffect(() => {
		const isOwner = localStorage.getItem('isOwner');
		setIsOwner(isOwner);
	});

	const { brandId, setBrands, setInfluencers } = useContext(RootContext);

	const getInfluencers = async () => {
		try {
			const team = await API.graphql({
				query: `{
					me {
						organizations {
						  organization {
							... on Influencer {
							  id
							  email
							  imageUrl
							}
						  }
						}
					  }
        }`,
			});

			team.data && team.data !== null && team.data.me.organizations && team.data.me.organizations.length > 0 && team.data.me.organizations.forEach(item => {
				if (item.organization.id === brandId) {
					setInfluencerProfile(item.organization.imageUrl)
				}
			});

		} catch (err) {

		}
	}


	const getMeData = async () => {
		try {
			const mydata = await API.graphql({
				query: `{
							me {
								email
								fullName
								id
								organizations {
									organization {
										id
										name
										__typename
										... on Influencer {
											id
										}
										imageUrl
										email
										roles {
											id
											administration
										}
									}
								}
								about
								age
								companyTitle
								imageUrl
								joined
								modified
								phoneNumber
							}
					}`,
			});

			/**seprating brands and influencers data */
			let brandsData = [];
			let influencersData = [];
			mydata.data.me.organizations !== null &&
				mydata.data.me.organizations.forEach((item) => {
					if (item.organization.__typename === 'Influencer') {
						influencersData.push(item);
					} else if (item.organization.__typename === 'Brand') {
						brandsData.push(item);
					}
				});
			setBrands(brandsData);
			setInfluencers(influencersData);
		} catch (e) {
			if (e.data) {

				/**seprating brands and influencers data */
				let brandsData = [];
				let influencersData = [];
				e.data.me.organizations !== null &&
					e.data.me.organizations.forEach((item) => {
						if (item.organization.__typename === 'Influencer') {
							influencersData.push(item);
						} else if (item.organization.__typename === 'Brand') {
							brandsData.push(item);
						}
					});
				setBrands(brandsData);
				setInfluencers(influencersData);
			}
		}
	};

	useEffect(() => {
		getInfluencers();
	}, [])

	useEffect(() => {
		updateInfluencer();
	}, []);

	const updateInfluencer = async () => {
		let res = await API.graphql(
			graphqlOperation(
				`mutation updateInfluencer ($input : UpdateInfluencerInput!) {
					updateInfluencer(input: $input) {
						influencer {
							name
						  }
				imageUploadUrl
			}
		}`, {
				input: {
					id: brandId
				}
			}));

		if (res.data && res.data !== null && res.data.updateInfluencer && res.data.updateInfluencer !== null) {
			setImageUrl(res.data.updateInfluencer.imageUploadUrl);
			setInfluencerName(res.data.updateInfluencer.influencer.name);
		}
	};

	const postImage = (url) => {
		UploadImage(url, imageFile);
		// setTimeout(() => getMeData(), 3000);
	};




	const UploadImage = (URL, file) => {
		console.log(URL, file);
		var requestOptions = {
			method: 'PUT',
			body: file,
			headers: {
				'Content-Type': ''

			},
			redirect: 'follow'
		};

		fetch(URL, requestOptions)
			.then(response => response.text())
			.then(result => getMeData())
			.catch(error => console.log('error', error));

	};

	useEffect(() => {
		if (imageFile !== null && imageUrl !== '') {
			postImage(imageUrl);
		}
	}, [imageUrl, imageFile]);


	return (
		<div className={styles.mainContainer}>
			<div className={styles.contentContainer}>
				<div className={styles.profileHeading}>
					<div className={styles.influencerInfo}>
						<Avatar className={styles.influencerImage} alt='Profile' src={influencerProfile} />
						<div className={styles.nameAndMessage}>
							<div>
								<div className={styles.influencerName}>{influencerName}</div>
								{isOwner ? (
									<div className={styles.address}>
										<User /> 25-30 <MapPin /> Fort Lauderdale, FL
									</div>
								) : (
										''
									)}
							</div>
							{/* {isOwner ? ( */}
							<label htmlFor='hero1' style={{
								color: '#3481EF',
								fontFamily: 'Poppins',
								fontSize: '14px',
								fontWeight: 500,
								letterSpacing: 0,
								lineHeight: '21px'
							}}>Upload Profile Photo</label>
							<input id='hero1' style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => { setImageFile(e.target.files[0]); setInfluencerProfile(URL.createObjectURL(e.target.files[0])) }} />

							{/* ) : (
									<button className={styles.messageButton}>Message</button>
								)} */}
						</div>
					</div>
					{isOwner ? (
						''
					) : (
							<div className={styles.buttonContainer}>
								{/* <button className={styles.prospects}>Add to Prospects</button> */}
								<button className={styles.start}>Start Campaign</button>
							</div>
						)}
				</div>
				<div className={styles.profileDetails}>
					<div container spacing={4}>
						<div className={styles.infoContainer}>
							<div>
								<InfluencerInformation isOwner={isOwner} />
								<Social />
							</div >
							<InfluencerCategories isOwner={isOwner} />
						</div>
						<div >
							<InfluencerPosts />
						</div >
					</div >
					{/* <AverageEngagement /> */}
				</div >
			</div >
		</div>
		/* <div className={styles.rightSidebar}>
				<RightMenu isOwner={isOwner} />
			</div> */
	);
};

export default InfluencerProfile;
