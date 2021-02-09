import React, { useState, useEffect } from 'react';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import styles from './CreateDeliverable.module.scss';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DateFnsUtils from '@date-io/date-fns';
import { Calendar } from 'react-feather';
import { Trash } from 'react-feather';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import mainStyles from '../../../../index.module.scss';
import moment from 'moment';

const Chevron = () => {
	return (
		<span className={styles.dropDownCustomizeSvg} >
			<SVG src={require('../../../../assets/chevron-down.svg')} />
		</span>
	);
};
const frames = [];
for (let i = 1; i <= 15; i += 1) {
	frames.push(i);
}

const CreateDeliverable = ({
	index,
	deliveries,
	handleDilverableContent,
	handleDeliverDeadlineDate,
	deliverableItem,
	deliverableDate,
	handleDeliverableDate,
	handleRemoveDeliverable,
	deliverableDeadlineDateError,
	fb,
	insta,
	tictock,
	youtube,
}) => {
	const [error, setError] = useState(false);
	const [post, setPost] = useState(false);
	const [options, setOptions] = useState(false);
	const [platform, setPlatform] = useState({
		postType: ['Does not apply'],
		frameContentType: ['Does not apply'],
	});

	/**to set the platform**/
	useEffect(() => {
		handleSetValue();
	}, [deliverableItem.platform]);

	/**handleDeliverDeadlineDate **/
	useEffect(() => {
		handleDeliverDeadlineDate("12/13/2021",index);
	}, []);

	/**{function} to handle post type */
	const handlePostType = (value, index, name) => {
		if (value === 'Post') {
			setPost(true);
			handleDilverableContent(value, index, name);
		} else {
			setPost(false);
			handleDilverableContent(value, index, name);
		}
	};

		/**{function} to handle social platform */
	const handleSocialPlatform = (value, index, name) => {
		if (value === 'Youtube') {
			setOptions(true);
			setPost(true);
			handleDilverableContent(value, index, name);
		} else if (value === 'Tiktok') {
			setOptions(true);
			setPost(true);
			handleDilverableContent(value, index, name);
		} else {
			setOptions(false);
			handleDilverableContent(value, index, name);
		}
	};
	/**{function} to handle platform */
	const handleSetValue = () => {

		switch (deliverableItem.platform) {
			case 'Youtube':
				setPlatform(youtube);
				break;
			case 'Instagram':
				setPlatform(insta);
				break;
			case 'Tiktok':
				setPlatform(tictock);
				break;
			case 'Facebook':
				setPlatform(fb);
				break;
		}
	};

	return (
		<Grid container spacing={2}>
			<Grid
				item
				xs={12}
				className={clsx(
					styles.headerContainer,
					index > 0 ? styles.marginTop : ''
				)}
			>
				<p className={styles.headingColor}>Deliverable {index + 1} </p>
				{deliveries.length > 1 && (
					<Trash onClick={() => handleRemoveDeliverable(index)} />
				)}
			</Grid>
			<Grid item xs={12} style={{ display: 'none' }}>
				<TextField
					id='outlined-basic'
					fullWidth
					label='Deliverable Deadline Date'
					variant='outlined'
					className={mainStyles.placeholderColor}
					helperText={
						deliverableDeadlineDateError ? (
							<span className={styles.errorText}>Deliverable Date Must Between Start and End Date of Campaign</span>
						) : (
								' '
							)
					}
					value={deliverableItem && deliverableItem.deadlineDate}					
					onChange={(e) => handleDeliverDeadlineDate(e.target.value, index)}
					InputProps={{
						pattern: "\d{1,2}/\d{1,2}/\d{4}",
						endAdornment: (
							<InputAdornment
								className={styles.cursorPointer}
								position='end'
								onClick={() => handleDeliverableDate(true)}
							>
								<Calendar />
							</InputAdornment>
						),
					}}
				/>
				<MuiPickersUtilsProvider
					utils={DateFnsUtils}
					className={styles.displayNone}
				>
					<DatePicker
						style={{ display: 'none' }}
						open={deliverableDate}
						onChange={(date) => handleDeliverDeadlineDate(date, index)}
						value={deliverableItem && deliverableItem.deadlineDate}
						orientation='landscape'
						openTo='date'
						format='MM/dd/yyyy'
						margin='normal'
						onClose={() => handleDeliverableDate(false)}
					/>
				</MuiPickersUtilsProvider>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						id='Social Platform'
						fullWidth
						label='Social Platform'
						variant='outlined'
						value={deliverableItem.platform}
						className={mainStyles.placeholderColor}
						helperText={error ? <span> error </span> : ' '}
						onChange={(e) =>
							handleSocialPlatform(e.target.value, index, 'platform')
						}
						MenuProps={{ variant: 'menu' }}
						// input={<SelectMenu />}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>
						<MenuItem value='' disabled>
							Social Platform
            </MenuItem>
						<MenuItem value={'Instagram'}>Instagram </MenuItem>
						<MenuItem value={'Facebook'}>Facebook </MenuItem>
						<MenuItem value={'Youtube'}>YouTube</MenuItem>
						<MenuItem value={'Tiktok'}>TikTok</MenuItem>
					</TextField>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={12} md={6} className={styles.marginbottomSelect}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						id='Post Type'
						fullWidth
						label='Post Type'
						variant='outlined'
						disabled={options ? true : false}
						className={mainStyles.placeholderColor}
						helperText={error ? <span> error </span> : ' '}
						value={deliverableItem && deliverableItem.postType}
						onChange={(e) =>
							handlePostType(e.target.value, index, 'postType')
						}
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>
						<MenuItem value='' disabled>
							Post Type
            </MenuItem>
						{platform.postType.map((item) => (
							<MenuItem value={item}>{item} </MenuItem>
						))}
					</TextField>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						disabled={options ? true : false}
						labelId='demo-simple-select-outlined-label'
						id='Content Type'
						fullWidth
						label='Content Type'
						variant='outlined'
						displayEmpty
						className={mainStyles.placeholderColor}
						helperText={error ? <span> error </span> : ' '}
						value={deliverableItem && deliverableItem.frameContentType}
						onChange={(e) =>
							handleDilverableContent(e.target.value, index, 'frameContentType')
						}
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>
						<MenuItem value='' disabled>
							Content Type
            </MenuItem>
						{platform.frameContentType.map((item) => (
							<MenuItem value={item}>{item} </MenuItem>
						))}
					</TextField>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={12} md={6} className={styles.marginbottom}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						disabled={post || deliverableItem.platform.toLowerCase() === 'youtube' || deliverableItem.platform.toLowerCase() === 'tiktok' ? true : false}
						labelId='demo-simple-select-disabled-label'
						id='demo-simple-select-disabled-Frame-Required'
						fullWidth
						label='Frames Required'
						variant='outlined'
						className={mainStyles.placeholderColor}
						helperText={error ? <span> error </span> : ' '}
						value={deliverableItem && deliverableItem.framesRequired}
						onChange={(e) =>
							handleDilverableContent(e.target.value, index, 'framesRequired')
						}
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>
						<MenuItem value='' disabled>
							Frame Required
                  </MenuItem>
						{frames.map((frame) => (
							<MenuItem key={frame} value={frame}>
								{frame}
							</MenuItem>
						))}
					</TextField>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={12} md={8}>
				<Grid container alignItems='center' className={styles.marginbottom}>
					<Grid item xs={1} className={styles.optionsItem}>
						{deliverableItem && deliverableItem.brandTagRequired ? (
							<CheckCircleIcon
								onClick={() => {
									handleDilverableContent(
										!deliverableItem.brandTagRequired,
										index,
										'brandTagRequired'
									);
									handleDilverableContent('', index, 'brandTag');
								}}
							/>
						) : (
								<RadioButtonUncheckedIcon
									className={styles.svgDisabled}
									onClick={() =>
										handleDilverableContent(
											!deliverableItem.brandTagRequired,
											index,
											'brandTagRequired'
										)
									}
								/>
							)}
					</Grid>
					<Grid item xs={4}>
						<p
							className={
								!deliverableItem.brandTagRequired ? styles.disabled : ''
							}
						>
							Brand tag required
            </p>
					</Grid>
					<Grid item xs={7}>
						<TextField
							id='outlined-basic'
							fullWidth
							label='Brand tag'
							variant='outlined'
							className={mainStyles.placeholderColor}
							disabled={!deliverableItem.brandTagRequired}
							value={deliverableItem && deliverableItem.brandTag}
							onChange={(e) =>
								handleDilverableContent(e.target.value, index, 'brandTag')
							}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>@</InputAdornment>
								),
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={12} md={8}>
				<Grid container alignItems='center'>
					<Grid item xs={1} className={styles.optionsItem}>
						{deliverableItem && deliverableItem.hashTagRequired ? (
							<CheckCircleIcon
								onClick={() => {
									handleDilverableContent(
										!deliverableItem.hashTagRequired,
										index,
										'hashTagRequired'
									);
									handleDilverableContent('', index, 'hashTag');
								}}
							/>
						) : (
								<RadioButtonUncheckedIcon
									className={styles.svgDisabled}
									onClick={() =>
										handleDilverableContent(
											!deliverableItem.hashTagRequired,
											index,
											'hashTagRequired'
										)
									}
								/>
							)}
					</Grid>
					<Grid item xs={4}>
						<p
							className={
								!deliverableItem.hashTagRequired ? styles.disabled : ''
							}
						>
							Hashtag required
            </p>
					</Grid>
					<Grid item xs={7}>
						<TextField
							id='outlined-basic'
							fullWidth
							label='Hashtag'
							className={mainStyles.placeholderColor}
							value={deliverableItem && deliverableItem.hashTag}
							onChange={(e) =>
								handleDilverableContent(e.target.value, index, 'hashTag')
							}
							variant='outlined'
							disabled={!deliverableItem.hashTagRequired}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>#</InputAdornment>
								),
							}}
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
					type='number'
					label='Number of Posts'
					helperText={error ? <span> error </span> : ' '}
					className={mainStyles.placeholderColor}
					variant='outlined'
					value={deliverableItem && deliverableItem.posts}
					onChange={(e) =>
						handleDilverableContent(e.target.value, index, 'posts')
					}
				/>
			</Grid>

			<Grid item xs={12} sm={12} md={6}>
				<FormControl fullWidth variant='outlined'>
					{/* <Select
						id='outlined-basic'
						fullWidth
						label='Per time period'
						variant='outlined'
						helperText={error ? <span> error </span> : ' '}
						value={deliverableItem && deliverableItem.frequency}
						onChange={(e) =>
							handleDilverableContent(e.target.value, index, 'frequency')
						}
						displayEmpty
						IconComponent={() => <Chevron />}
						MenuProps={{ variant: 'menu' }}
						input={<SelectMenu />}
					>
						<MenuItem value='' disabled>
							Per Time Period
            </MenuItem>
						<MenuItem value={'MONTH'}> Every Month </MenuItem>
						<MenuItem value={'BI_MONTHLY'}>Every other month </MenuItem>
						<MenuItem value={'WEEK'}>Every Week </MenuItem>
						<MenuItem value={'BI_WEEKLY'}>Every other week </MenuItem>
					</Select> */}
					<TextField
						id='Per time period'
						fullWidth
						label='Per time period'
						variant='outlined'
						value={deliverableItem && deliverableItem.frequency}
						className={mainStyles.placeholderColor}
						onChange={(e) =>
							handleDilverableContent(e.target.value, index, 'frequency')
						}
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>
						<MenuItem value='' disabled>
							Per Time Period
            </MenuItem>
						<MenuItem value={'MONTH'}> Every Month </MenuItem>
						<MenuItem value={'BI_MONTHLY'}>Every other month </MenuItem>
						<MenuItem value={'WEEK'}>Every Week </MenuItem>
						<MenuItem value={'BI_WEEKLY'}>Every other week </MenuItem>
					</TextField>
				</FormControl>
			</Grid>
		</Grid>
	);
};

export default CreateDeliverable;
