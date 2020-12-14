import React from 'react';
import { Dialog, Grid } from '@material-ui/core';
import styles from './AddMember.module.scss';
import TextField from '../../../components/TextField';
import { HelpCircle } from 'react-feather';

const AddMember = ({ open, closeAdd}) => {

	return (
		<Dialog
			classes={{ paper: styles.addMember }}
			aria-labelledby='confirmation-dialog-title'
			open={open}
			onClose={closeAdd}
		>
			<div className={styles.content}>
				<h6>Add members to your team </h6>
				<Grid item xs={12} >
					<TextField
						id='outlined-basic'
						fullWidth
						label='Invite by email'
						variant='outlined'
						// value={newInfluencer.fullName}
						// onChange={(e) => handleNewInfluencerChange(e.target.value, 'fullName')}
						// helperText={
						// 	newInfluencerError.fullName && (
						// 		<span className={styles.errorText}>Full name is required </span>
						// 	)
						// }
					/>
				</Grid>

			</div>
			<div className={styles.footer} >
				<span onClick={closeAdd}>Cancel</span>
				<div>
					<button>Invite</button>
				</div>
			</div>

		</Dialog>
	);

};

export default AddMember;

