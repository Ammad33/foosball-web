import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from './Help.module.scss';
import SVG from 'react-inlinesvg';
import Popover from '@material-ui/core/Popover';

const HelpIcon = () => {
	return <SVG src={require('../../../assets/help-circle.svg')} />;
};

const Help = () => {
	const [helpDropDown, setHelpDropDown] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setHelpDropDown(true);
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setHelpDropDown(false);
	};
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
					horizontal: 'left',
				}}
				PaperProps={{
					style: { width: '421px', height: '434px' },
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<Grid>
					<div className={styles.popOverContainer}>

					</div>
				</Grid>
			</Popover>
			<div onClick={handleClick}>
				<HelpIcon />
			</div>
		</>
	);
};

export default Help;
