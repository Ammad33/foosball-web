import { Calendar, Clock, AlertCircle } from 'react-feather';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import SelectMenu from '../../../components/SelectMenu';
import styles from './AddCampaignDetail.module.scss';
import { TimePicker } from '@material-ui/pickers';
import mainStyles from '../../../index.module.scss';
import TextField from '../../../components/TextField';


const Chevron = () => {
	return (
		<span className={styles.dropDownCustomizeSvg}>
			<SVG src={require('../../../assets/chevron-down.svg')} />
		</span>
	);
};

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
	campaignError
}) => {

	useEffect(() => {
		filledForm();
		partialFilledForm();
	}, [
		campaignName,
		startDate,
		endDate,
		startTime,
		endTime,
		discount,
		discountType,
		customeMessage
	]);

	useEffect(() => {
		partialFilledForm();
	});


	return (
		<Grid container spacing={2}>
			<Grid item md={12}>
				<TextField
					id='outlined-basic'
					fullWidth
					value={campaignName}
					onChange={handleCampaignName}
					label='Campaign Name'
					className={mainStyles.placeholderColor}
					helperText={campaignError && campaignError !== '' && <span className={styles.errorMessage}>{campaignError}</span>}
					variant='outlined'
					InputProps={{
						endAdornment: (
							campaignError && campaignError !== '' &&
							<InputAdornment className={styles.inputendornment} position='end'>
								<AlertCircle color='#D55656' />
							</InputAdornment>

						),
					}}

				/>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<TextField
					id='outlined-basic'
					fullWidth
					value={startDate}
					defaultValue='12/12/2019'
					onChange={(e) => handleStartDate(e.target.value)}
					label='Start Date'
					className={mainStyles.placeholderColor}
					variant='outlined'
					onBlur={() => {
						console.log('Triggered because this input lost focus');
					}}
					helperText={
						startDateError ? (
							<span className={styles.errorText}> Start Date IN FUTURE </span>
						) : (
								' '
							)
					}
					InputProps={{
						endAdornment: (
							<InputAdornment className={styles.inputendornment} position='end'>
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
						defaultValue='12/12/2019'
						orientation='landscape'
						openTo='date'
						format='MM/dd/yyyy'
						margin='normal'
						onBlur={() => {
							console.log('Triggered because this input lost focus');
						}}
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
					className={mainStyles.placeholderColor}
					onChange={(e) => handleEndDate(e.target.value)}
					variant='outlined'
					helperText={
						endDateError ? (
							<span className={styles.errorText}>
								{' '}
                End date AFTER Start date{' '}
							</span>
						) : (
								' '
							)
					}
					InputProps={{
						endAdornment: (
							<InputAdornment className={styles.inputendornment} position='end'>
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
						orientation='landscape'
						openTo='date'
					/>
				</MuiPickersUtilsProvider>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<TextField
					id='outlined-basic'
					fullWidth
					label='Start Time'
					defaultTime={startTime}
					labelClassName={styles.placeholderColor}
					ampm='true'
					value={startTime}
					onChange={(e) => handleStartTime(e.target.value)}
					variant='outlined'
					helperText={
						startTimeError ? (
							<span className={styles.errorText}> Start Time IN FUTURE </span>
						) : (
								' '
							)
					}
					InputProps={{
						endAdornment: (
							<InputAdornment className={styles.inputendornment} position='end'>
								<Clock onClick={() => handleStartTimeOpen(true)} />
							</InputAdornment>
						),
					}}
				/>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<TimePicker
						className={styles.displayNone}
						open={startTimeOpen}
						value='00.01'
						ampm='true'
						onClose={() => handleStartTimeOpen(false)}
						onChange={handleStartTime}
						orientation='landscape'
						openTo='time'
					/>
				</MuiPickersUtilsProvider>
			</Grid>

			<Grid item xs={12} sm={12} md={6}>
				<TextField
					id='time'
					fullWidth
					label='End Time'
					labelClassName={styles.placeholderColor}
					value={endTime}
					onChange={(e) => handleEndTime(e.target.value)}
					variant='outlined'
					helperText={
						endTimeError ? (
							<span className={styles.errorText}>
								{' '}
                End Time AFTER Start Time{' '}
							</span>
						) : (
								' '
							)
					}
					InputProps={{
						endAdornment: (
							<InputAdornment className={styles.inputendornment} position='end'>
								<Clock onClick={() => handleEndTimeOpen(true)} />
							</InputAdornment>
						),
					}}
				/>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<TimePicker
						className={styles.displayNone}
						open={endTimeOpen}
						value='00.01'
						onClose={() => handleEndTimeOpen(false)}
						onChange={handleEndTime}
						orientation='landscape'
						openTo='time'
					/>
				</MuiPickersUtilsProvider>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						id='Discount Type'
						fullWidth
						label='Discount Type'
						variant='outlined'
						value={discountType}
						className={mainStyles.placeholderColor}
						onChange={(e) => handleDiscountType(e.target.value)}
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>
						<MenuItem value='Discount Type' disabled>
							Discount Type
            </MenuItem>
						<MenuItem value={'Percentage'}>Percentage</MenuItem>
						<MenuItem value={'Amount'}>Amount</MenuItem>
					</TextField>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<TextField
					id='outlined-basic'
					fullWidth
					label='Discount Value'
					className={mainStyles.placeholderColor}
					value={discount}
					onChange={handleDiscount}
					variant='outlined'
					helperText={' '}
				/>
			</Grid>

			{discountType && discountType == "Amount" ? (
				<Grid item xs={12} sm={12} md={12}>
					<TextField
						id='outlined-basic'
						fullWidth
						label='Minimum Cart Value'
						className={mainStyles.placeholderColor}
						// value={discount}
						// onChange={handleDiscount}
						variant='outlined'
						helperText={' '}
					/>
				</Grid>
			) : (
					''
				)}
			<Grid item xs={12} sm={12} md={12}>
				<TextField
					id='outlined-basic'
					fullWidth
					multiline
					value={customeMessage}
					onChange={handleCustomMessage}
					className={mainStyles.placeholderColor}
					rows={4}
					label={'Enter a max 1000 characters to send with your invitation'}
					variant='outlined'
				/>
			</Grid>
		</Grid>
	);
};

export default AddCampaignDetails;
