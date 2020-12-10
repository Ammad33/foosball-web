import React, { useState } from 'react';
import { Edit, Search } from 'react-feather';
import styles from './InfluencerCategories.module.scss';
import moment from 'moment';
import clsx from 'clsx';
import Chip from '@material-ui/core/Chip';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import EditInfluencerCategories from './EditInfluencerCategories';

const InfluencerCategories = ({ viewInfluencerProfile }) => {
	const [editOpen, setEditOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div
			className={styles.influencerInfoContainer}
		>
			<div className={styles.headerContainer}>
				<h1>Influencing Categories</h1>
				{viewInfluencerProfile ? (
					''
				) : (<Edit onClick={() => { setEditOpen(true); setAnchorEl(null) }} />)}
			</div>
			<EditInfluencerCategories open={editOpen} closeAdd={() => setEditOpen(false)} />
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
				<Chip
					size="medium"
					label="Active Lifestyle"
					className={styles.Lifestyle}
				// onClick={}
				/>
				<Chip
					size="medium"
					label="Beauty"
					className={styles.Beauty}

				// onClick={}
				/>
				<Chip
					size="medium"
					label="Clean Editing"
					className={styles.Editing}

				// onClick={}
				/>
				<Chip
					size="medium"
					label="Fitness"
					className={styles.Fitness}
				// onClick={}
				/>
				<Chip
					size="medium"
					label="Healthy Living"
					className={styles.Living}
				// onClick={}
				/>
			</div>
		</div>
	);
};

export default InfluencerCategories;
