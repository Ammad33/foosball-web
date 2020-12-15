import React, { useState } from 'react';
import { Dialog, Grid } from '@material-ui/core';
import styles from './AddMember.module.scss';
import TextField from '../../../components/TextField';
import { HelpCircle } from 'react-feather';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TeamData from '../TeamData'

const AddMember = ({ open, closeAdd }) => {
	const [inviteMember, setInviteMember] = useState(	{name: ''});
	const [newMember, setNewMember] = React.useState({
		name: ''
	});
	const filter = createFilterOptions();

	const top100Films = [
	];


	const handleInviteMember = (e,value) => {
		debugger;
		setInviteMember({
			name: value.inputValue
		});
	}

	const [value, setValue] = React.useState(null);
	const [opens, toggleOpen] = React.useState(false);

	const handleClose = () => {
		setDialogValue({
			title: '',
			year: '',
		});

		toggleOpen(false);
	};

	const [dialogValue, setDialogValue] = React.useState({
		title: '',
		year: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		setValue({
			name: dialogValue.title,
		});

		handleClose();
	}

	return (
		<Dialog
			classes={{ paper: styles.addMember }}
			aria-labelledby='confirmation-dialog-title'
			open={open}
			onClose={closeAdd}
		>
			{/* <Dialog open={opens} onClose={handleClose} aria-labelledby="form-dialog-title">
					<form onSubmit={handleSubmit}>
						<DialogTitle id="form-dialog-title">Add a new film</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Did you miss any film in our list? Please, add it!
            </DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								value={dialogValue.title}
								onChange={(event) => setDialogValue({ ...dialogValue, title: event.target.value })}
								label="title"
								type="text"
							/>
							<TextField
								margin="dense"
								id="name"
								value={dialogValue.year}
								onChange={(event) => setDialogValue({ ...dialogValue, year: event.target.value })}
								label="year"
								type="number"
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color="primary">
								Cancel
            </Button>
							<Button type="submit" color="primary">
								Add
            </Button>
						</DialogActions>
					</form>
				</Dialog> */}
			<div className={styles.content}>
				<h6>Add members to your team </h6>
				<Grid item xs={12} >
					<Autocomplete
						value={value}
						onChange={(event, newValue) => {
							if (typeof newValue === 'string') {
								// timeout to avoid instant validation of the dialog's form.
								setTimeout(() => {
									toggleOpen(true);
									setNewMember({
										name: newValue,
									});
								});
							} else if (newValue && newValue.inputValue) {
								toggleOpen(true);
								handleInviteMember(event, newValue);
								setNewMember({
									name: newValue.inputValue,
								});
							} else {
								setValue(newValue);
							}
						}}
						filterOptions={(options, params) => {
							const filtered = filter(options, params);

							if (params.inputValue !== '') {
								filtered.push({
									inputValue: params.inputValue,
									title: `+ "${params.inputValue}"`,
								});
							}

							return filtered;
						}}
						id="free-solo-dialog-demo"
						options={top100Films}
						getOptionLabel={(option) => {
							// e.g value selected with enter, right from the input
							if (typeof option === 'string') {
								return option;
							}
							if (option.inputValue) {
								return option.inputValue;
							}
							return option.title;
						}}
						selectOnFocus
						clearOnBlur
						handleHomeEndKeys
						renderOption={(option) => option.title}
						style={{ width: 750 }}
						freeSolo
						renderInput={(params) => (
							<TextField {...params} label="Free solo dialog" variant="outlined" fullWidth = {true}/>
						)}
					/>
					{/* <TextField
							id='outlined-basic'
							fullWidth
							label='Invite by email'
							variant='outlined'
							// value={newInfluencer.fullName}
							onChange={(e) => handleInviteMember(e.target.value)}
						// helperText={
						// 	newInfluencerError.fullName && (
						// 		<span className={styles.errorText}>Full name is required </span>
						// 	)
						// }
						/> */}
				</Grid>
			</div>
			{inviteMember.name.length > 1 ? (
				<TeamData
					TeamMembers={inviteMember} />
			) : ("")}


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

