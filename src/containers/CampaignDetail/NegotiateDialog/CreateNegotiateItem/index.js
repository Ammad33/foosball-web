import React, { useState } from 'react';
import { Grid, InputAdornment, DialogTitle } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './CreateNegotiateItem.module.scss';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import mainStyles from '../../../../index.module.scss';

const options = [];
for (let i = 1; i <= 20; i += 0.5) {
	options.push(i);
}

const CreateNegotiateItem = ({
	item,
	index,
	handleNegotiate,
}) => {
	/**SVG */
	const Chevron = () => {
		return (
			<span className={styles.dropDownCustomizeSvg}>
				<SVG src={require('../../../../assets/chevron-down.svg')} />
			</span>
		);
	};
	return (
		<Grid container spacing={3}>
			<Grid
				item
				xs={12}
				className={clsx(
					styles.headerContainer,
					index > 0 ? styles.marginTop : ''
				)}
			>
				<DialogTitle className={styles.Heading} id='negotiate-dialog-title'>
					<p>Negotiate {index + 1}</p>
				</DialogTitle>
				{/* <p className={styles.headingColor}>Compensation Type </p>
				{compensations.length > 1 && (
					<Trash onClick={() => handleRemoveCompensation(index)} />
				)} */}
			</Grid>
			<Grid item xs={12} className={styles.marginbottomSelect}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						id='Negotiate Item'
						fullWidth
						label='Negotiate Item'
						variant='outlined'
						className={mainStyles.placeholderColor}
						value={item.negotiateItem}
						onChange={(e) => {
							handleNegotiate(
								e.target.value,
								index,
								'Negotiate Item'
							);
							// if (e.target.value !== '') {
							// 	handleAnother();
							// }
						}}
						menuprops={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>
						<MenuItem value='' disabled>
							Negotiate Item
            </MenuItem>
						<MenuItem value={'CASH_PER_POST'}>Cash per post</MenuItem>
						<MenuItem value={'CASH_PER_MONTHLY_DELIVERABLE'}>Cash per monthly deliverable</MenuItem>
						<MenuItem value={'REVENUE_SHARE'}>Revenue Share</MenuItem>
						<MenuItem value={'GIFT_CARD'}>Gift Card</MenuItem>
						<MenuItem value={'PRODUCT'}>Products</MenuItem>
					</TextField>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={12} md={12}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						labelid='demo-simple-select-outlined-label'
						id='message'
						label='Enter Value '
						fullWidth
						variant='outlined'
						className={mainStyles.placeholderColor}
						value={item.negotiateValue}
						onChange={(e) =>
							handleNegotiate(e.target.value, index, 'Negotiate Value')
						}
						MenuProps={{ variant: 'menu' }}
					>
					</TextField>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={12} md={12}>
				<FormControl fullWidth variant='outlined' >
					<TextField
						labelid='demo-simple-select-outlined-label'
						id='message'
						label='Enter Custom Message'
						fullWidth
						rows = {10}
						multiline = {true}
						variant='outlined'
						className= {styles.messageField}
						// className={mainStyles.placeholderColor}
						value={item.negotiateMessage}
						onChange={(e) =>
							handleNegotiate(e.target.value, index, 'Negotiate Message')
						}
						MenuProps={{ variant: 'menu' }}
					>
					</TextField>
				</FormControl>
			</Grid>
		</Grid>
	);
};

export default CreateNegotiateItem;
