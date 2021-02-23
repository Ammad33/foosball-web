import React, { useState } from 'react';
import { Grid, Dialog, Select, DialogTitle } from '@material-ui/core';
import styles from './NegotiateDialog.module.scss';
import TextField from '../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import SVG from 'react-inlinesvg';
import { Plus } from 'react-feather';

const Chevron = () => {
	return (
		<span className={styles.dropDownCustomizeSvg}>
			<SVG src={require('../../../assets/chevron-down.svg')} />
		</span>
	);
};
const options = [];
for (let i = 1; i <= 20; i += 0.5) {
	options.push(i);
}

const NegotiateDialog = ({
	open,
	handleClose,
	negotiateItems,
	negotiateItem,
	handleNegotiateItem,
	handleAnotherItem,
	reasons,
	handleReason,
	message,
	buttonText,
	handleReasonDetail,
	reasonDetail,
	handleDeclineCampaignInvite
}) => {
	const [error, setError] = useState(false);
	const [required, setRequired] = useState(false);

	// const handleButton = () => {
	// 	if (reasonDetail.length < 1) {
	// 		setError(true);
	// 	}
	// };
	// const handleRequrired = () => {
	// 	if (reason.length < 1) {
	// 		setRequired(true);
	// 	}
	// };
	// const handleAction = (action) => {
	// 	switch (action) {
	// 		case 'Decline':
	// 			handleDeclineCampaignInvite();	
	// 			break;
	// 		default:
	// 			return '';
	// 	}
	// }

	return (
		<Dialog
			classes={{ paper: styles.negotiate }}
			aria-labelledby='confirmation-dialog-title'
			open={open}
			onClose={handleClose}
		>
			<DialogTitle className={styles.Heading} id='negotiate-dialog-title'>
				<p>Negotiate</p>
			</DialogTitle>
			<div>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={12}>
						<FormControl fullWidth variant='outlined'>
							<TextField
								className="negotiateItemField"
								labelId='demo-simple-select-outlined-label'
								id='Negotiate item'
								fullWidth
								label="Negotiate Item"
								variant='outlined'
								displayEmpty
								// className={mainStyles.placeholderColor}
								// helperText={required ? <span> "Required" </span> : ' '}
								value={negotiateItem}
								onChange={(e) => handleNegotiateItem(e.target.value)}
								MenuProps={{ variant: 'menu' }}
								select
								SelectProps={{ IconComponent: () => <Chevron /> }}
							>
								{' '}
								{negotiateItems.map((item) => (
									<MenuItem value={item}>{item}</MenuItem>
								))}
							</TextField>
						</FormControl>
					</Grid>
					{negotiateItem === 'Revenue Share' ? (
						<>
							<Grid item xs={12} sm={12} md={12}>
								<FormControl fullWidth variant='outlined'>
									<TextField
										labelid='demo-simple-select-outlined-label'
										id='revenue'
										label='Select Revenue Share Percentage'
										fullWidth
										variant='outlined'
										// className={mainStyles.placeholderColor}
										// value={revenueShare}
										// onChange={(e) =>
										// 	handleCompensationValue(e.target.value, index, 'Revenue share amount')
										// }
										MenuProps={{ variant: 'menu' }}
										select
										SelectProps={{ IconComponent: () => <Chevron /> }}
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
							<Grid item xs={12} sm={12} md={12} className={styles.customMessage}>
								<TextField
									id='outlined-basic'
									fullWidth
									label='Enter custom message'
									fullWidth
									variant='outlined'
									// value={reasonDetail}
									helperText={error ? <span> "Required" </span> : ' '}
								// onChange={(e) => handleReasonDetail(e.target.value)}
								/>
							</Grid>
							<div className={styles.addMore} onClick= {handleAnotherItem}>
								<Plus />
								<p>Negotiate another item</p>
							</div>
						</>
					) : ("")}
				</Grid>

			</div>
			<div className={styles.footer}>
				<span onClick={handleClose}>Cancel</span>
				<button
					onClick={() => {
						// handleButton();
						// handleRequrired();
						// handleAction(buttonText);
					}}
				>
					Send to Brand
				</button>
			</div>
		</Dialog>
	);
};

export default NegotiateDialog;
