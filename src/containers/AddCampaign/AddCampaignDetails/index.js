import { Calendar, Clock } from "react-feather";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Grid, InputAdornment, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import SelectMenu from "../../../components/SelectMenu";
import styles from "./AddCampaignDetail.module.scss";
import moment from "moment";
import { TimePicker } from "@material-ui/pickers";
import mainStyles from '../../../index.module.scss';


import TextField from "../../../components/TextField";






const Chevron = () => {
  return (
    <span className={styles.dropDownCustomizeSvg}>
      <SVG src={require("../../../assets/chevron-downn.svg")} />
    </span>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 510,
	},
	whiteColor: {
    color: "#7e7e7e"
  }
}));

const AddCampaignDetails = ({
  handleCampaignName,
  handleStartDate,
  handleEndDate,
  campaignName,
  startDate,
  startDateError,
  endDate,
  endDateError,
  startTime,
  startTimeError,
  endTime,
  endTimeError,
  discount,
  discountType,
  percentage,
  customeMessage,
  handleStartTime,
  handleEndTime,
  handleDiscountType,
  handleDiscount,
  handleCustomMessage,
  startDateOpen,
  endDateOpen,
  handleStartDateOpen,
  handleEndDateOpen,
  handleStartTimeOpen,
  startTimeOpen,
  endTimeOpen,
  handleEndTimeOpen,
  filledForm,
  partialFilledForm,
}) => {
	const classes = useStyles();


  useEffect(() => {
    filledForm();
  }, [campaignName, startDate, endDate, discount, percentage, customeMessage]);

  useEffect(() => {
    partialFilledForm();
  });

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <TextField
          id="outlined-basic"
          fullWidth
          value={campaignName}
          onChange={handleCampaignName}
          label="Campaign Name"
          className={mainStyles.placeholderColor} 
          helperText={" "}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id="outlined-basic"
          fullWidth
          value={startDate}
          defaultValue="12/12/2019"
          onChange={(e) => handleStartDate(e.target.value)}
          label="Start Date"
          className={mainStyles.placeholderColor}
          variant="outlined"
          helperText={
            startDateError ? (
              <span className={styles.errorText}> Start Date IN FUTURE </span>
            ) : (
              " "
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment className={styles.inputendornment} position="end">
                <Calendar onClick={() => handleStartDateOpen(true)} />
              </InputAdornment>
            ),
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className={styles.displayNone}
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
          id="outlined-basic"
          fullWidth
          label="End Date"
          value={endDate}
          className={mainStyles.placeholderColor}
          onChange={(e) => handleEndDate(e.target.value)}
          variant="outlined"
					helperText={
            endDateError ? (
              <span className={styles.errorText}> End date AFTER Start date </span>
            ) : (
              " "
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment className={styles.inputendornment} position="end">
                <Calendar onClick={() => handleEndDateOpen(true)} />
              </InputAdornment>
            ),
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className={styles.displayNone}
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
          id="outlined-basic"
          fullWidth
          label="Start Time"
          labelClassName={styles.placeholderColor}
          value={startTime}
          onChange={(e) => handleStartTime(e.target.value)}
          variant="outlined"
          helperText={
            startTimeError ? (
              <span className={styles.errorText}> Start Time IN FUTURE </span>
            ) : (
              " "
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment className={styles.inputendornment} position="end">
                <Clock onClick={() => handleStartTimeOpen(true)} />
              </InputAdornment>
            ),
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker
            className={styles.displayNone}
            open={startTimeOpen}
            value={startTime}
            onClose={() => handleStartTimeOpen(false)}
            onChange={handleStartTime}
            orientation="landscape"
            openTo="time"
          />
        </MuiPickersUtilsProvider>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id="time"
          fullWidth
          label="End Time"
          labelClassName={styles.placeholderColor}
          value={endTime}
          onChange={(e) => handleEndTime(e.target.value)}
          variant="outlined"
          helperText={
            endTimeError ? (
              <span className={styles.errorText}>
                {" "}
                End Time AFTER Start Time{" "}
              </span>
            ) : (
              " "
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment className={styles.inputendornment} position="end">
                <Clock onClick={() => handleEndTimeOpen(true)} />
              </InputAdornment>
            ),
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker
            className={styles.displayNone}
            open={endTimeOpen}
            value={endTime}
            onClose={() => handleEndTimeOpen(false)}
            onChange={handleEndTime}
            orientation="landscape"
            openTo="time"
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Promotion Discount"
          className={mainStyles.placeholderColor}
          value={discount}
          onChange={handleDiscount}
          variant="outlined"
          helperText={" "}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <Select
            id="outlined-basic"
            IconComponent={() => <Chevron />}
            fullWidth
            displayEmpty
            value={discountType}
            onChange={(e) => handleDiscountType(e.target.value)}
            variant="outlined"
						MenuProps={{ variant: "menu" }}
						// classes={{
						// 	root: classes.whiteColor,
						// 	icon: classes.whiteColor
						// }}            
						placeholder="Discount Type"
            input={<SelectMenu />}
          >
            <MenuItem value="" disabled  >
              Discount Types
            </MenuItem>
            <MenuItem value={"Percentage"} >Percentage</MenuItem>
            <MenuItem value={"Amount"}>Amount</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          id="outlined-basic"
          fullWidth
          multiline
          value={customeMessage}
          onChange={handleCustomMessage}
          className={mainStyles.placeholderColor}
          rows={4}
          label={"Enter a max 1000 characters to send with your invitation"}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default AddCampaignDetails;
