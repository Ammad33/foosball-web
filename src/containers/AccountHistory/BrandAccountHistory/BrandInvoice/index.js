import React, { useState } from 'react';
import styles from './BrandInvoice.module.scss';
import { ChevronUp, ChevronDown, Download, Share2 } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CardActions from '@material-ui/core/CardActions';
import Popover from '@material-ui/core/Popover';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

const PlusSVG = () => {
	return <SVG src={require('../../../../assets/plus1.svg')} />;
};

const MinusSVG = () => {
	return <SVG src={require('../../../../assets/minus1.svg')} />;
};

const BrandInvoice = ({ data, handleExpandClick, expanded }) => {
	const [selectAll, setSelectAll] = useState(false);
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

	const handleSelectAll = () => {
		setSelectAll(selectAll ? false : true);
	}

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
					style: { width: '244px', height: '310px' },
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<div className={styles.popOverContainer}>
					{/* {selectAll ? (
						<CheckCircleIcon
							onClick={handleSelectAll}
						/>
					) : (
							<RadioButtonUncheckedIcon
								onClick={handleSelectAll}
							/>
						)}
					<p> Select all </p>
					<p> Clear all</p> */}
				</div>
			</Popover>
			<div className={styles.mainContainer}>
				<span> Below are invoices you owe to your influencers </span>
				<div className={styles.dateFilter}>
					<p>
						November 2020
					</p>
					<p>
						<div>
							<div onClick={handleClick} className={styles.brandDropDown}>
								{"Filter by Brand"}
								<div className={styles.brandDropDownSVG}>
									{filterDropdown ? <ChevronUp /> : <ChevronDown />}
								</div>
							</div>
						</div>
					</p>
				</div>
				<div className={styles.brandInvoiceInfoContainer}>
					<div className={styles.brandInvoiceContainer}>
						<div className={styles.contentContainer}>
							{data &&
								data != null &&
								data.map((item, index) => {
									return (
										<div>
											<CardActions disableSpacing>
												<div className={styles.contentShare}> <Share2 /></div>
												<div className={styles.contentDownload}> <Download /></div>
												<div className={styles.contentInvoice}> View Invoice</div>
												<div className={styles.contentName}> Campaign:   <p>{item.campaign}</p> </div>
												<div className={styles.contentDate}> Date:  <p>{item.date}  </p> </div>
												<Avatar
													className={styles.avatar}
													src={item.img}
													alt={'avatar'} />
												<div className={styles.contentInfluencer}> {item.member} </div>
												<div className={styles.contentSales}> Sales:  <p>{item.sales}</p> </div>
												<IconButton
													onClick={(e) => { handleExpandClick(e, index) }}
													aria-expanded={expanded}
													aria-label="show more"
													data-target={item.id}
												>
													{expanded == item.id ? (<MinusSVG />) : (<PlusSVG />)}
												</IconButton>
											</CardActions>
											<Collapse in={expanded == item.id} timeout="auto" unmountOnExit key={item.id}>
												<CardContent>
													<div className={styles.collapseContentContainer}>
														<div className={styles.collapseContent}>
															<div>Campaign Duration: <p>{item.campaignDuration} </p> </div>
															<div>Total Influencer Payout: <p> {item.totalInfluencerPayout} </p>	</div>
														</div>
														<div className={styles.collapseContent}>
															<div>Compensation: <p> {item.compensation} </p> </div>
														</div>
													</div>
												</CardContent>
											</Collapse>
											<Divider />
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BrandInvoice;
