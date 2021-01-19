import React, { useContext, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './Setting.module.scss';
import Notifications from './Notifications';
import { API, Auth } from 'aws-amplify';
import Account from './Account';
import ConnectedAccounts from './ConnectedAccounts';
import Billing from './Billing';
import { RootContext } from '../../context/RootContext';

const Setting = () => {
	const [active, setActive] = useState('account');
	const [actionRequired, setActionRequired] = useState(true);
	const [signContracts, setSignContracts] = useState(true);
	const [influncerPosts, setInfluncerPosts] = useState(false);
	const [campaignStart, setCampaignStart] = useState(false);
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [brands, setBrands] = useState([]);
	const [imgUrl, setImgUrl] = useState([]);
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [emailVerified, setEmailVerified] = useState('');
	const [brandNamee, setBrandNamee] = useState([]);
	const [typeName, setTypeName] = useState([]);
	const [teamAdmin, setTeamAdmin] = useState(false);
	const { brandType, brandName, brandId, currentUser } = useContext(RootContext);

	useEffect(() => {
		myData();
		team();
	}, []);

	useEffect(() => {

		setBrandNamee(brandName)

	}, [brandName]);

	const [newBrand, setNewBrand] = useState({
		brandName: '',
		pocName: '',
		email: '',
		mobilePhone: '',
	});

	const [newBrandError, setNewBrandError] = useState({
		brandName: false,
		pocName: false,
		email: false,
		mobilePhone: false,
	});

	// const [newInfluencer, setNewInfluencer] = useState({
	//   fullName: '',
	//   instagramHandler: '',
	//   email: '',
	//   mobilePhone: '',
	// });

	// const [newInfluencerError, setNewInfluencerError] = useState({
	//   fullName: false,
	//   instagramHandler: false,
	//   email: false,
	//   mobilePhone: false,
	// });

	// const handleNewInfluencerChange = (value, fieldName) => {
	//   const newInfluner = { ...newInfluencer };
	//   newInfluner[fieldName] = value;
	//   const newInflunerError = { ...newInfluencerError };
	//   if (
	//     fieldName === 'email' ||
	//     (fieldName === 'mobilePhone' &&
	//       newInflunerError[fieldName] === true &&
	//       value !== '')
	//   ) {
	//     newInflunerError['mobilePhone'] = false;
	//     newInflunerError['email'] = false;
	//     setNewInfluencerError(newInflunerError);
	//   } else if (newInflunerError[fieldName] === true && value !== '') {
	//     newInflunerError[fieldName] = false;
	//     setNewInfluencerError(newInflunerError);
	//   }
	//   setNewInfluencer(newInfluner);
	// };

	const handleNewBrandChange = (value, fieldName) => {
		const brand = { ...newBrand };
		brand[fieldName] = value;
		const brandError = { ...newBrandError };
		if (
			fieldName === 'email' ||
			(fieldName === 'mobilePhone' &&
				brandError[fieldName] === true &&
				value !== '')
		) {
			brandError['mobilePhone'] = false;
			brandError['email'] = false;
			setNewBrandError(brandError);
		} else if (brandError[fieldName] === true && value !== '') {
			brandError[fieldName] = false;
			setNewBrandError(brandError);
		}
		setNewBrand(brand);
	};

	const clearNewBrand = () => {
		setNewBrand({
			brandName: '',
			pocName: '',
			email: '',
			mobilePhone: '',
		});

		setNewBrandError({
			brandName: false,
			pocName: false,
			email: false,
			mobilePhone: false,
		});
	};

	// const setNew = () => {
	//   setNewInfluencer({
	//     fullName: '',
	//     instagramHandler: '',
	//     email: '',
	//     mobilePhone: '',
	//   });

	//   setNewInfluencerError({
	//     fullName: false,
	//     instagramHandler: false,
	//     email: false,
	//     mobilePhone: false,
	//   });
	// };

	// const addNewInfluencer = () => {
	//   const newInfluencerErrorr = { ...newInfluencerError };
	//   if (newInfluencer.fullName === '') {
	//     newInfluencerErrorr.fullName = true;
	//   }
	//   if (newInfluencer.instagramHandler === '') {
	//     newInfluencerErrorr.instagramHandler = true;
	//   }

	//   if (newInfluencer.email === '' && newInfluencer.mobilePhone === '') {
	//     newInfluencerErrorr.email = true;
	//   }

	//   if (newInfluencer.email === '' && newInfluencer.mobilePhone === '') {
	//     newInfluencerErrorr.mobilePhone = true;
	//   }

	//   setNewInfluencerError(newInfluencerErrorr);

	//   if (Object.values(newInfluencerErrorr).includes(true)) {
	//     return;
	//   }

	//   const data = [...influencers];
	//   data.push(newInfluencer);
	//   setInfluncers(data);
	// };

	const addNewBrand = () => {
		const brandError = { ...newBrandError };
		if (newBrand.brandName === '') {
			brandError.brandName = true;
		}
		if (newBrand.pocName === '') {
			brandError.pocName = true;
		}

		if (newBrand.email === '' && newBrand.mobilePhone === '') {
			brandError.email = true;
		}

		if (newBrand.email === '' && newBrand.mobilePhone === '') {
			brandError.mobilePhone = true;
		}

		setNewBrandError(brandError);

		if (Object.values(brandError).includes(true)) {
			return;
		}

		const data = [...brands];
		data.push(newBrand);
		setBrands(data);
	};
	const myData = async () => {
		try {
			const mydata = await API.graphql({
				query: `{
					me {
						email
						fullName
						id
						verification {
							verified
							sent
						}
						organizations {
							organization {
								id
								name
								__typename
								imageUrl
								email
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
			setEmailVerified(mydata.data.me.verification.verified)
			setEmail(mydata.data.me.email);
			setFullName(mydata.data.me.fullName);
			setImgUrl(mydata.data.me.imageUrl);
			setBrandNamee(brandName);
			setTypeName(mydata.data.me.organizations[1].organization.__typename);
		} catch (e) {
			console.log(e);
			if (e.data) {
				setEmail(e.data.me.email);
				setFullName(e.data.me.fullName);
				setImgUrl(e.data.me.imageUrl);
			}
		}
	};
	const team = async () => {
		try {
			const team = await API.graphql({
				query: `{
          brand(id:"${brandId}") {
            users {
              user {
                id
							}
							role {
								administration
							}
            }
          }
        }`,
			})
			const teamAdmin = team.data.brand.users;
			teamAdmin.map((item) => {
				if (item.role.administration == true) {
					setTeamAdmin(true);
				}
			})
		}
		catch (e) {
			console.log(e);
		}
	}

	const handleChangePassword = async () => {
		const currentUser = await Auth.currentAuthenticatedUser();
		await Auth.changePassword(
			currentUser,
			oldPassword,
			newPassword
		);
		setNewPassword('');
		setOldPassword('');
	}

	const getContents = () => {
		switch (active) {
			case 'account':
				return (
					<Account
						fullname={fullName}
						imgUrl={imgUrl}
						handleFullName={(e) => {
							setFullName(e.target.value);
						}}
						email={email}
						handleEmail={(e) => {
							setEmail(e.target.value);
						}}
						brandName={brandNamee}
						handleBrandName={(e) => {
							setBrandNamee(e.target.value);
						}}
						oldPassword={oldPassword}
						newPassword={newPassword}
						setOldPassword={(e) => setOldPassword(e.target.value)}
						setNewPassword={(e) => setNewPassword(e.target.value)}
						handleChangePassword={handleChangePassword}
						emailVerfied={emailVerified}
						teamAdmin={teamAdmin}
					/>
				);
			case 'notification':
				return (
					<Notifications
						actionRequired={actionRequired}
						signContracts={signContracts}
						influncerPosts={influncerPosts}
						campaignStart={campaignStart}
						typeName={typeName}
						hanldeActionRequired={(e) => setActionRequired(e.target.checked)}
						hanldeSignContracts={(e) => setSignContracts(e.target.checked)}
						hanldeInfluencerPost={(e) => setInfluncerPosts(e.target.checked)}
						hanldeCampaignStart={(e) => setCampaignStart(e.target.checked)}
					/>
				);
			case 'connectedAccounts':
				return <ConnectedAccounts typeName={brandType} />;
			case 'billing':
				return <Billing />;
			// case 'contacts':
			// return <Contacts
			//   influencers={influencers}
			//   newInfluencer={newInfluencer}
			//   handleNewInfluencerChange={handleNewInfluencerChange}
			//   addNewInfluencer={addNewInfluencer}
			//   setNew={setNew}
			//   newInfluencerError={newInfluencerError}

			// />;
			//   return (
			//     <Brands
			//       brands={brands}
			//       newBrand={newBrand}
			//       handleNewBrandChange={handleNewBrandChange}
			//       addNewBrand={addNewBrand}
			//       clearNewBrand={clearNewBrand}
			//       newBrandError={newBrandError}
			//     />
			//   );
			default:
				return 'Unknown step';
		}
	};
	return (
		<div className={styles.settingContainer}>
			<div className={styles.settingHeadingContainer}>
				<div className={styles.settingHeading}>
					<span>Settings</span>
				</div>
			</div>
			<div className={styles.settingHeadingButton}>
				<button
					className={active === 'account' ? styles.active : ''}
					onClick={() => setActive('account')}
				>
					Account
        </button>
				<button
					className={active === 'notification' ? styles.active : ''}
					onClick={() => setActive('notification')}
				>
					Notifications
        </button>
				<button
					className={active === 'connectedAccounts' ? styles.active : ''}
					onClick={() => setActive('connectedAccounts')}
				>
					Connected Accounts
        </button>
				<button
					className={active === 'billing' ? styles.active : ''}
					onClick={() => setActive('billing')}
				>
					Billing
        </button>
			</div>
			<Grid containers>{getContents()}</Grid>
		</div>
	);
};

export default Setting;
