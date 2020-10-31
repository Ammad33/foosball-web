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
        <div className={styles.socialInfo}>
          <Avatar src={influencer.avatar} />
          <div>
            <p>{influencer.name}</p>
            <p>
              <small>@{influencer.socialTag}</small>
            </p>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <div>
            <InstagramSVG />
            <p>
              <small>{influencer.instaFollowers}</small>
            </p>
          </div>
          <div>
            <YoutubeSVG />
            <p>
              <small>{influencer.youtubeFollowers}</small>
            </p>
          </div>
          <div>
            <FacebookSVG />
            <p>
              <small>{influencer.facebookFollowers}</small>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
