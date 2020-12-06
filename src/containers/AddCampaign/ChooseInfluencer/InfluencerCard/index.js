import React from 'react';
import styles from './InfluencerCard.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import clsx from 'clsx';
import { Facebook, Youtube, Instagram } from 'react-feather';

const InfluencerCard = ({ influencer, selected, toggleInfluncer }) => {
  return (
    <Card
      className={clsx(
        styles.influencerCard,
        selected ? styles.selectedInfluencer : ''
      )}
      onClick={() => toggleInfluncer(influencer)}
    >
      <CardContent className={styles.cardContent}>
        <div className={styles.cardDetails}>
          <div className={styles.personInfo}>
            <Avatar className={styles.personAvatar} src={influencer.imageUrl} />
          </div>
          <span className={styles.first_last}>
            {influencer.name}
            <div className={styles.influencername}>@influencerTag</div>
          </span>
          {influencer.socialIdentities &&
            influencer.socialIdentities.map((social) => {
              switch (social.platform) {
                case 'INSTAGRAM':
                  return (
                    <span className={styles.instaIcon}>
                      <Instagram />
                      <div className={styles.instafollowers}>
                        {social.followerCount}
                      </div>{' '}
                    </span>
                  );
                case 'FACEBOOK':
                  return (
                    <span className={styles.fbIcon}>
                      <Facebook />
                      <div className={styles.influencername}>
                        {social.followerCount}
                      </div>
                    </span>
                  );
                case 'YOUTUBE':
                  return (
                    <span className={styles.ytIcon}>
                      <Youtube />
                      <div className={styles.ytfollowers}>
                        {' '}
                        {social.followerCount}
                      </div>
                    </span>
                  );

                default:
                  return '';
              }
            })}
          {/* <span className={styles.instaIcon}>
            <Instagram />
            <div className={styles.instafollowers}>
              {influencer.instaFollowers}
            </div>{' '}
          </span>
          <span className={styles.ytIcon}>
            <Youtube />
            <div className={styles.ytfollowers}>
              {' '}
              {influencer.youtubeFollowers}
            </div>
          </span>
          <span className={styles.fbIcon}>
            <Facebook />
            <div className={styles.influencername}>
              {influencer.facebookFollowers}
            </div>
          </span> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
