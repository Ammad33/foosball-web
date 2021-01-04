import React, { useState } from 'react';
import styles from './FomoPromoInvoice.module.scss';
import { ChevronUp, ChevronDown, Download, Share2 } from 'react-feather';
import SVG from 'react-inlinesvg';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';


const PlusSVG = () => {
	return <SVG src={require('../../../../assets/plus1.svg')} />;
};

const MinusSVG = () => {
	return <SVG src={require('../../../../assets/minus1.svg')} />;
};


const FomoPromoInvoice = ({ data, handleExpandClick, expanded }) => {

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
			<div className={styles.mainContainer}>
				<span> Update your billing preferences in{' '}
				<Link
						to='#'
						style={{ color: '#000000', textDecorationLine: 'underline' }}
					>
						settings.
					</Link>
				</span>
				<div className={styles.dateFilter}>
					<p>
						<div>
							<div onClick={handleClick} className={styles.brandDropDown}>
								2020
								<div className={styles.brandDropDownSVG}>
									{filterDropdown ? <ChevronUp /> : <ChevronDown />}
								</div>
							</div>
						</div>
					</p>
				</div>
				<div className={styles.fomoPromoInvoiceInfoContainer}>
					<div className={styles.fomoPromoInvoiceContainer}>
						<div className={styles.contentContainer}>
							{data &&
								data != null &&
								data.map((item, index) => {
									return (
										<div>
											<CardActions disableSpacing>
												<div className={styles.contentDownload}> <Download /></div>
												<div className={styles.contentInvoice}> November 2020 Invoice</div>
												<div className={styles.contentInvoiceIssue}> Invoice Issued:   <p>{item.invoiceIssued}</p> </div>
												<div className={styles.contentAutoPayment}> Auto Payment:  <p>{item.autoPayment}  </p> </div>
												<div className={styles.contentBilled}> Billed:  <p>{item.billed}</p> </div>
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
															<div>Active User: <p>{item.activeUsers} </p> </div>
															<div>Active Campaigns: <p> {item.activeCampaigns} </p>	</div>
															<div>GMV: <p> {item.gmv} </p>	</div>
														</div>
														<div className={styles.collapseContent}>
															<div>Active User Fee: <p>{item.activeUserFee} </p> </div>
															<div>Active Campaigns: <p> {item.activeCampaignFee} </p>	</div>
															<div>GMV Fee: <p> {item.gmvFee} </p>	</div>
														</div>
													</div>
												</CardContent>
											</Collapse>
											<Divider className={styles.divider} />
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

export default FomoPromoInvoice;
