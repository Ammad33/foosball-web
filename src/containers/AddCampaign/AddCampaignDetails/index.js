import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import TextField from '../../../components/TextField';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const AddCampaignDetails = ({ handleCampaignName, handleStartDate, handleEndDate,
  campaignName, startDate, endDate, startTime, endTime, discount, percentage, customeMessage,
  handleStartTime, handleEndTime, handlePercentage, handleDiscount,
  handleCustomMessage }) => {
  return (
    <Grid container spacing={4}>
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
              // value={selectedDate}
              // onChange={handleDateChange}
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
          label='End Date'
          value={endDate}
          onChange={handleEndDate}
          variant='outlined'
        />
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
          placeholder={'Enter a custom message to send with your invitation'}
          variant='outlined'
        />
      </Grid>
    </Grid>
  );
};

export default AddCampaignDetails;
