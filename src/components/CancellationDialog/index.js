import React, { useState } from 'react';
import { Dialog, Select } from '@material-ui/core';
import styles from './CancellationDialog.module.scss';
import TextField from '../TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import SVG from 'react-inlinesvg';

const Chevron = () => {
	return (
		<span className={styles.dropDownCustomizeSvg}>
			<SVG src={require('../../assets/chevron-down.svg')} />
		</span>
	);
};

const CancellationDialog = ({
	open,
	handleClose,
	reason,
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

	const handleButton = () => {
		if (reasonDetail.length < 1) {
			setError(true);
		}
	};
	const handleRequrired = () => {
		if (reason.length < 1) {
			setRequired(true);
		}
	};
	const handleAction = (action) => {
		switch (action) {
			case 'Decline':
				handleDeclineCampaignInvite();	
				break;
			default:
				return '';
		}
	}

	return (
		<Dialog
			classes={{ paper: styles.cancel }}
			aria-labelledby='confirmation-dialog-title'
			open={open}
			onClose={handleClose}
		>
			<h6 className={buttonText == 'Stop' ? styles.StopHeading : ''}>
				{message}
			</h6>
			<p className={styles.note}>
				{buttonText == 'Stop Campaign'
					? 'This action will deactivate the microsite.'
					: ''}{' '}
			</p>
			<div>
				<FormControl fullWidth variant='outlined'>
					<TextField
						labelId='demo-simple-select-outlined-label'
						id='Reason for decline'
						fullWidth
						label={
							buttonText == 'Decline'
								? 'Reason for decline*'
								: buttonText == 'Cancel Campaign'
									? 'Reason for cancellation*'
									: 'Reason for stopping*'
						}
						variant='outlined'
						displayEmpty
						// className={mainStyles.placeholderColor}
						helperText={required ? <span> "Required" </span> : ' '}
						value={reason}
						onChange={(e) => handleReason(e.target.value)}
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps={
							({ IconComponent: () => <Chevron /> },
							{
								MenuProps: {
									anchorOrigin: {
										vertical: 'bottom',
										horizontal: 'left',
									},
									getContentAnchorEl: null,
								},
							})
						}
					>
						{' '}
						{reasons.map((item) => (
							<MenuItem value={item}>{item}</MenuItem>
						))}
					</TextField>
				</FormControl>
			</div>
			<div className={styles.customMessage}>
				<TextField
					id='outlined-basic'
					fullWidth
					label='Enter custom message'
					fullWidth
					variant='outlined'
					value={reasonDetail}
					helperText={error ? <span> "Required" </span> : ' '}
					onChange={(e) => handleReasonDetail(e.target.value)}
				/>
			</div>
			<div className={styles.uploadSection}>
				{/* <div className={styles.buttonSection}>
				</div> */}
			</div>
			<div className={styles.footer}>
				<span onClick={handleClose}>Cancel</span>
				<button
					onClick={() => {
						handleButton();
						handleRequrired();
						handleAction(buttonText);
					}}
				>
					{buttonText}
				</button>
			</div>
		</Dialog>
	);
};

export default CancellationDialog;
