import React, { useState } from 'react';
import { Grid, Select } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';


const CreateCompensation = ({ handleAnother }) => {
    const [compensationType, setCompensationType] = useState('');
    return (
        <Grid container spacing={3} >

            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Choose Compensation"
                        value={compensationType}
												MenuProps={{variant: "menu"}}
												displayEmpty
                        onChange={(e) => {
                            setCompensationType(e.target.value);
                            if (e.target.value !== '') {
                                handleAnother()
                            }
                        }}
                        input={<SelectMenu />}
                    >
                        <MenuItem value="">
                            Compensation Type
                        </MenuItem>
                        <MenuItem value={'Cash per post'}>Cash per post</MenuItem>
                        <MenuItem value={'Cash per monthly deliverable'}>Cash per monthly deliverable</MenuItem>
                        <MenuItem value={'Revenue Share'}>Revenue Share</MenuItem>
                        <MenuItem value={'Gift Card'}>Gift Card</MenuItem>
                        <MenuItem value={'Products'}>Products</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
            {compensationType !== '' &&
                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Enter Dollar Amount'
                        variant='outlined'
                    />
                </Grid>
            }

        </Grid>
    );
};

export default CreateCompensation;