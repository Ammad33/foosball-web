import React, { useState } from 'react';
import { Grid, Select } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';

const CreateCompensation = ({ handleAnother }) => {
    const [compensationType, setCompensationType] = useState('');
    return (
        <Grid container spacing={3} >

            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Choose Collection"
                        value={compensationType}
                        native
                        onChange={(e) => {
                            setCompensationType(e.target.value);
                            if (e.target.value !== '') {
                                handleAnother()
                            }
                        }}
                        input={<SelectMenu />}
                    >
                        <option value="">
                            Compensation Type
                        </option>
                        <option value={'Cash per post'}>Cash per post</option>
                        <option value={'Cash per monthly deliverable'}>Cash per monthly deliverable</option>
                        <option value={'Revenue Share'}>Revenue Share</option>
                        <option value={'Gift Card'}>Gift Card</option>
                        <option value={'Products'}>Products</option>
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