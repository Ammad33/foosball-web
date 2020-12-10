import React, { useState } from 'react';
import { Edit, Search } from 'react-feather';
import styles from './productCategories.module.scss';
import moment from 'moment';
import clsx from 'clsx';
import Chip from '@material-ui/core/Chip';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import EditProduct from './EditProduct';

const ProductCategories = ({ viewBrandProfile }) => {
	const [editOpen, setEditOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [productCategories, setProductCategories] = useState(true);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div
			className={styles.brandInfoContainer}
		>
			<div className={styles.headerContainer}>
				<h1>Product Categories</h1>
				{viewBrandProfile ? (
					""
				) : (<Edit onClick={() => { setEditOpen(true); setAnchorEl(null) }} />)}
			</div>
			<EditProduct open={editOpen} closeAdd={() => setEditOpen(false)} />
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
			{productCategories ? (
				<div className={styles.detailSubContent}>
					<Chip
						size="medium"
						label="Active Lifestyle"
						className={styles.chip}
					// onClick={}
					/>
					<Chip
						size="medium"
						label="Beauty"
						className={styles.chip}

					// onClick={}
					/>
					<Chip
						size="medium"
						label="Clean Editing"
						className={styles.chip}

					// onClick={}
					/>
					<Chip
						size="medium"
						label="Clickable"
						className={styles.chip}
					// onClick={}
					/>
					<Chip
						size="medium"
						label="Clickable"
						className={styles.chip}
					// onClick={}
					/>
					<Chip
						size="medium"
						label="Clickable"
						className={styles.chip}
					// onClick={}
					/>

				</div>
			) : (
					<div className={styles.detailSubContent}>
						<p> Search and select categories that best represent your brand and products.</p>
					</div>
				)}
		</div>
	);
};

export default ProductCategories;
