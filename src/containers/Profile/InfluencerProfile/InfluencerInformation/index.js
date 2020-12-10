import React, { useState } from 'react';
import { Edit, Phone } from 'react-feather';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import styles from './InfluencerInformation.module.scss';
import moment from 'moment';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import EditInfluencerInformation from './EditInfluencerInformation';



const Messages = () => {
	return (
		<span >
			<SVG src={require('../../../../assets/Messages.svg')} />
		</span>
	);
};
const Globe = () => {
	return (
		<span >
			<SVG src={require('../../../../assets/globe.svg')} />
		</span>
	);
};

const InfluencerInformation = ({ viewInfluencerProfile }) => {
	const [editOpen, setEditOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClose = () => {
		setAnchorEl(null);
	};
	debugger;

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div className={styles.influencerInfoContainer}>
			<div className={styles.headerContainer}>
				<h1>Influencer Information</h1>
				{viewInfluencerProfile? (
					''
				): (<Edit onClick={() => { setEditOpen(true); setAnchorEl(null) }} />)}
			</div>
			<EditInfluencerInformation open={editOpen} closeAdd={() => setEditOpen(false)} />
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
			</Popover>
			<div className={styles.detailSubContent}>
				<p>Lifestyle and healthy living influencer, CEO of Sam Ozkural Jewelry,Wife and Mother.</p>
			</div>
			<div className={styles.detailSubContent}>
				<div className={styles.svgContainer}>
					<Messages />
					<span style={{ marginLeft: "20px" }} > customerservice@careof.com </span>
				</div>
				<div className={styles.svgContainer}>
					<Globe />
					<span style={{ marginLeft: "20px" }} > www.careof.com </span>
				</div >
				<div className={styles.svgContainer}>
					<Phone />
					<span style={{ marginLeft: "20px" }} > 414-444-888 </span>
				</div>

			</div>


		</div>
	);
};

export default InfluencerInformation;
