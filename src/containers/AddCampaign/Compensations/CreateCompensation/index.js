import React from 'react';
import { Grid, Select } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './CreateCompensation.module.scss';
import { Trash } from 'react-feather';
import clsx from 'clsx';

const CreateCompensation = ({ compensations, handleAnother, index, item, handleCompensationValue,
    handleRemoveCompensation }) => {

    return (
        <Grid container spacing={3} >
            <Grid item xs={12} className={clsx(styles.headerContainer, index > 0 ? styles.marginTop : '')}>
                <p className={styles.headingColor}>Compensation {index + 1}</p>
                {compensations.length > 1 && <Trash onClick={() => handleRemoveCompensation(index)} />}
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Choose Collection"
                        value={item.compensationType}
                        onChange={(e) => {
                            handleCompensationValue(e.target.value, index, 'compensationType')
                            if (e.target.value !== '') {
                                handleAnother()
                            }
                        }}
                        displayEmpty
                        MenuProps={{ variant: "menu" }}
                        input={<SelectMenu />}
                    >
                        <MenuItem value=''>
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
            {item.compensationType !== '' &&
                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        type="number"
                        label='Enter Dollar Amount'
                        variant='outlined'
                        value={item.amount}
                        onChange={(e) => handleCompensationValue(e.target.value, index, 'amount')}
                    />
                </Grid>
            }

        </Grid>
    );
};

export default CreateCompensation;