import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import TextField from '../../../components/TextField';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from './AddCampaignDetail.module.scss';

const AddCampaignDetails = ({ handleCampaignName, handleStartDate, handleEndDate,
  campaignName, startDate, endDate, startTime, endTime, discount, percentage, customeMessage,
  handleStartTime, handleEndTime, handlePercentage, handleDiscount,
  handleCustomMessage, startDateOpen, endDateOpen, handleStartDateOpen, handleEndDateOpen }) => {

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
          onChange={(e) => handleStartDate(e.target.value)}
          label='Start Date'
          variant='outlined'
          InputProps={{
            endAdornment: <InputAdornment position="end"><EventNoteIcon className={styles.inputendornment} onClick={() => handleStartDateOpen(true)} ></EventNoteIcon></InputAdornment>,
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker className={styles.displayNone}
            open={startDateOpen}
            value={startDate}
            onChange={handleStartDate}
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
            endAdornment: <InputAdornment position="end"><EventNoteIcon className={styles.inputendornment} onClick={() => handleEndDateOpen(true)} ></EventNoteIcon></InputAdornment>,
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
        <TextField
          id='outlined-basic'
          fullWidth
          label='Start Time'
          value={startTime}
          onChange={handleStartTime}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id='outlined-basic'
          fullWidth
          label='End Time'
          value={endTime}
          onChange={handleEndTime}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id='outlined-basic'
          fullWidth
          label='Promotion Discount'
          value={discount}
          onChange={handleDiscount}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id='outlined-basic'
          fullWidth
          label='Percentage'
          value={percentage}
          onChange={handlePercentage}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          id='outlined-basic'
          fullWidth
          multiline
          value={customeMessage}
          onChange={handleCustomMessage}
          rows={4}
          label={'Enter a custom message to send with your invitation'}
          variant='outlined'
        />
      </Grid>
    </Grid >
  );
};

export default AddCampaignDetails;
