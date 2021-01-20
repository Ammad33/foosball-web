import React, { useState } from 'react';
import styles from './BrandConnectAccounts.module.scss';
import shopifyStoreLogo from './../../../../assets/shoppify.png';
import TextField from '../../../../components/TextField';
import ChipButton from '../../../../components/ChipButton';
import SyncIcon from '@material-ui/icons/Sync';
import { InputAdornment, Grid } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { API, graphqlOperation } from 'aws-amplify';

const BrandConnectAccounts = () => {
  const [storeName, setStoreName] = useState('');
  const [storeSaved, setStoreSaved] = useState(false);
  const [storeAccessToken, setStoreAccessToken] = useState('');
  const [storeApiKey, setStoreApiKey] = useState('');
  const [storeBrandId, setStoreBrandId] = useState('');
  const [storeSharedKey, setStoreSharedKey] = useState('');

  const handleButtonClick = async (storeSaved) => {
    try {

      setStoreSaved(storeSaved);
      if (!storeSaved) {
        setStoreName('');
      }
      let data = {
        shop: storeName,
        accessToken: storeAccessToken,
        apiKey: storeApiKey,
        sharedKey: storeSharedKey,
        brandId: storeBrandId,
      };
      let response = await API.graphql(
        graphqlOperation(
          `mutation shopifyRegisterPrivate($input: shopifyRegisterPrivateInput!) {
				shopifyRegisterPrivate(input: $input)
		  }
		  `,
          {
            input: data,
          }
        )
      );
    } catch (e) { }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <Grid container spacing={3}>
          <p>
            Connecting your shopify account allows us to populate your products
            so you can create successful campaigns
          </p>
          <Grid item xs={12}>
            <img
              className={styles.shopifyLogo}
              src={shopifyStoreLogo}
              alt='Shopify Logo'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Shopify Shop Name'
              variant={storeSaved ? 'filled' : 'outlined'}
              value={storeName}
              onChange={(e) => {
                setStoreName(e.target.value);
              }}
              disabled={storeSaved ? true : false}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    className={styles.inputendornment}
                    position='end'
                  >
                    {storeSaved ? (
                      <CheckCircleIcon
                        className={styles.inputendornmentCheck}
                      />
                    ) : (
                        ''
                      )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              value={storeAccessToken}
              onChange={(e) => {
                setStoreAccessToken(e.target.value);
              }}
              label='Access Token'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              value={storeApiKey}
              onChange={(e) => {
                setStoreApiKey(e.target.value);
              }}
              label='API Key'
              variant='outlined'
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              value={storeBrandId}
              onChange={(e) => {
                setStoreBrandId(e.target.value);
              }}
              label='Brand Id'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              fullWidth
              value={storeSharedKey}
              onChange={(e) => {
                setStoreSharedKey(e.target.value);
              }}
              label='Shared Key'
              variant='outlined'
            />
          </Grid>

          <Grid item xs={12}>
            <ChipButton
              title={storeSaved ? 'Clear' : 'Connect'}
              buttonSize={'sm'}
              handleClick={() => handleButtonClick(!storeSaved)}
            />
          </Grid>

          {storeSaved ? (
            <div className={styles.storeSync}>
              <SyncIcon />
              Sync
            </div>
          ) : (
              ''
            )}
        </Grid>
      </div>
    </div>
  );
};

export default BrandConnectAccounts;
