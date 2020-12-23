import React, { useEffect } from 'react';
import { Grid, Select, InputAdornment } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './CreateCompensation.module.scss';
import { Trash } from 'react-feather';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import Collection from '../../Collections'

const options = [];
for (let i = 3; i <= 20; i += 1) {
  options.push(i);
}

const Chevron = () => {
  return (
    <span className={styles.dropDownCustomizeSvg}>
      <SVG src={require('../../../../assets/chevron-downn.svg')} />
    </span>
  );
};

const CreateCompensation = ({
  compensations,
  handleAnother,
  index,
  item,
  handleCompensationValue,
  handleRemoveCompensation,
  compensationProduct,
  handleCompensationProducts,
  compensationProductItems,
  compensationProducts,
  handleActiveForCompensationProduct,
  handleCompensationProductItem,
  giftCode,
  handleGiftCode
}) => {

  useEffect(() => {
    handleActiveForCompensationProduct();
  }, [compensations]);

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        className={clsx(
          styles.headerContainer,
          index > 0 ? styles.marginTop : ''
        )}
      >
        <p className={styles.headingColor}>Compensation Type {index + 1}</p>
        {compensations.length > 1 && (
          <Trash onClick={() => handleRemoveCompensation(index)} />
        )}
      </Grid>
      <Grid item xs={12} className={styles.marginbottomSelect}>
        <FormControl fullWidth variant='outlined-123'>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            label='Choose Collection'
            IconComponent={() => <Chevron />}
            value={item.compensationType}
            onChange={(e) => {
              handleCompensationValue(
                e.target.value,
                index,
                'compensationType'
              );
              if (e.target.value !== '') {
                handleAnother();
              }
            }}
            displayEmpty
            MenuProps={{ variant: 'menu' }}
            input={<SelectMenu />}
          >
            <MenuItem value='' disabled>
              Compensation Type
            </MenuItem>
            <MenuItem value={'CASH_PER_POST'}>Cash per post</MenuItem>
            <MenuItem value={'CASH_PER_MONTHLY_DELIVERABLE'}>Cash per monthly deliverable</MenuItem>
            <MenuItem value={'REVENUE_SHARE'}>Revenue Share</MenuItem>
            <MenuItem value={'GIFT_CARD'}>Gift Card</MenuItem>
            <MenuItem value={'PRODUCT'}>Products</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {item.compensationType !== '' && item.compensationType !== 'REVENUE_SHARE' && item.compensationType !== 'GIFT_CARD' &&
        (
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              id='outlined-basic'
              fullWidth
              type='number'
              label='Enter Amount'
              variant='outlined'
              value={item.amount}
              onChange={(e) =>
                handleCompensationValue(e.target.value, index, 'amount')
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>$</InputAdornment>
                ),
              }}
            />
          </Grid>
        )}
      {item.compensationType === 'REVENUE_SHARE' && (
        <Grid item xs={12} sm={12} md={12}>
          <FormControl fullWidth variant='outlined'>
            <Select
              id='revenue'
              fullWidth
              label='Enter Revenue Share'
              variant='outlined'
              value={item.amount}
              onChange={(e) =>
                handleCompensationValue(e.target.value, index, 'amount')
              }
              displayEmpty
              IconComponent={() => <Chevron />}
              MenuProps={{ variant: 'menu' }}
              input={<SelectMenu />}
            >
              <MenuItem value='' disabled>
                Select revenue share percentage
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
      {item.compensationType === 'GIFT_CARD' &&
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            className={styles.marginbottomSelect}
            id='outlined-basic123'
            fullWidth
            type='number'
            label='Enter Amount'
            variant='outlined'
            value={item.amount}
            onChange={(e) =>
              handleCompensationValue(e.target.value, index, 'amount')
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              ),
            }}
          />
          <TextField
            id='outlined-basic'
            fullWidth
            label='Paste gift card code'
            variant='outlined'
            value={giftCode}
            className={styles.giftCard}
            onChange={handleGiftCode}
          />
        </Grid>
      }
      {item.compensationType === 'Products' && (
        <Grid item xs={12} sm={12} md={12}>
          <Collection
            collection={compensationProduct}
            handleCollection={handleCompensationProducts}
            handleCollectionItem={handleCompensationProductItem}
            collectionItems={compensationProductItems}
            collections={compensationProducts}
            handleActiveForCollection={handleActiveForCompensationProduct}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default CreateCompensation;
