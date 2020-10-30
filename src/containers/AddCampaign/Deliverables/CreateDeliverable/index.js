import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import styles from './CreateDeliverable.module.scss';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const CreateDeliverable = () => {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    // value={startDate}
                    // onChange={handleStartDate}
                    label='Deliverable Dead Date'
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
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Social Platform'
                    // value={endDate}
                    // onChange={handleEndDate}
                    variant='outlined'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Campaign Type'
                    // value={startTime}
                    // onChange={handleStartTime}
                    variant='outlined'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Frame Type'
                    // value={endDate}
                    // onChange={handleEndDate}
                    variant='outlined'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Frame Required'
                    variant='outlined'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={8} >
                <Grid container alignItems="center" >
                    <Grid item xs={1} className={styles.optionsItem}>
                        {true ? (
                            <CheckCircleIcon
                                onClick={() => {
                                    // toggleOption(option);
                                }}
                            />
                        ) : (
                                <RadioButtonUncheckedIcon
                                    onClick={() => {
                                        // toggleOption(option);
                                    }}
                                />
                            )}
                    </Grid>
                    <Grid item xs={4}>
                        <p>
                            Brand tag required
                       </p>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id='outlined-basic'
                            fullWidth
                            label='Brand tag'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>



            </Grid>
            <Grid item xs={12} sm={12} md={8} >
                <Grid container alignItems="center" >
                    <Grid item xs={1} className={styles.optionsItem}>
                        {true ? (
                            <CheckCircleIcon
                                onClick={() => {
                                    // toggleOption(option);
                                }}
                            />
                        ) : (
                                <RadioButtonUncheckedIcon
                                    onClick={() => {
                                        // toggleOption(option);
                                    }}
                                />
                            )}
                    </Grid>
                    <Grid item xs={4}>
                        <p>
                            Hashtag requird
                       </p>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id='outlined-basic'
                            fullWidth
                            label='Hashtag'
                            // value={endDate}
                            // onChange={handleEndDate}
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CreateDeliverable;