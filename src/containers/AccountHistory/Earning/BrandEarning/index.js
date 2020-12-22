import React, { useState } from 'react';
import styles from './BrandEarning.module.scss';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paperclip, MoreVertical, Archive, Trash } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
import Divider from '@material-ui/core/Divider';


import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

const PlusSVG = () => {
	return <SVG src={require('../../../../assets/plus1.svg')} />;
};

const MinusSVG = () => {
	return <SVG src={require('../../../../assets/minus1.svg')} />;
};


const BrandEarning = ({ data, handleExpandClick, expanded }) => {

	return (
		<>
			<div>
				<div className={styles.earningInfoContainer}>
					<div className={styles.earningContainer}>
						<div className={styles.contentContainer}>
							{data &&
								data != null &&
								data.map((item, index) => {
									return (
										<div>
											<CardActions disableSpacing>
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
															<div>Total Campaign Sales: <p> {item.totalCampaignSale} </p> </div>
															<div>Average Cart Value: <p> {item.averageCartValue}</p>	</div>
															<div>Compensation: <p> {item.compensation} </p> </div>
														</div>
														<div className={styles.collapseContent}>
															<div>Campaign Duration: <p>{item.campaignDuration} </p> </div>
															<div>Average Cart Quantity: <p> {item.averageCartQuality} </p> </div>
															<div>Total Influencer Payout: <p> {item.totalInfluencerPayout} </p> </div>
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

export default BrandEarning;
