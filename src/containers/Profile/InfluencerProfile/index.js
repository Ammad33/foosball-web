import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './InfluencerProfile.module.scss';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import InfluencerInformation from './InfluencerInformation';
import InfluencerCategories from './InfluencerCategories';
import InfluencerPosts from './RecentPosts';
import RightMenu from './RightMenu';
import Social from './Social';
import AverageEngagement from './AverageEngagement';

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
  const [viewInfluencerProfile, setViewInfluencerProfile] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    const isOwner = localStorage.getItem('isOwner');
    setIsOwner(isOwner);
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.profileHeading}>
          <div className={styles.influencerInfo}>
            <Avatar className={styles.influencerImage} alt='Profile' />
            <div className={styles.nameAndMessage}>
              <div>
                <div className={styles.influencerName}>Influencer Name</div>
                {isOwner ? (
                  <div className={styles.address}>
                    <User /> 25-30 <MapPin /> Fort Lauderdale, FL
                  </div>
                ) : (
                  ''
                )}
              </div>
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
              <button className={styles.prospects}>Add to Prospects</button>
              <button className={styles.start}>Start Campaign</button>
            </div>
          )}
        </div>
        <div className={styles.profileDetails}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <InfluencerInformation isOwner={isOwner} />
            </Grid>
            <Grid item xs={6}>
              <InfluencerCategories isOwner={isOwner} />
            </Grid>
            <Grid item xs={12}>
              <Social />
            </Grid>
            <Grid item xs={12}>
              <InfluencerPosts />
            </Grid>
            <Grid item xs={12}>
              <AverageEngagement />
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

export default InfluencerProfile;
