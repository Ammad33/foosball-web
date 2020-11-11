import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import TextField from '../../../components/TextField';

const BudgetAndConversionGoals = ({ budget,
    handleBudget,
    handleGrossSale,
    targetGrossSale, setActiveForBudget }) => {

    useEffect(() => {
        setActiveForBudget()
    }, [budget, targetGrossSale])
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
                />
            </Grid>
        </Grid>
    );
};

export default BudgetAndConversionGoals;
