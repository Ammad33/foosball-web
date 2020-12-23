import React, { useState } from 'react';
import styles from './InfluencerAccountHistory.module.scss';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import InfluencerInvoice from './InfluencerInvoice';
import FomoPromoInvoice from '../BrandAccountHistory/FomoPromoInvoice'



const InfluencerAccountHistory = ({data , fomoPromoInvoiceData}) => {

	const [active, setActive] = useState('Influencer Invoices');
	const [expanded, setExpanded] = React.useState((0));

	const handleExpandClick = (event, index) => {
		debugger;
		if (expanded == event.currentTarget.dataset["target"]) {
			setExpanded(0)
		}
		else {
			setExpanded(event.currentTarget.dataset["target"]);
		}
	};

	return (
		<>
			{/* <Popover
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
			</Popover> */}
			<div className={styles.mainContainer}>
				<div className={styles.accountHistoryHeadingContainer}>
					<div className={styles.accountHistoryHeading}>
						<span>Account History</span>
					</div>
				</div>
				<div className={styles.FiltersContainer}>
					<button
						className={active === 'Influencer Invoices' ? styles.active : ''}
						onClick={() => {
							setActive('Influencer Invoices');
						}}
					>
						Influencer Invoices
          </button>
					<button
						className={active === 'fomopromo Invoices' ? styles.active : ''}
						onClick={() => {
							setActive('fomopromo Invoices');
						}}
					>
						fomopromo Invoices
          </button>
				</div >
				<div>
					{active === 'Influencer Invoices' ? (
						<InfluencerInvoice data={data}
							handleExpandClick={handleExpandClick}
							expanded={expanded} />
					) : (
							<FomoPromoInvoice data={fomoPromoInvoiceData}
								handleExpandClick={handleExpandClick}
								expanded={expanded} /> 
						)}
				</div>
			</div>
		</>
	);
};

export default InfluencerAccountHistory;
