import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {
    MuiPickersUtilsProvider, DatePicker
} from '@material-ui/pickers';
import styles from './CreateDeliverable.module.scss';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DateFnsUtils from "@date-io/date-fns";
import { Calendar } from 'react-feather';


const CreateDeliverable = ({ index, handleDilverableContent,
    handleDeliverDeadlineDate, deliverableItem, deliverableDate,
    handleDeliverableDate }) => {

    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <p className={styles.headingColor}>Deliverable {index + 1}</p>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Deliverable Dead Date'
                    variant='outlined'
                    value={deliverableItem && deliverableItem.deliverableDeadDate}
                    onChange={(e) => handleDeliverDeadlineDate(e.target.value, index)}
                    InputProps={{
                        endAdornment: <InputAdornment className={styles.cursorPointer} position="end" onClick={() => handleDeliverableDate(true)}><Calendar /></InputAdornment>,
                    }}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils} className={styles.displayNone} >
                    <DatePicker style={{ display: 'none' }}
                        open={deliverableDate}
                        onChange={(date) => handleDeliverDeadlineDate(date, index)}
                        value={deliverableItem && deliverableItem.deliverableDeadDate}
                        orientation="landscape"
                        openTo="date"
                        format="MM/dd/yyyy"
                        margin="normal"
                        onClose={() => handleDeliverableDate(false)}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Social Platform'
                    variant='outlined'
                    value={deliverableItem && deliverableItem.socialPlatform}
                    onChange={(e) => handleDilverableContent(e.target.value, index, 'socialPlatform')}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Campaign Type'
                    variant='outlined'
                    value={deliverableItem && deliverableItem.campaignType}
                    onChange={(e) => handleDilverableContent(e.target.value, index, 'campaignType')}

                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Frame Type'
                    variant='outlined'
                    value={deliverableItem && deliverableItem.frameType}
                    onChange={(e) => handleDilverableContent(e.target.value, index, 'frameType')}

                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Frame Required'
                    variant='outlined'
                    value={deliverableItem && deliverableItem.frameRequired}
                    onChange={(e) => handleDilverableContent(e.target.value, index, 'frameRequired')}

                />
            </Grid>
            <Grid item xs={12} sm={12} md={8} >
                <Grid container alignItems="center" >
                    <Grid item xs={1} className={styles.optionsItem}>
                        {deliverableItem && deliverableItem.brandTagRequired ? (
                            <CheckCircleIcon
                                onClick={() => handleDilverableContent(!deliverableItem.brandTagRequired, index, 'brandTagRequired')}
                            />
                        ) : (
                                <RadioButtonUncheckedIcon
                                    className={styles.svgDisabled}
                                    onClick={() => handleDilverableContent(!deliverableItem.brandTagRequired, index, 'brandTagRequired')}

                                />
                            )}
                    </Grid>
                    <Grid item xs={4}>
                        <p className={!deliverableItem.brandTagRequired ? styles.disabled : ''}>
                            Brand tag required
                       </p>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id='outlined-basic'
                            fullWidth
                            label='Brand tag'
                            variant='outlined'
                            disabled={!deliverableItem.brandTagRequired}
                            value={deliverableItem && deliverableItem.brandTag}
                            onChange={(e) => handleDilverableContent(e.target.value, index, 'brandTag')}

                        />
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={12} sm={12} md={8} >
                <Grid container alignItems="center" >
                    <Grid item xs={1} className={styles.optionsItem}>
                        {deliverableItem && deliverableItem.hashTagRequired ? (
                            <CheckCircleIcon
                                onClick={() => handleDilverableContent(!deliverableItem.hashTagRequired, index, 'hashTagRequired')}

                            />
                        ) : (
                                <RadioButtonUncheckedIcon
                                    className={styles.svgDisabled}
                                    onClick={() => handleDilverableContent(!deliverableItem.hashTagRequired, index, 'hashTagRequired')}

                                />
                            )}
                    </Grid>
                    <Grid item xs={4}>
                        <p className={!deliverableItem.hashTagRequired ? styles.disabled : ''}>
                            Hashtag requird
                       </p>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id='outlined-basic'
                            fullWidth
                            label='Hashtag'
                            value={deliverableItem && deliverableItem.hashTag}
                            onChange={(e) => handleDilverableContent(e.target.value, index, 'hashTag')}
                            variant='outlined'
                            disabled={!deliverableItem.hashTagRequired}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <p className={styles.headingColor}>Post Frequency</p>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Number of Posts'
                    variant='outlined'
                    value={deliverableItem && deliverableItem.NoPost}
                    onChange={(e) => handleDilverableContent(e.target.value, index, 'NoPost')}

                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Per time period'
                    variant='outlined'
                    value={deliverableItem && deliverableItem.perTimePeriod}
                    onChange={(e) => handleDilverableContent(e.target.value, index, 'perTimePeriod')}

                />
            </Grid>

        </Grid>
    );
};

export default CreateDeliverable;