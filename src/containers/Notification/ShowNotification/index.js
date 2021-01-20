import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';
import styles from './showNotification.module.scss';
import SVG from 'react-inlinesvg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import { API, graphqlOperation } from 'aws-amplify';


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

const ShowNotification = ({ notifications }) => {
	const classes = useStyles();
	return (
		<>
			<div className={styles.NotifcationInfoContainer}>
				<List component="nav" className={classes.root} aria-label="mailbox folders">
					<ListItem button>
						<div className={styles.personInfo}>
							<Avatar
								className={styles.personAvatar}
							/>
						</div>
						<div className={styles.notificationContent}>
							<div>
								<span className={styles.BrandName}>{notifications.sender.name} </span>
								<span className={styles.notificationTime}>{moment(notifications.received).format("HH:mm A")}  </span>
							</div>
							<div className={styles.BrandDescription}>{notifications.message}</div>
						</div>
					</ListItem>
					<Divider style={{ marginTop: "15px" }} />
				</List>
			</div>
		</>
	);
};

export default ShowNotification;
