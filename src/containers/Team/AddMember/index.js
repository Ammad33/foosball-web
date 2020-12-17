import React, { useState, useContext, useEffect } from 'react';
import { Dialog, Grid } from '@material-ui/core';
import styles from './AddMember.module.scss';
import TextField from '../../../components/TextField';
import { HelpCircle } from 'react-feather';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import SVG from 'react-inlinesvg';
import { RootContext } from '../../../context/RootContext';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import SelectedMembers from './SelectedMembers'
import { API, graphqlOperation } from 'aws-amplify';


const Plus = () => {
	return (
		<SVG src={require('../../../assets/pluslarge.svg')} />
	);
};

const AddMember = ({ open, closeAdd }) => {
	const [inviteMember, setInviteMember] = useState({ name: '' });
	const [newMember, setNewMember] = React.useState({
		name: ''
	});
	const { brands , brandId , roleId } = useContext(RootContext);
	const [data , setData] = useState([]); 
	const filter = createFilterOptions();

	const top100Films = [
	];


	const handleInviteMember = (e, value) => {
		setInviteMember({
			name: value.inputValue
		});
	}

	const [value, setValue] = React.useState(null);


	const getMeData = async () => {
    try {
      const mydata = await API.graphql({
        query: `{
						me {
							id
							organizations {
								organization {
									id
									roles {
										id
									}
								}
							}
						}
				}`,
			});
			// debugger;
      setData(mydata.data.me);
    } catch (e) {
      console.log(e);
    }
  };


	const assignRole = async () => {
		try {
			const data = {
				organizationId: "8ece73cc-3079-4f45-b7bb-4f6007c8344d",
				roleId: "a94b4e45-f72a-4d75-9d31-e4a2cf791775",
				userId: "b9a59121-fd68-434f-a52c-93036203ee26"
			};
			await API.graphql(
				graphqlOperation(
					`mutation assignRole($input: AssignRoleInput!) {
						assignRole(input: $input) 
      }
      `,
					{
						input:data
					}
				)
			);
		} catch (e) {
			console.log('Error in mutation for Invite Member ', e);
		}
	};
	useEffect(() => {
		getMeData();
	}, []);

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
					<Autocomplete
						value={value}
						onChange={(event, newValue) => {
							if (typeof newValue === 'string') {
								// timeout to avoid instant validation of the dialog's form.
								setNewMember({
									name: newValue,
								});
							} else if (newValue && newValue.inputValue) {
								// debugger;
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
							<TextField {...params} label="Invite members" variant="outlined" />
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
				<SelectedMembers
					TeamMembers={inviteMember} />
			) : ("")}
			<div className={styles.footerContainer}>
				<div className={styles.footer} >
					<span onClick={closeAdd}>Cancel</span>
					<div>
						<button onClick={assignRole}>Invite</button>
					</div>
				</div>
			</div>

		</Dialog>
	);

};

export default AddMember;

