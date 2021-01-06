import React from 'react';
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
			<SVG src={require('../../assets/chevron-downn.svg')} />
		</span>
	);
};

const DeclineModal = ({ open, handleClose, Reason,Reasons, handleReason , message , DialogType }) => {

	return (
		<Dialog
			classes={{ paper: styles.cancel }}
			aria-labelledby='confirmation-dialog-title'
			open={open}
			onClose={handleClose}
		>
			<h6 className= {DialogType == 'stopping'? (styles.StopHeading):('')}>{message}</h6>
			<p>{DialogType == "stopping" ? ("This action will deactivate the microsite"):('')} </p>
			<div>
				<FormControl fullWidth variant='outlined'>
					<TextField
						labelId='demo-simple-select-outlined-label'
						id='Reason for decline'
						fullWidth
						label='Reason for decline*'
						variant='outlined'
						displayEmpty
						// className={mainStyles.placeholderColor}
						// helperText={declineReason == "" ? <span> "Required" </span> : ' '}
						value={Reason }
						onChange={(e) => handleReason(e.target.value)}
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps={{ IconComponent: () => <Chevron /> }}
					>	 {Reasons.map((item) => (
						<MenuItem value={item}>{item}</MenuItem>
					))}
					</TextField>
				</FormControl>
			</div>
			<div className={styles.customMessage}>
				<TextField
					id='outlined-basic'
					fullWidth
					label='Give any further details'
					fullWidth
					variant='outlined'
				/>
			</div>
			<div className={styles.uploadSection}>
				{/* <div className={styles.buttonSection}>
				</div> */}

			</div>
			<div className={styles.footer} >
				<span onClick={handleClose}>Cancel</span>
				<button >Decline</button>
			</div>
		</Dialog>
	);

};

export default DeclineModal;

