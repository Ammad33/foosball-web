import React, { useEffect, useState } from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import mainStyles from '../../../index.module.scss';

import TextField from '../../../components/TextField';

const BudgetAndConversionGoals = ({
  budget,
  handleBudget,
  handleGrossSale,
  targetGrossSale,
  setActiveForBudget,
}) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setActiveForBudget();
  }, [budget, targetGrossSale]);
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <TextField
          id='outlined-basic'
          fullWidth
          value={budget}
          onChange={handleBudget}
          className={mainStyles.placeholderColor}
          label='Budget'
          helperText={error ? <span> error </span> : ' '}
          variant='outlined'
					type='number'
					InputProps={{
            startAdornment: (
              <InputAdornment  position="start">
                $
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          id='outlined-basic'
          fullWidth
          type='number'
          value={targetGrossSale}
          className={mainStyles.placeholderColor}
          onChange={handleGrossSale}
          label='Target Gross Sales'
					variant='outlined'
					InputProps={{
            startAdornment: (
              <InputAdornment  position="start">
                $
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default BudgetAndConversionGoals;
