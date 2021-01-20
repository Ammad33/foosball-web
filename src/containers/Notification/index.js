import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';
import styles from './notifications.module.scss';
import SVG from 'react-inlinesvg';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { API, graphqlOperation } from 'aws-amplify';
import ShowNotification from './ShowNotification';


// const notifications = [
// 	{
// 		avatar:
// 			'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
// 		name: 'Good To',
// 		socialTag: 'miracle',
// 		description: 'Trendy Womens Clothing and accessories',
// 		selected: false,
// 	},
// 	{
// 		avatar:
// 			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
// 		name: 'Bee',
// 		socialTag: 'miracle',
// 		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
// 		selected: false,
// 	},
// 	{
// 		avatar:
// 			'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
// 		name: 'Thrive Mark',
// 		socialTag: 'miracle',
// 		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
// 		selected: false,
// 	},
// 	{
// 		avatar:
// 			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
// 		name: 'Oil Pop',
// 		socialTag: 'miracle',
// 		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
// 		selected: false,
// 	},
// 	{
// 		avatar:
// 			'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
// 		name: 'Care ',
// 		socialTag: 'miracle',
// 		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
// 		selected: true,
// 	},
// ];

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const NotificationIcon = () => {
	return <SVG src={require('../../assets/Notification.svg')} />;
};

const Notification = () => {
	const [notifications, setNotifications] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		getNotifications();
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();


	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	// useEffect(() => {
	//   getNotifications();
	// }, []);



	const getNotifications = async () => {
		try {
			const notification = await API.graphql({
				query: `{
					notifications {
						notifications {
							brandId
							campaignId
							event
							message
							received
							seen
							sender {
								... on User {
									id
									fullName
								}
								... on Brand {
									id
									name
								}
								... on Influencer {
									id
									name
								}
							}
						}
					}
				}`
			});
			setNotifications(notification.data.notifications.notifications);
		}
		catch (e) {
			console.log('error in notifcations ', e);
		}
	}
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
					style: { width: '378px', height: '780px', marginTop: "22px" },
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
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
							{notifications && notifications !== null && notifications.length !== 0 && (
								notifications.map((item) => {
									return (
										<ShowNotification
											notifications={item} />
									)
								})
							)
							}
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
