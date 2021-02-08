import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import styles from './brandProfile.module.scss';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BrandInformation from './BrandInformation';
import ProductCategories from './ProductCategories';
import PopularProducts from './PopularProducts';
import RightMenu from './RightMenu';
import { API, graphqlOperation } from 'aws-amplify';
import uploadImages from '../../../actions/uploadImges';
import { RootContext } from '../../../context/RootContext';

const BrandProfile = () => {
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    const isOwner = localStorage.getItem('isOwner');
    setIsOwner(true);
  });


  const [influencerProfile, setInfluencerProfile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [brandName, setBrandName] = useState('');

  const { brandId, setBrands, setInfluencers } = useContext(RootContext);

  const getBrands = async () => {
    try {
      const team = await API.graphql({
        query: `{
					me {
						organizations {
						  organization {
						    ... on Brand {
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
  };

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
    getBrands();
  }, [])

  useEffect(() => {
    updateBrand();
  }, []);

  const updateBrand = async () => {
    let res = await API.graphql(
      graphqlOperation(
        `mutation  updateBrand($input : UpdateBrandInput!) {
          updateBrand(input: $input) {
            brand {
              name
            }
				imageUploadUrl
			}
		}`, {
        input: {
          id: brandId
        }
      }));

    if (res.data && res.data !== null && res.data.updateBrand && res.data.updateBrand !== null) {
      setImageUrl(res.data.updateBrand.imageUploadUrl);
      setBrandName(res.data.updateBrand.brand.name);
    }
  };

  const postImage = async (url) => {
    await uploadImages(url, imageFile);

    setTimeout(() => getMeData(), 3000);

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
          <div className={styles.brandInfo}>
            <Avatar className={styles.brandImage} src={influencerProfile}></Avatar>
            <div className={styles.nameAndMessage}>
              <div className={styles.brandName}>{brandName}</div>
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

              {/* // ) : (
              //     <button className={styles.messageButton}>Message</button>
              //   )} */}
            </div>
          </div>
          {isOwner ? (
            ''
          ) : (
              <div className={styles.buttonContainer}>
                {/*  Hidden for Phase 1 */}
                {/* <button className={styles.addButton}>Add to Prospects</button>  */}
              </div>
            )}
        </div>
        <div className={styles.profileDetails}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <BrandInformation isOwner={isOwner} />
            </Grid>
            <Grid item xs={6}>
              <ProductCategories isOwner={isOwner} />
            </Grid>
            <Grid item xs={12}>
              <PopularProducts isOwner={isOwner} />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* <div className={styles.rightSidebar}>
        <RightMenu isOwner={isOwner} />
      </div> */}
    </div>
  );
};

export default BrandProfile;
