import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './headerStyles.module.scss';

const Header = () => {
  return (
    <div className={styles.mainContainer}>
      {/* This is header div */}
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.headerSearchIcon} />
        <input
          className={styles.searchInput}
          placeholder='Search here...'
          type='search'
        ></input>
      </div>
    </div>
  );
};

export default Header;
