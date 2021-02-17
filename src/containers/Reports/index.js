import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Iframe from 'react-iframe';
import styles from './Reports.module.scss';
import { Auth } from 'aws-amplify';
import { RootContext } from '../../context/RootContext';



const Reports = () => {

	const [active, setActive] = useState('ALL')
	const { brandId, currentUser, setCurrentUser } = useContext(RootContext);

	useEffect(() => {
		getAuth();
	}, []);


	const getAuth = async () => {

		try {
			const cognitoUser = await Auth.currentAuthenticatedUser();
			const currentSession = await Auth.currentSession();
			cognitoUser.refreshSession(currentSession.refreshToken, (err, session) => {
				// console.log('session', err, session);
				let currentUserAWS = { ...currentUser };
				currentUserAWS.signInUserSession = session;
				setCurrentUser(currentUserAWS);

			});
		} catch (e) {
			console.log('Unable to refresh Token', e);
		}

	}


	return (
		<>
			<div className={styles.reportsContainer}>
				<div className={styles.ReportHeadingContainer}>
					<div className={styles.ReportHeading}>
						<span>Reports</span>
						{/* <p>
							Sort <ExpandMoreIcon fontSize='small' />
						</p>
						<p>
							Filter <ExpandMoreIcon fontSize='small' />
						</p> */}
					</div>
				</div>
				{/* <div className={styles.ReportHeadingButton}>
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
				</div> */}
				<Grid
					container
					spacing={3}
					direction='column'
				>
					<Grid item xs={12}>
						<div className={styles.ReportInfoContainer}>
							<div className={styles.ReportContainer}>
								<Iframe
									url="https://tableau.influence-sciences.com/views/FomoPromo-Homepage/GrossCampaigns?:embed=yes&:toolbar=no"
									width="100%"
									height="100%"
									id="myId"
									// className="myClassname"
									className={styles.secondContainer}
									display="initial"
									position="relative" />
							</div >
						</div>
					</Grid>
					{/* <Grid container spacing={3} item xs={12} >
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
					</Grid> */}
				</Grid>
			</div>
		</>
	);
};

export default Reports;

