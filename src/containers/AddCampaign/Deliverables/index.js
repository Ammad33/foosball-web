import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '../../../components/TextField';
import EventNoteIcon from '@material-ui/icons/EventNote';


const CreateDeliverable = () => {
    return (
        <Grid container item={3} >
            <Grid item xs={12}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    value={startDate}
                    onChange={handleStartDate}
                    label='Start Date'
                    variant='outlined'
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EventNoteIcon ><KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            style={{ display: 'none' }}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        /></EventNoteIcon></InputAdornment>,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default CreateDeliverable;