import React from 'react';
import { Avatar } from '@material-ui/core';
import styles from './Brand.module.scss';

const Brand = () => {
  return (
    <div className={styles.brandContainter}>
      <Avatar
        className={styles.brandImage}
        alt='Profile'
        src='https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'
      />
      <span>Logo Here </span>
    </div>
  );
};

export default Brand;
