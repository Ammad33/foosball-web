import React, { useState, useEffect } from 'react';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import TextField from '../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from './AddCampaignDetail.module.scss';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Calendar } from 'react-feather';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 510,
  },
}));

const AddCampaignDetails = ({ handleCampaignName, handleStartDate, handleEndDate,
  campaignName, startDate, endDate, startTime, endTime, discount, discountType, customeMessage,
  handleStartTime, handleEndTime, handleDiscount, handleDiscountType,
  handleCustomMessage, startDateOpen, endDateOpen, handleStartDateOpen, handleEndDateOpen }) => {

  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <TextField
          id='outlined-basic'
          fullWidth
          value={campaignName}
          onChange={handleCampaignName}
          label='Campaign Name'
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>

        <TextField
          id='outlined-basic'
          fullWidth
          value={startDate}
          defaultValue="12/12/2019"
          onChange={(e) => handleStartDate(e.target.value)}
          label='Start Date'
          variant='outlined'
          InputProps={{
            endAdornment: <InputAdornment className={styles.inputendornment} position="end"><Calendar onClick={() => handleStartDateOpen(true)} /></InputAdornment>,
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker className={styles.displayNone}
            open={startDateOpen}
            value={startDate}
            onChange={handleStartDate}
            defaultValue="12/12/2019"
            orientation="landscape"
            openTo="date"
            format="MM/dd/yyyy"
            margin="normal"
            onClose={() => handleStartDateOpen(false)}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>

        <TextField
          id='outlined-basic'
          fullWidth
          label='End Date'
          value={endDate}
          onChange={(e) => handleEndDate(e.target.value)}
          variant='outlined'
          InputProps={{
            endAdornment: <InputAdornment className={styles.inputendornment} position="end"><Calendar onClick={() => handleEndDateOpen(true)} /></InputAdornment>,
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker className={styles.displayNone}
            open={endDateOpen}
            value={endDate}
            onClose={() => handleEndDateOpen(false)}
            onChange={handleEndDate}
            orientation="landscape"
            openTo="date"
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            type="time"
            label="Start Time"
            defaultValue={moment(new Date(), "hmm").format("HH:mm")}
            className={classes.textField}
            onChange={handleStartTime}
            variant='outlined'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            type="time"
            label="End Time"
            defaultValue={moment(new Date(), "hmm").format("HH:mm")}
            className={classes.textField}
            onChange={handleEndTime}
            variant='outlined'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id='outlined-basic'
          fullWidth
          label='Promotion Discount'
          value={discount}
          onChange={(e) => handleDiscount(e)}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <Select
            id='outlined-basic'
            fullWidth
            displayEmpty
            value={discountType}
            onChange={(e) => handleDiscountType(e.target.value)}
            variant='outlined'
            MenuProps={{ variant: "menu" }}
            placeholder="Discount Type"

          >
            <MenuItem value="" disabled>
              Discount Type
							</MenuItem>
            <MenuItem value={'Percentage'}>Percentage</MenuItem>
            <MenuItem value={'Amount'}>Amount</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          id='outlined-basic'
          fullWidth
          multiline
          value={customeMessage}
          onChange={handleCustomMessage}
          rows={4}
          label={'Enter a max 1000 characters to send with your invitation'}
          variant='outlined'
        />
      </Grid>
    </Grid >
  );
};

export default AddCampaignDetails;



