import React, {useState} from 'react';
import { Edit } from 'react-feather';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import styles from './BrandInformation.module.scss';
import moment from 'moment';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import EditBrand from './EditBrand';



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

const BrandInformation = ({ handleEdit }) => {
	const [editOpen, setEditOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div className={styles.brandInfoContainer}>
			<div className={styles.headerContainer}>
				<h1>Brand Information</h1>
				<Edit onClick={() => { setEditOpen(true); setAnchorEl(null) }} />
			</div>
			<EditBrand open={editOpen} closeAdd={() => setEditOpen(false)} />
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
					<p>Premium Vitamins and Powders, Tailored to You, Delivered right to your door.</p>
				</div>
				<div className={styles.detailSubContent}>
					<div className={styles.svgContainer}>
						<Messages />
						<span style={{ marginLeft: "10px" }} > customerservice@careof.com </span>
					</div>
					<div className={styles.svgContainer}>
						<Globe />
						<span style={{ marginLeft: "10px" }} > www.careof.com </span>
					</div >
					<div className={styles.svgContainer}>
						<Globe />
						<span style={{ marginLeft: "10px" }} > 414-444-888 </span>
					</div>

				</div>
      
     
    </div>
  );
};

export default BrandInformation;
