import React from 'react';
import styles from './InfluencerCard.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import SVG from 'react-inlinesvg';
import clsx from 'clsx';
const FacebookSVG = () => {
  return <SVG src={require('../../../../assets/facebook.svg')} />;
};
const InstagramSVG = () => {
  return <SVG src={require('../../../../assets/instagram.svg')} />;
};
const YoutubeSVG = () => {
  return <SVG src={require('../../../../assets/youtube.svg')} />;
};

const InfluencerCard = ({ influencer, selected, toggleInfluncer }) => {
  return (
    <Card
      className={clsx(
        styles.influencerCard,
        selected !== -1 ? styles.selectedInfluencer : ''
      )}
      onClick={() => toggleInfluncer(influencer)}
    >
      <CardContent className={styles.cardContent}>
        <div className={styles.cardDetails}>
          <div className={styles.personInfo}>
            <Avatar className={styles.personAvatar} src={influencer.avatar} />
          </div>
          <span className={styles.first_last}>
            {influencer.name}
            <div className={styles.influencername}>@{influencer.socialTag}</div>
          </span>
          <span className={styles.instaIcon}>
            <InstagramSVG />
            <div className={styles.instafollowers}>
              {influencer.instaFollowers}
            </div>{' '}
          </span>
          <span className={styles.ytIcon}>
            <YoutubeSVG />
            <div className={styles.ytfollowers}>
              {' '}
              {influencer.youtubeFollowers}
            </div>
          </span>
          <span className={styles.fbIcon}>
            <FacebookSVG />
            <div className={styles.influencername}>
              {influencer.facebookFollowers}
            </div>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
