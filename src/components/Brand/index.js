import React from 'react';
import styles from './Brand.module.scss';
import logo from '../../assets/logo.png';

const Brand = () => {
  return (
    <div className={styles.brandContainter}>
      <img alt='Profile' src={logo} />
    </div>
  );
};

export default Brand;
