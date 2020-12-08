import React, { useContext, useState , useHistory, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './Setting.module.scss';
import Notifications from './Notifications';
import { API } from 'aws-amplify';
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
  //const [influencers, setInfluncers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [meData, setMeData] = useState([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState([]);
  const [typeName, setTypeName] = useState([]);
	const [brandId, setBrandId] = useState([]);
	const { 
		brandType
		 } = useContext(RootContext);

  useEffect(() => {
    myData();
  }, []);

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
						organizations {
							organization {
								id
								name
								__typename
								... on Influencer {
									invites {
									name
									}
								}
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
      // debugger;
      setEmail(mydata.data.me.email);
      setFullName(mydata.data.me.fullName);
      setBrandName(mydata.data.me.organizations[0].organization.name);
      setTypeName(mydata.data.me.organizations[1].organization.__typename)
    } catch (e) {
      console.log(e);
    }
	};
	debugger;


  const getContents = () => {
    switch (active) {
      case 'account':
        return (
          <Account
            fullname={fullName}
            handleFullName={(e) => {
              setFullName(e.target.value);
            }}
            email={email}
            handleEmail={(e) => {
              setEmail(e.target.value);
            }}
            brandName={brandName}
            handleBrandName={(e) => {
            setBrandName(e.target.value);
            }}
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
        return (
          <ConnectedAccounts
            typeName={brandType}
          />);
      case 'billing':
        return <Billing />
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
      <div className={styles.settingHeading}>
        <h1>Settings</h1>
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
