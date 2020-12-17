import React from 'react';
import { Avatar } from '@material-ui/core';
import styles from './Brand.module.scss';
import logo from '../../assets/fomoPromo_logo.png';

const Brand = () => {
  return (
    <div className={styles.brandContainter}>
      <img
        // className={styles.brandImage}
				alt='Profile'
				src= {logo}
      />
    </div>
  );
};

export default Brand;
