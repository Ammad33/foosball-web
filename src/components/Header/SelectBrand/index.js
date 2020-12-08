import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Badge, Grid } from '@material-ui/core';
import styles from './SelectBrand.module.scss';
import SVG from 'react-inlinesvg';
// import MenuBar from '../../containers/MenuBar';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { ChevronUp, ChevronDown } from 'react-feather';
import { RootContext } from '../../../context/RootContext';


const SelectBrand = () => {
	const history = useHistory();

	const {
		setBrandIdd,
		brands,
		brandName,
		setBrandName,
		brandType,
		setBrandType } = useContext(RootContext);


	const [brandDropDown, setBrandDropDown] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setBrandDropDown(true);
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setBrandDropDown(false);
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
					horizontal: 'center',
				}}
				PaperProps={{
					style: { width: '300px', height: '190px' },
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Grid>
					<div className={styles.popOverContainer}>
						{
							brands && brands !== null && brands.map((item, index) => {
								return (<MenuItem key={index} onClick={() => {
									setBrandIdd(item.organization && item.organization.id);
									setBrandName(item.organization && item.organization.name);
									setBrandType(item.organization && item.organization.__typename);
									handleClose();
									// if (history.location.pathname !== '/campaigns') {
									// 	history.push('/')
									// }
									if (item.organization.__typename == "Brand") {
										history.push('/campaigns')
									}
									else { history.push('/influencer') }
								}}>
									<div className={styles.brandContainter}>
										<Avatar
											className={styles.brandImage}
											alt='Profile'
											src={item.organization && item.organization.imageUrl}
										/>
										<span>{item.organization && item.organization.name}</span>
									</div>
								</MenuItem>)
							})
						}
					</div>
				</Grid>
			</Popover>
			<div>
				<div onClick={handleClick} className={styles.brandDropDown}>{brandName && brandName !== '' ? brandName : 'Brand Name'}
					<div className={styles.brandDropDownSVG}>{
						brandDropDown ? (<ChevronUp />) : (<ChevronDown />)}</div>
				</div>
			</div>
		</>
	);
};

export default SelectBrand;
