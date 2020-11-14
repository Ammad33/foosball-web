import React from 'react';
import styles from './Auth.module.scss';
import logo from '../../assets/FomoPromo_logo__primary_color.png';
import mainImage from '../../assets/AdobeStock_242493025_Preview.png';

const Auth = ({ children }) => {
  return (
    <main className={styles.authContainer}>
      <section className={styles.logoAndComponent}>
        <img className={styles.logoDiv} src={logo} alt='Logo' />
        <div className={styles.formDiv}>{children}</div>
      </section>
      <section className={styles.sidebar}>
        <img className={styles.logoDiv} src={mainImage} alt='Logo' />
      </section>
    </main>
  );
};

export default Auth;
