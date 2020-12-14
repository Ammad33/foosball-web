import React, { useState, useEffect, useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import styles from './Team.module.scss';
import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';
import SVG from 'react-inlinesvg';
import { RootContext } from '../../context/RootContext';
import { Plus, MoreVertical, Mail, Edit, Trash } from 'react-feather';
import TextField from '../../components/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import AddMember from './AddMember';



const Xcircle = () => {
	return (
		<SVG src={require('../../assets/x-circle.svg')} />
	);
};


const NoUser = () => {
	return (
		<SVG src={require('../../assets/noUsers.svg')} />
	);
};

const members = [
	{
		name: 'Ben Parker'
	},
	{
		name: 'Toby Flenderson'
	},

	{
		name: 'Edinson Cavani'
	},
	{
		name: 'Bruno Fernandes'
	},
]

const Team = () => {
	const history = useHistory();
	const [active, setActive] = useState('ALL');
	const [addMember, setAddMember] = useState('false');
	const [teamMember, setTeamMember] = useState([]);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [addOpen, setAddOpen] = useState(false);
	const [editOpen, setEditOpen] = useState(false);


	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;


	const handleTeam = () => {

	}
	const closeHandle = () => {
		setAddOpen(false);
	}

	useEffect(() => {

	}, []);


	useEffect(() => {

	}, []);

	return (
		<>
			{/* {addCampaign && (
        <AddCampaign
          open={addCampaign}
          handleCancel={() => setAddCampagin(false)}
          brandId={brandId}
        />
      )} */}
			<AddMember
				open={addOpen}
				closeAdd={closeHandle}
			/>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<div className={styles.popOver}>
					<div className={styles.removeDiv}> <Xcircle /> <p>Remove Member </p></div>
				</div>
			</Popover>
			<div className={styles.TeamContainer}>
				<div className={styles.TeamHeadingContainer}>
					<div className={styles.TeamHeading}>
						<span>Team</span>
					</div>
					<button onClick={() => setAddOpen(true)}>
						<AddIcon /> Add Member
          </button>
				</div>
			</div>

			{teamMember.length === 1 ? (
				<div>
					<div className={styles.noMembers}>
						<Grid alignItems="center">
							<NoUser />
						</Grid>
					</div>
					<div className={styles.noMembersText}>
						<h6>
							No Team Members Yet
									</h6>
						<p>
							Add team or agency members to help you manage campaigns
									</p>
					</div>
				</div>
			) : ("")
			}
			<div className={styles.TeamInfoContainer}>
				<div className={styles.headerContainer}>
					<Grid container alignItems="center">
						{teamMember.length === 0 &&
							members.map((member) => {
								return (
									<>
										<Grid item xs={9} className={styles.itemImage}>
											<Avatar
												className={styles.avatar}
												src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
											/>
											<p>
												{member.name}
											</p>
										</Grid>
										<Grid item xs={2} className={styles.dropdown}>
											<Select
												value={"age"}
												onChange={handleTeam}
												displayEmpty
												// className={classes.selectEmpty}
												inputProps={{ 'aria-label': 'Without label' }}
												variant="outlined"
												fullWidth
												placeholder="Team"
											>
												<MenuItem value="">
													<em>Team</em>
												</MenuItem>
												<MenuItem value="Member">Member</MenuItem>
												<MenuItem value="Creator">Creator</MenuItem>
											</Select>
										</Grid>
										<Grid item xs={1} className={styles.itemImage}>
											<MoreVertical style={{ float: 'right' }} onClick={handleClick} />
										</Grid>
										{/* <Divider className={styles.divider} /> */}
									</>
								)
							}
							)}
					</Grid>

				</div>
			</div>


		</>
	);
};

export default Team;
