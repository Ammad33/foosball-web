import React, { useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './CampaingsCard.module.scss';
import { Avatar, Popover } from '@material-ui/core';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import { RootContext } from '../../../context/RootContext';
import {
	MoreVertical,
	Download,
	Copy,
	Mail,
	Trash
} from 'react-feather';

const CampaignsCard = ({ campaign, onClick, handleDelete }) => {
	debugger;
	const {
		brandType,
	} = useContext(RootContext);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};


	const convertedStartDate = moment(campaign.startDate * 1000).format(
		'MM/DD/YYYY'
	);
	const convertedEndDate = moment(campaign.endDate * 1000).format('MM/DD/YYYY');
	return (
		<>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<div className={styles.popOver}>
					<div>
						<Mail /> <p>Message Influencer</p>
					</div>
					<div>
						<Copy /> <p>Duplicate Campaign</p>
					</div>
					<div>
						<Download /> <p>Download Campaign</p>
					</div>

					{campaign.status === 'DRAFT' ? (
						<div onClick={() => handleDelete(campaign.id)}>
							<Trash /> <p>Delete Campaign</p> </div>
					) :
						campaign.status === 'PENDING' ? (
							<div onClick={() => handleDelete(campaign.id)}>
								<Trash /> <p>Cancel Campaign</p> </div>
						) : campaign.status === 'LIVE' ? (
							<div onClick={() => handleDelete(campaign.id)}>
								<Trash /> <p>Stop Campaign</p> </div>
						) : ("")
					}
				</div>
			</Popover>

			<Card className={styles.campaignCard}>
				<CardContent className={styles.cardContent}>
					<div className={styles.cardStatus}>
						{brandType == 'Influencer' && campaign.status === 'INVITED' ? (
							<span className={styles.alertBadge}>
								<ErrorOutlineOutlinedIcon className={styles.alertIcon} />
              Action Required
							</span>
						) : (
								campaign.status === 'DRAFT' ?
									(
										<span className={styles.alertBadge}>
											<ErrorOutlineOutlinedIcon className={styles.alertIcon} />
								Action Required
										</span>
									) : (
										''
									)
							)}
					</div>
					<div className={styles.cardDetails}>
						<div className={styles.campaignInfo} onClick={onClick}>
							<Tooltip title={campaign.name}>
								<span className={styles.campaignName}>
									{campaign.name.length > 20
										? `${campaign.name.substring(0, 30)}...`
										: campaign.name}
								</span>
							</Tooltip>
							<span className={styles.campaignNumber}>
								<small>
									{convertedStartDate} - {convertedEndDate}{' '}
								</small>
							</span>
							<div className={styles.wrapChip}>
								{campaign.status !== '' ? (
									<div>
										{campaign.status === 'INVITED' ? (
											brandType === 'Influencer' ? (
												<Chip
													className={clsx(
														styles.statusPending,
														styles[`chip${campaign.status}`]
													)}
													label='Invited'
												/>
											) : (
													< Chip
														className={clsx(
															styles.statusPending,
															styles[`chip${campaign.status}`]
														)}
														label='Pending'
													/>
												)

										) : campaign.status === 'PENDING' ? (
											<Chip
												className={clsx(
													styles.statusPending,
													styles[`chip${campaign.status}`]
												)}
												label={campaign.status && campaign.status.toProperCase()}
											/>
										) : campaign.status === 'DRAFT' ? (
											<Chip
												className={clsx(
													styles.statusDraft,
													styles[`chip${campaign.status}`]
												)}
												label={campaign.status && campaign.status.toProperCase()}
											/>
										) : campaign.status === 'LIVE' ? (
											<Chip
												className={clsx(
													styles.statusLive,
													styles[`chip${campaign.status}`]
												)}
												label={campaign.status && campaign.status.toProperCase()}
											/>
										) : campaign.status === 'CLOSED' ? (
											<Chip
												className={clsx(
													styles.statusClosed,
													styles[`chip${campaign.status}`]
												)}
												label={campaign.status && campaign.status.toProperCase()}
											/>
										) : (
																<Chip
																	className={clsx(
																		styles.statusPending,
																		styles[`chip${campaign.status}`]
																	)}
																	label={campaign.status && campaign.status.toProperCase()}
																/>
															)}
									</div>
								) : (
										''
									)}
								{campaign && campaign.influencer != null ? (
									<>
										<Avatar
											className={styles.personAvatar}
											src={campaign.influencer.imageUrl}
										/>
										<span className={styles.mediaTag}>{campaign.influencer.socialIdentities != null ? (campaign.influencer.socialIdentities[0].handle) : ('')}</span> </>
								) : (
										campaign && campaign.brand != null ? (
											<>
												<Avatar
													className={styles.personAvatar}
													src={campaign.brand.imageUrl}
												/>
												<span className={styles.mediaTag}>{campaign.brand != null ? (campaign.brand.name) : ('')}</span> </>
										) : (
												''
											)
									)
								}

							</div>
						</div>
						<div className={styles.iconInfo}>
							<MoreVertical onClick={handleClick} />
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default CampaignsCard;
