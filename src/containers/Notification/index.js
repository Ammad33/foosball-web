import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Badge, Grid } from '@material-ui/core';
import styles from './notifications.module.scss';
import SVG from 'react-inlinesvg';
// import MenuBar from '../../containers/MenuBar';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { RootContext } from './../../context/RootContext';

const notifications = [
	{
		avatar:
			'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		name: 'Good To',
		socialTag: 'miracle',
		description: 'Trendy Womens Clothing and accessories',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
		name: 'Bee',
		socialTag: 'miracle',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		name: 'Thrive Mark',
		socialTag: 'miracle',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
		name: 'Oil Pop',
		socialTag: 'miracle',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
		name: 'Care ',
		socialTag: 'miracle',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		selected: true,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Notification = () => {

	const NotificationIcon = () => {
		return <SVG src={require('../../assets/Notification.svg')} />;
	};
	const history = useHistory();
	const [notificationDropDown, setNotificationDropDown] = useState(false);

	const {
		setCurrentUser,
		setLogoutMessage,
		currentUser,
		activeRoute,
		setActiveRoute,
	} = useContext(RootContext);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setNotificationDropDown(true);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();


	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				PaperProps={{
					style: { width: '378px', height: '770px' },
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				anchorPosition= {{
					top: '20px',
				}}
			>
				<Grid container item xs={12} spacing={3}>
					<div className={styles.Heading}>
						<p> Notifications</p>
					</div>
					<Grid item xs={10}>
						<div className={styles.notificationDay}>
							<p>Today</p>
						</div>
						<div className={styles.NotificationContainer}>
							<div className={styles.NotifcationInfoContainer}>
								<List component="nav" className={classes.root} aria-label="mailbox folders">
									<ListItem button>
										<div className={styles.personInfo}>
											<Avatar
												className={styles.personAvatar}
												src={notifications[0].avatar}
											/>
										</div>
										<span className={styles.BrandName}>{notifications[0].name}
											<div className={styles.BrandDescription}>{notifications[0].description}</div></span>
									</ListItem>
									<Divider style={{ marginTop: "15px" }} />
								</List>
								<List component="nav" className={classes.root} aria-label="mailbox folders">
									<ListItem button>
										<div className={styles.personInfo}>
											<Avatar
												className={styles.personAvatar}
												src={notifications[0].avatar}
											/>
										</div>
										<span className={styles.BrandName}>{notifications[0].name}
											<div className={styles.BrandDescription}>{notifications[0].description}</div></span>
									</ListItem>
									<Divider style={{ marginTop: "15px" }} />
								</List>
								<List component="nav" className={classes.root} aria-label="mailbox folders">
									<ListItem button>
										<div className={styles.personInfo}>
											<Avatar
												className={styles.personAvatar}
												src={notifications[0].avatar}
											/>
										</div>
										<span className={styles.BrandName}>{notifications[0].name}
											<div className={styles.BrandDescription}>{notifications[0].description}</div></span>
									</ListItem>
								</List>
							</div>
						</div>
					</Grid>
					<Grid item xs={10}>
						<div className={styles.notificationDay}>
							<p>Yesterday</p>
						</div>
						<div className={styles.NotificationContainer}>
							<div className={styles.NotifcationInfoContainer}>
								<List component="nav" className={classes.root} aria-label="mailbox folders">
									<ListItem button>
										<div className={styles.personInfo}>
											<Avatar
												className={styles.personAvatar}
												src={notifications[0].avatar}
											/>
										</div>
										<span className={styles.BrandName}>{notifications[0].name}
											<div className={styles.BrandDescription}>{notifications[0].description}</div></span>
									</ListItem>
									<Divider style={{ marginTop: "15px" }} />
								</List>
								<List component="nav" className={classes.root} aria-label="mailbox folders">
									<ListItem button>
										<div className={styles.personInfo}>
											<Avatar
												className={styles.personAvatar}
												src={notifications[0].avatar}
											/>
										</div>
										<span className={styles.BrandName}>{notifications[0].name}
											<div className={styles.BrandDescription}>{notifications[0].description}</div></span>
									</ListItem>
								</List>
							</div>
						</div>
					</Grid>
					<div className={styles.loadMore}>
						<button >Load More</button>
					</div>

				</Grid>
			</Popover>
			<div onClick={handleClick}>
				<NotificationIcon />
			</div>
		</>
	);
};

export default Notification;
