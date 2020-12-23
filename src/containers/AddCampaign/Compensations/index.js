import React, { useState, useEffect } from 'react';
import { Grid, Select } from '@material-ui/core';
import SelectMenu from '../../../components/SelectMenu';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import SVG from 'react-inlinesvg';
import CreateCompensation from './CreateCompensation';
import AddIcon from '@material-ui/icons/Add';
import styles from './Compensations.module.scss';

const Chevron = () => {
  return (
    <span className={styles.dropDownCustomizeSvg}>
      <SVG src={require('../../../assets/chevron-downn.svg')} />
    </span>
  );
};



const Compensations = ({
  compensations,
  handleCompensations,
  handleCompensationValue,
  handleRemoveCompensation,
  handleActiveForCompensation,
  addAnother,

  compensationPayment,
  handleCompensationPayment,
  compensationProduct,
  handleCompensationProducts,
  compensationProductItems,
  compensationProducts,
  handleActiveForCompensationProduct,
  handleCompensationProductItem,
  giftCode,
  handleGiftCode
}) => {
  const checkAddAnother = () => {
    if (addAnother === true) {
      setAnother(true);
    }
  };

  const [handleAnother, setAnother] = useState(false);
  handleActiveForCompensation();
  useEffect(() => {
    checkAddAnother();
  }, [compensations]);


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth variant='outlined'>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              label='Influencer payment schedule'
              IconComponent={() => <Chevron />}
              value={compensationPayment}
              onChange={(e) => {
                handleCompensationPayment(e.target.value);
              }}
              displayEmpty
              MenuProps={{ variant: 'menu' }}
              input={<SelectMenu />}
            >
              <MenuItem value='' disabled>
                {' '}
                Influencer payment schedule
              </MenuItem>
              <MenuItem value={'1st of every month'}>
                1st of every month
              </MenuItem>
              <MenuItem value={'15th of every month'}>
                15th of every month
              </MenuItem>
              <MenuItem value={'Last day'}>Last day of every month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {compensations.map((item, index) => (
        <CreateCompensation
          giftCode={giftCode}
          handleGiftCode={handleGiftCode}
          item={item}
          key={index}
          compensations={compensations}
          index={index}
          handleCompensationValue={handleCompensationValue}
          handleRemoveCompensation={handleRemoveCompensation}
          handleAnother={() => setAnother(true)}
          compensationProduct={compensationProduct}
          handleCompensationProducts={handleCompensationProducts}
          compensationProductItems={compensationProductItems}
          compensationProducts={compensationProducts}
          handleActiveForCompensationProduct={
            handleActiveForCompensationProduct
          }
          handleCompensationProductItem={handleCompensationProductItem}
        />
      ))}
      {compensations.length > 0 && compensations.length !== 4 &&
        <button className={styles.addDeliverable} onClick={handleCompensations}>
          {' '}
          <AddIcon /> Add another compensation type
        </button>
      }
    </div>
  );
};

export default Compensations;
