import React from 'react';
import styles from './InfluencerCard.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import clsx from 'clsx';
import { Facebook, Youtube, Instagram } from 'react-feather';

const InfluencerCard = ({ influencer, selected, toggleInfluncer }) => {
  const calculateFollowersCount = (count) => {
    console.log('count ', count);
    let millions = (count / 1000000).toString().split('.');
    let thousands = (count / 1000).toString().split('.');
    if (millions[0] !== '0') {
      console.log('send million', millions);
      return `${
        millions[1] ? [millions[0], millions[1][0]].join('.') : millions[0]
      }m`;
    } else {
      console.log('send thousands', thousands);
      return `${
        thousands[1] ? [thousands[0], thousands[1][0]].join('.') : thousands[0]
      }k`;
    }
    return '';
  };
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
          <div className={styles.first_last}>
            <p>{influencer.name}</p>
            <p className={styles.influencername}>@influencerTag</p>
          </div>
          <div className={styles.socialContainer}>
            {influencer.socialIdentities &&
              influencer.socialIdentities.map((social) => {
                switch (social.platform) {
                  case 'INSTAGRAM':
                    return (
                      <div className={styles.socialItem}>
                        <Instagram />
                        <span className={styles.countText}>
                          {calculateFollowersCount(social.followerCount)}
                        </span>
                      </div>
                    );
                  case 'FACEBOOK':
                    return (
                      <div className={styles.socialItem}>
                        <Facebook />
                        <span className={styles.countText}>
                          {calculateFollowersCount(social.followerCount)}
                        </span>
                      </div>
                    );
                  case 'YOUTUBE':
                    return (
                      <div className={styles.socialItem}>
                        <Youtube />
                        <span className={styles.countText}>
                          {calculateFollowersCount(social.followerCount)}
                        </span>
                      </div>
                    );

                  default:
                    return '';
                }
              })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
