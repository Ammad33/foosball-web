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
import { ChevronUp , ChevronDown} from 'react-feather';





// const ChevronDown = () => {
// 	return (
// 		<SVG src={require('../../../assets/chevron-downn.svg')} />
// 	);
// };
// const ChevronUp = () => {
// 	return (
// 		<SVG src={require('../../../assets/chevron-up.svg')} />
// 	);
// };

const SelectBrand = (meData) => {
	const history = useHistory();
	const [brandDropDown, setBrandDropDown] = useState(false);
	const member = [
		{
			id: 1,
			name: 'Ben Parker',
			avatar:
				'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
		},
	];
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
					style: { width: '206px', height: '120px' },
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Grid>
					<div className={styles.popOverContainer}>
						<MenuItem>
							<div className={styles.brandContainter}>
								<Avatar
									className={styles.brandImage}
									alt='Profile'
									src='https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'
								/>
								<span>Brand Name 1 </span>
							</div>
							</MenuItem>
							<MenuItem>
							<div className={styles.brandContainter}>
								<Avatar
									className={styles.brandImage}
									alt='Profile'
									src='https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'
								/>
								<span>Brand Name 2 </span>
							</div>
							</MenuItem>
					</div>
				</Grid>
			</Popover>
			<div>
				<div onClick={handleClick} className={styles.brandDropDown}>Brand Name
						<div className={styles.brandDropDownSVG}>{
							brandDropDown ? (<ChevronUp />) : (<ChevronDown />) }  </div>
				</div>
			</div>
		</>
	);
};

export default SelectBrand;
