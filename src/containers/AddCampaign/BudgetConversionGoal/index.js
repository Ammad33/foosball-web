import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';

import TextField from '../../../components/TextField';

const BudgetAndConversionGoals = ({ budget,
    handleBudget,
    handleGrossSale,
    targetGrossSale, }) => {
    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    value={budget}
                    onChange={handleBudget}
                    label='Budget'
                    variant='outlined'
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    type="number"
                    value={targetGrossSale}
                    onChange={handleGrossSale}
                    label='Target Gross Sales'
                    variant='outlined'
                    InputProps={{
                        endAdornment: <InputAdornment position="end">$</InputAdornment>,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default BudgetAndConversionGoals;
