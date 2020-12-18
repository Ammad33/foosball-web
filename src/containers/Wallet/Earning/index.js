import React, { useState } from 'react';
import styles from './Earning.module.scss';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paperclip, MoreVertical, Archive, Trash } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
import Divider from '@material-ui/core/Divider';
import { ChevronUp, ChevronDown } from 'react-feather';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import BrandEarning from './BrandEarning';
import InfluencerEarning from './InfluencerEarning'



const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
}));

const PlusSVG = () => {
	return <SVG src={require('../../../assets/plus1.svg')} />;
};

const MinusSVG = () => {
	return <SVG src={require('../../../assets/minus1.svg')} />;
};


const Earning = ({ data, handleExpandClick, expanded }) => {
	const classes = useStyles();

	const [filterDropdown, setFilterDropdown] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState('Brand')
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setFilterDropdown(true);
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setFilterDropdown(false);
	};

	const handleFilter = (event) => {
		setSelectedFilter(event.currentTarget.dataset["value"]);
		handleClose();
		console.log(selectedFilter);
	}
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
					style: { width: '100px', height: '100px' },
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Grid>
					<div className={styles.popOverContainer}>
						<MenuItem data-value="brand" onClick={(e) => { handleFilter(e) }}>
							<div className={styles.brandContainter}>
								<span>{"Brand"}</span>
							</div> </MenuItem>
						<MenuItem data-value="influencer" onClick={(e) => { handleFilter(e) }}>
							<div className={styles.brandContainter}>
								<span>{"Influencer"}</span>
							</div> </MenuItem>
					</div>
				</Grid>
			</Popover>

			<div>
				<Grid item xs={6}>
					<div className={styles.walletEarningInfoContainer}>
						<div className={styles.walletEarningContainer}>
							<h1> Your influencer marketing sales this month</h1>
							<div className={styles.chart}> </div>
						</div>
					</div>
				</Grid>
				<div className={styles.dateFilter}>
					<p>
						November 2020
					</p>
					<p>
						<div>
							<div onClick={handleClick} className={styles.brandDropDown}>
								{"Filter by"}
								<div className={styles.brandDropDownSVG}>
									{filterDropdown ? <ChevronUp /> : <ChevronDown />}
								</div>
							</div>
						</div>
					</p>
				</div>
				<div>
					{selectedFilter === 'Brand' ? (
						<BrandEarning data={data}
							handleExpandClick={handleExpandClick}
							expanded={expanded} />
					) : ("")
					}

				</div>
			</div>

		</>
	);
};

export default Earning;
