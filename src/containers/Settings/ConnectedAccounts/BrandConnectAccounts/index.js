import React, { useState } from 'react';
import styles from './BrandConnectAccounts.module.scss';
import mainStyles from './../../../../index.module.scss';
import shopifyStoreLogo from './../../../../assets/shoppify.png';
import TextField from '../../../../components/TextField';
import ChipButton from '../../../../components/ChipButton';
import SyncIcon from '@material-ui/icons/Sync';
import { InputAdornment } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const BrandConnectAccounts = () => {
  const [storeName, setStoreName] = useState('');
  const [storeSaved, setStoreSaved] = useState(false);

  const handleButtonClick = (storeSaved) => {
    setStoreSaved(storeSaved);
    if (!storeSaved) {
      setStoreName('');
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h5>
        Connecting your shopify account allows us to populate your products so
        you can create successful campaigns
      </h5>
      <div className={styles.contentContainer}>
        <img
          className={styles.shopifyLogo}
          src={shopifyStoreLogo}
          alt='Shopify Logo'
        />
        <TextField
          className={styles.inputField}
          id='outlined-basic'
          label='Shopify Shop Name'
          variant={storeSaved ? 'filled' : 'outlined'}
          value={storeName}
          onChange={(e) => {
            setStoreName(e.target.value);
          }}
          disabled={storeSaved ? true : false}
          InputProps={{
            endAdornment: (
              <InputAdornment className={styles.inputendornment} position='end'>
                {storeSaved ? (
                  <CheckCircleIcon className={styles.inputendornmentCheck} />
                ) : (
                  ''
                )}
              </InputAdornment>
            ),
          }}
        />
        <ChipButton
          title={storeSaved ? 'Clear' : 'Connect'}
          buttonSize={'sm'}
          handleClick={() => handleButtonClick(!storeSaved)}
        />
        {storeSaved ? (
          <div className={styles.storeSync}>
            <SyncIcon />
            Sync
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default BrandConnectAccounts;
