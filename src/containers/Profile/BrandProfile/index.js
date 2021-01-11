import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './brandProfile.module.scss';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BrandInformation from './BrandInformation';
import ProductCategories from './ProductCategories';
import PopularProducts from './PopularProducts';
import RightMenu from './RightMenu';

const BrandProfile = () => {
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    const isOwner = localStorage.getItem('isOwner');
    setIsOwner(true);
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.profileHeading}>
          <div className={styles.brandInfo}>
            <Avatar className={styles.brandImage}></Avatar>
            <div className={styles.nameAndMessage}>
              <div className={styles.brandName}>Brand Name</div>
              {isOwner ? (
                <Link to='#'>Upload Profile Photo</Link>
              ) : (
                <button className={styles.messageButton}>Message</button>
              )}
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
      <div className={styles.rightSidebar}>
        <RightMenu isOwner={isOwner} />
      </div>
    </div>
  );
};

export default BrandProfile;
