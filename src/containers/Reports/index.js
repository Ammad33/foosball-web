import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './Reports.module.scss';


const Reports = () => {

	const [active, setActive] = useState('ALL')

	useEffect(() => {

	}, []);

	return (
		<>
			<div className={styles.reportsContainer}>
				<div className={styles.ReportHeadingContainer}>
					<div className={styles.ReportHeading}>
						<span>Reports</span>
						<p>
							Sort <ExpandMoreIcon fontSize='small' />
						</p>
						<p>
							Filter <ExpandMoreIcon fontSize='small' />
						</p>
					</div>
				</div>
				<div className={styles.ReportHeadingButton}>
					<button
						className={active === 'ALL' ? styles.allActive : styles.tab}
						onClick={() => setActive('ALL')}
					>
						Tab
          </button>
					<button
						className={active === 'DRAFT' ? styles.allActive : styles.tab}
						onClick={() => setActive('DRAFT')}
					>
						Tab
          </button>
					<button
						className={active === 'PENDING' ? styles.allActive : styles.tab}
						onClick={() => setActive('PENDING')}
					>
						Tab
          </button>
					<button
						className={active === 'LIVE' ? styles.allActive : styles.tab}
						onClick={() => setActive('LIVE')}
					>
						Tab
          </button>
					<button
						className={active === 'CLOSED' ? styles.allActive : styles.tab}
						onClick={() => setActive('CLOSED')}
					>
						Tab
          </button>
					<button
						className={active === 'LAST' ? styles.allActive : ''}
						onClick={() => setActive('LAST')}
					>
						Tab
          </button>
				</div>
				<Grid
					container
					spacing={3}
					direction='column'
				>
					<Grid item xs={12}>
						<div className={styles.ReportInfoContainer}>
							<div className={styles.ReportContainer}>
							</div>
						</div>
					</Grid>
					<Grid container spacing={3} item xs={12} >
						<Grid item xs={6}>
							<div className={styles.ReportInfoContainerTwo}>
								<div className={styles.ReportContainerTwo}>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={styles.ReportInfoContainerTwo}>
								<div className={styles.ReportContainerTwo}>
								</div>
							</div>
						</Grid>
					</Grid>
					<Grid container spacing={3} item xs={12} >
						<Grid item xs={4}>
							<div className={styles.ReportInfoContainerThree}>
								<div className={styles.ReportContainerThree}>
								</div>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.ReportInfoContainerThree}>
								<div className={styles.ReportContainerThree}>
								</div>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className={styles.ReportInfoContainerThree}>
								<div className={styles.ReportContainerThree}>
								</div>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Reports;

