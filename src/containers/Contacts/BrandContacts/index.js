import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import { Plus, MoreVertical, Mail, Edit, Trash } from 'react-feather';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import AddContact from './AddContact';
import EditContact from './EditContact';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from "@material-ui/core/TableCell";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SVG from 'react-inlinesvg';
import { Facebook, Youtube, Instagram } from 'react-feather';
import { Link } from 'react-router-dom';



const Users = () => {
	return <SVG src={require('../../../assets/users.svg')} />;
};


const TableCell = withStyles({
	root: {
		borderBottom: "none"
	}
})(MuiTableCell);

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto",
		borderRadius: "10px"
	},
	table: {
		minWidth: 650
	}
}));

const Contacts = ({ }) => {


	const [search, setSearch] = useState('');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [influencers, setInfluncers] = useState([]);
	const [addOpen, setAddOpen] = useState(false);
	const [editOpen, setEditOpen] = useState(false);
	const [brandContacts, setBrandContacts] = useState('');
	const classes = useStyles();

	const [newInfluencer, setNewInfluencer] = useState({
		fullName: '',
		instagramHandler: '',
		email: '',
		mobilePhone: '',
	});

	const [newInfluencerError, setNewInfluencerError] = useState({
		fullName: false,
		instagramHandler: false,
		email: false,
		mobilePhone: false,
	});

	const handleNewInfluencerChange = (value, fieldName) => {
		const newInfluner = { ...newInfluencer };
		newInfluner[fieldName] = value;
		const newInflunerError = { ...newInfluencerError };
		if (
			fieldName === 'email' ||
			(fieldName === 'mobilePhone' &&
				newInflunerError[fieldName] === true &&
				value !== '')
		) {
			newInflunerError['mobilePhone'] = false;
			newInflunerError['email'] = false;
			setNewInfluencerError(newInflunerError);
		} else if (newInflunerError[fieldName] === true && value !== '') {
			newInflunerError[fieldName] = false;
			setNewInfluencerError(newInflunerError);
		}
		setNewInfluencer(newInfluner);
	};

	const setNew = () => {
		setNewInfluencer({
			fullName: '',
			instagramHandler: '',
			email: '',
			mobilePhone: '',
		});

		setNewInfluencerError({
			fullName: false,
			instagramHandler: false,
			email: false,
			mobilePhone: false,
		});
	};

	const addNewInfluencer = () => {
		const newInfluencerErrorr = { ...newInfluencerError };
		if (newInfluencer.fullName === '') {
			newInfluencerErrorr.fullName = true;
		}
		if (newInfluencer.instagramHandler === '') {
			newInfluencerErrorr.instagramHandler = true;
		}

		if (newInfluencer.email === '' && newInfluencer.mobilePhone === '') {
			newInfluencerErrorr.email = true;
		}

		if (newInfluencer.email === '' && newInfluencer.mobilePhone === '') {
			newInfluencerErrorr.mobilePhone = true;
		}

		setNewInfluencerError(newInfluencerErrorr);

		if (Object.values(newInfluencerErrorr).includes(true)) {
			return;
		}

		const data = [...influencers];
		data.push(newInfluencer);
		setInfluncers(data);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const closeHandle = () => {
		setAddOpen(false);
		setNew();
	}

	return (
		<div className={styles.contactsContainer}>
			<div className={styles.contactsHeadingContainer}>
				<div className={styles.contactsHeading}>
					<span>Contacts</span>
					<p>
						Alphabetical<ExpandMoreIcon fontSize='small' />
					</p>
				</div>
				<button onClick={() => setAddOpen(true)}>
					<AddIcon /> Add Influencers
							</button>
			</div>
			<div className={styles.contactsBanner}>
				<p className={styles.firstp}>Get 1 free campaign credit</p>
				<p className={styles.secondp}>For every person you invite that joins fomopromo and creates a campaign. <Link to='#' style={{color: "#FFFFFF" ,textDecorationLine: 'underline'}} >Learn more here.</Link></p>
			</div>
			<AddContact
				newInfluencer={newInfluencer}
				handleNewInfluencerChange={handleNewInfluencerChange}
				addNewInfluencer={addNewInfluencer}
				setNew={setNew}
				open={addOpen}
				newInfluencerError={newInfluencerError}
				closeAdd={closeHandle}
			/>
			<EditContact open={editOpen} closeAdd={() => setEditOpen(false)} />
			{/* <div className={styles.inviteContainer}>
                <span onClick={() => setAddOpen(true)} className={styles.inviteSpan}><Plus /> Invite influencers to work with</span>
                <p>When you invite other users to FOMO Promo and they sign up and create a campaign, you can get a credit for one campaign. See more details <span>here</span>.</p>
            </div>
            <div className={styles.searchContainer}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    label=''
                    helperText={" "}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>
                    }}
                    variant='outlined'
                />
            </div> */}
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
					<div className={styles.editDiv} onClick={() => { setEditOpen(true); setAnchorEl(null) }}> <Edit /> <p>Edit </p></div>
					<div className={styles.deleteDiv}> <Trash /> <p>Delete</p></div>
				</div>
			</Popover>
			<Grid container alignItems="center" >
				{/* <Grid item xs={4} className={styles.itemImage}>
                            {i % 2 !== 0 ?
                                <div className={styles.withoutAvatar} >
                                    <Mail />
                                </div> :
                                <Avatar
                                    className={styles.avatar}
                                    src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                                />}
                            <p>
                                Sam O166zkural
                    </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>
                                @samozkural
                    </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>  [...Array(5)].map((_, i) =>
                                samozkural@gmail.com
                    </p>
                        </Grid>
                        <Grid item xs={2} >	
                            <MoreVertical style={{ float: 'right' }} onClick={handleClick} />
                        </Grid> */}
				{brandContacts.length < 1 ? (
					<TableContainer component={Paper} className={classes.root}>
						<div className={styles.tableWrap}>
							<Table aria-label="simple table">
								<TableBody>
									{[...Array(5)].map((_, i) => (
										<>
											<TableRow key={"key"}>
												<TableCell className={styles.firstTableCell}>
													<Avatar
														className={styles.avatar}
														src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
													/> <p className={styles.avatarName}>Care</p></TableCell>
												<TableCell className={styles.avatarName}>Lennie James</TableCell>
												<TableCell className={styles.avatarName}>marketing@gmail.com</TableCell>
												<TableCell className={styles.avatarNameSocial}>
													<div className={styles.instaIcon}>
														<Instagram />
														<p className={styles.instafollowers}>345</p> 
													</div>
												 <span className={styles.ytIcon}>
														<Youtube />
														<div className={styles.ytfollowers}> 456</div>
													</span>
													<span className={styles.fbIcon}>
														<Facebook />
														<div className={styles.influencername}>999</div>
													</span>   
													</TableCell>																					  
												<TableCell align="right" className={styles.avatarName}><MoreVertical onClick={handleClick} /></TableCell>
											</TableRow>
											<TableRow>
												<TableCell>
													<Divider variant="FullWidth" />
												</TableCell>
												<TableCell>
													<Divider variant="FullWidth" />
												</TableCell>
												<TableCell>
													<Divider variant="FullWidth" />
												</TableCell>
												<TableCell>
													<Divider variant="FullWidth" />
												</TableCell>
												<TableCell>
													<Divider variant="FullWidth" />
												</TableCell>
											</TableRow>

										</>
									))}
								</TableBody>
							</Table>
						</div>
					</TableContainer>
				) : (
						<Grid
							container
							spacing={0}
							direction='column'
							alignItems='center'
							justify='center'
							style={{ paddingTop: '15%' }}
						>
							<Grid item xs={12}>
								<Users />
							</Grid>
							<Grid item xs={12}>
								<div className={styles.noCampaignYet}>No Contacts Yet</div>
							</Grid>
							<Grid item xs={12}>
								<div className={styles.noCampaignYetHelper}>
									Invite Brands to FOMO Promo so you can collaborate on campaigns
								</div>
							</Grid>
						</Grid>
					)

				}


			</Grid>


		</div>
	);
}

export default Contacts;