import React from 'react';
import styles from './Auth.module.scss';
const Auth = ({ children }) => {
  return (
    <main className={styles.authContainer}>
      <section className={styles.logoAndComponent}>
        <div className={styles.logoDiv}>Logo</div>
        <div>{children}</div>
      </section>
      <section className={styles.sidebar}>
        <div>Picture/Graphic TBD</div>
      </section>
    </main>
  );
};

export default Auth;
