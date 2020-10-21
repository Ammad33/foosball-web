import React from 'react';
import { Grid, TextField } from '@material-ui/core';


const Step1 = () => {
    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <TextField id="outlined-basic" label="Campaign Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" label="Start Date" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" label="End Date" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" label="Start Time" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" label="End Time" variant="outlined" />
            </Grid>

        </Grid>
    )
};

export default Step1;