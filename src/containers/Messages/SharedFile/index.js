import React, { useState } from 'react';
import styles from './SharedFile.module.scss';
import mainStyles from './../../../index.module.scss';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Popover } from '@material-ui/core';
import Image1 from '../../../assets/bottle.png';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Download } from 'react-feather';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';





const SharedFile = ({ }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	const [imageOpen, setImageOpen] = useState(false);
	const [active, setActive] = useState('images');


	const handleClickOpen = () => {
		setImageOpen(true);
	};
	const handleCloseImage = () => {
		setImageOpen(false);
	}

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			<Dialog
				open={imageOpen}
				onClose={handleCloseImage}
				aria-labelledby="responsive-dialog-title"
				contentStyle={{ width: "50%", height: "50%" }}
			>
				<DialogTitle id="responsive-dialog-title" className={styles.dialogTitle}><Download /> <p>Sam Ozkural 10-08  5.38pm</p></DialogTitle>
				<DialogContent >
					<DialogContentText>
						<img
							src={Image1}
							onClick={handleClickOpen}
							className={styles.sharefiles}
							alt="no image"
						/>
					</DialogContentText>
				</DialogContent>
			</Dialog>
			<Grid container spacing={2} style={{ justifyContent: 'center' }}>
				<Grid item xs={10}>
					<div className={styles.sharedFileContainer}>
						<div className={styles.sharedFileContent}>
							<button
								className={active === 'images' ? styles.active : ''}
								onClick={() => {
									setActive('images');
								}}
							>
								Image/Videos
          		</button>
							<button
								className={active === 'other' ? styles.other : ''}
								onClick={() => {
									setActive('other');
								}}>
								Other files</button>
						</div>
						{active === 'images' ? (
							<div className={styles.imagesContainer}>
								{[...Array(16)].map((_, i) => {
									return (
										<img
											src={Image1}
											onClick={handleClickOpen}
											className={styles.sharefiles}
											alt="no image"
										/>
									)
								})}
							</div>
						) : (
								<div className={styles.otherFiles}>
									{[...Array(5)].map((_, i) => {
										return (
											<>
												<List>
													<ListItem>
														<ListItemText
															primary="File Name"
															secondary={'10-30 5.30pm'}
														/>
														<p className={styles.fileSize}> 62kb</p> <span className={styles.downloadIcon}> <Download /> </span>
													</ListItem>
												</List>
												<Divider />
											</>
										)
									})}
								</div>
							)}
					</div>
				</Grid>
			</Grid>
		</>
	)
}

export default SharedFile;
