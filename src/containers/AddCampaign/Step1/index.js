import React from 'react';
import { Grid, TextField } from '@material-ui/core';


const Step1 = () => {
    return (
        <Grid container spacing={2} style={{ padding: '24px' }}>
            <Grid item md={12}>
                <TextField id="outlined-basic" fullWidth label="Campaign Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" fullWidth label="Start Date" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" fullWidth label="End Date" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" fullWidth label="Start Time" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" fullWidth label="End Time" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" fullWidth label="Promotion Discount" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField id="outlined-basic" fullWidth label="Percentage" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField id="outlined-basic" fullWidth multiline rows={4} placeholder={"Enter a custom message to send with your invitation"} variant="outlined" />
            </Grid>

        </Grid>
    )
};

export default Step1;