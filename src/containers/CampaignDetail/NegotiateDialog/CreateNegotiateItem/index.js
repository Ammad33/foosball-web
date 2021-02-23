import React, {  useState } from 'react';
import { Grid,  InputAdornment } from '@material-ui/core';
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
	compensations,
	handleAnother,
	index,
	item,
	handleCompensationValue,
	handleRemoveCompensation,
	compensationProduct,
	handleCompensationProducts,
	compensationProductItems,
	compensationProducts,
	handleCollectionExpand,
	handleActiveForCompensationProduct,
	handleCompensationProductItem,
	giftCode,
	handleGiftCode,
	products
}) => {
	/**SVG */
	const Chevron = () => {
		return (
			<span onClick={onClick} {...other} className={styles.dropDownCustomizeSvg}>
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
				<p className={styles.headingColor}>Compensation Type {index + 1}</p>
				{compensations.length > 1 && (
					<Trash onClick={() => handleRemoveCompensation(index)} />
				)}
			</Grid>
			<Grid item xs={12} className={styles.marginbottomSelect}>
				<FormControl fullWidth variant='outlined'>
					<TextField
						id='Compensation Type'
						fullWidth
						label='Compensation Type'
						variant='outlined'
						className={mainStyles.placeholderColor}
						value={item.compensationType}
						onChange={(e) => {
							handleCompensationValue(
								e.target.value,
								index,
								'compensationType'
							);
							if (e.target.value !== '') {
								handleAnother();
							}
						}}
						menuprops={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron MenuId="open" Check="open" />, open: open, onClose: () => { setOpen(false) }, onOpen: () => { setOpen(true) } }}
					>
						<MenuItem value='' disabled>
							Compensation Type
            </MenuItem>
						<MenuItem value={'CASH_PER_POST'}>Cash per post</MenuItem>
						<MenuItem value={'CASH_PER_MONTHLY_DELIVERABLE'}>Cash per monthly deliverable</MenuItem>
						<MenuItem value={'REVENUE_SHARE'}>Revenue Share</MenuItem>
						<MenuItem value={'GIFT_CARD'}>Gift Card</MenuItem>
						<MenuItem value={'PRODUCT'}>Products</MenuItem>
					</TextField>
				</FormControl>
			</Grid>

			{item.compensationType !== '' && item.compensationType !== 'REVENUE_SHARE' && item.compensationType !== 'GIFT_CARD' &&
				item.compensationType !== 'PRODUCT' &&
				(
					<Grid item xs={12} sm={12} md={12}>
						<TextField
							id='outlined-basic'
							fullWidth
							label='Enter Amount'
							variant='outlined'
							value={item.amount}
							onChange={(e) =>
								handleCompensationValue(e.target.value, index, 'amount')
							}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>$</InputAdornment>
								),
							}}
						/>
					</Grid>
				)}
			{item.compensationType === 'REVENUE_SHARE' && (
				<Grid item xs={12} sm={12} md={12}>
					<FormControl fullWidth variant='outlined'>
						<TextField
							labelid='demo-simple-select-outlined-label'
							id='revenue'
							label='Enter Revenue Share'
							fullWidth
							variant='outlined'
							className={mainStyles.placeholderColor}
							value={item.amount}
							onChange={(e) =>
								handleCompensationValue(e.target.value, index, 'Revenue share amount')
							}
							MenuProps={{ variant: 'menu' }}
							select
							SelectProps={{ IconComponent: () => <Chevron MenuId="open1" Check="open1" />, open: open1, onClose: () => { setOpen1(false) }, onOpen: () => { setOpen1(true) } }}
						>
							<MenuItem value='' disabled>
								Select revenue share percentage
              </MenuItem>
							{options.map((option) => (
								<MenuItem key={option} value={option}>
									{option} %
								</MenuItem>
							))}
						</TextField>
					</FormControl>
				</Grid>
			)}
			{item.compensationType === 'GIFT_CARD' &&
				<Grid item xs={12} sm={12} md={12}>
					<TextField
						className={styles.marginbottomSelect}
						id='outlined-basic123'
						fullWidth
						label='Enter Amount'
						variant='outlined'
						value={item.amount}
						onChange={(e) =>
							handleCompensationValue(e.target.value, index, 'amount')
						}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>$</InputAdornment>
							),
						}}
					/>
					<TextField
						id='outlined-basic'
						fullWidth
						label='Paste gift card code'
						variant='outlined'
						value={giftCode}
						className={styles.giftCard}
						onChange={handleGiftCode}
					/>
				</Grid>
			}
			{item.compensationType === 'PRODUCT' && (
				<Grid item xs={12} sm={12} md={12}>
					<Collection
						collection={compensationProduct}
						handleCollection={handleCompensationProducts}
						handleCollectionItem={handleCompensationProductItem}
						collectionItems={compensationProductItems}
						collections={compensationProducts}
						products={products}
						handleCollectionExpand={handleCollectionExpand}
						handleActiveForCollection={handleActiveForCompensationProduct}
					/>
				</Grid>
			)}
		</Grid>
	);
};

export default CreateNegotiateItem;
