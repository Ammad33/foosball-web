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
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import AddMember from './AddMember';
import TeamData from './TeamData';




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

const TeamMembers = [
	{
		name: 'Ben Parker',
		invitationAccepted: false
	},
	{
		name: 'Toby Flenderson',
		invitationAccepted: false
	},

	{
		name: 'Edinson Cavani',
		invitationAccepted: true
	},
	{
		name: 'Bruno Fernandes',
		invitationAccepted: true
	},
]

const Team = () => {
	const history = useHistory();
	const [active, setActive] = useState('ALL');
	const [members, setMembers] = useState(TeamMembers);
	const [addMember, setAddMember] = useState(TeamMembers);
	const [removeMember, setRemoveMember] = useState(TeamMembers);
	const [teamMember, setTeamMember] = useState([]);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [addOpen, setAddOpen] = useState(false);
	const [editOpen, setEditOpen] = useState(false);

	const handleRemoveMember = (index) => {
		debugger;
		const mem = [...members]
		const mem2 = [...TeamMembers]
		mem2.splice(index, 1);
		setMembers(mem2);
	}

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
			) : (
				<div className={styles.TeamInfoContainer}>
						
					{members.map((member,index)=> (
						
						<TeamData 
						TeamMembers ={member}
						index = {index}
						handleRemoveMember = {handleRemoveMember} />
					))
					}
				</div>
				)
			}
		</>
	);
};

export default Team;
