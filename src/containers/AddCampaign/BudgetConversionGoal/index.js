import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';

import TextField from '../../../components/TextField';

const BudgetAndConversionGoals = ({ handleBudget, handleTargetSales, budget,
    targetSales }) => {
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
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    type="number"
                    value={targetSales}
                    onChange={handleTargetSales}
                    label='Target Gross Sales'
                    variant='outlined'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default BudgetAndConversionGoals;
