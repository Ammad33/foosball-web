import React, { useState } from 'react';
import styles from './PendingInfluencer.module.scss';
import { Avatar, Chip, Popover } from '@material-ui/core';
import { ChevronRight, MoreVertical, Download, Mail } from 'react-feather';
import clsx from 'clsx';
import Activity from '../Activity';
import CampaignDetail from '../CampaignDetail';
import Compensation from '../Compensation';
import Deliverables from '../Deliverables';
import Collections from '../Collections';
import { useHistory } from 'react-router-dom';
import PendingCard from '../PendingCard';
import CreateMicroSite from '../CreateMicrosite';
import ReviewAndSign from '../ReviewAndSign';
import _ from 'lodash';

const PendingInfluencer = ({
	handleEdit,
	data,
	handleSeeClick,
	getTotal,
	name,
	campaignId,
	internalState

}) => {
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	const [createMircositeFlag, setCreateMicrositeFlag] = useState(false);
	const [signContractFlag, setSignContractFlag] = useState(false);

	const handleClose = () => {
		setAnchorEl(null);
	};
	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			{createMircositeFlag ? (<CreateMicroSite
				name={name}
				internalState={internalState}
				campaignId={campaignId}
				internalState={internalState}
				microsite={data.microsite && data.microsite !== null ? data.microsite : ''}
			/>) : signContractFlag ? (<ReviewAndSign
				name={name}
				campaignId={campaignId}
				createMircositeFlag={createMircositeFlag}
				internalState={internalState}
				template={data.microsite && data.microsite !== null ? data.microsite.template : ''}
				handleCreateMicrosite={() => setCreateMicrositeFlag(true)}
			/>) :
					(
						<>
							<Popover
								id={id}
								open={open}
								anchorEl={anchorEl}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
							>
								<div className={styles.popOver}>
									<div>
										{' '}
										<Mail /> <p> Message Brand</p>
									</div>
									<div className={styles.secondElement} style={{ display: "none" }}>
										{' '}
										<Download /> <p>Download Campaign</p>
									</div>
								</div>
							</Popover>

							<div className={styles.campaignsContainer}>
								<div className={styles.CampaignHeading}>
									<span onClick={() => history.push('/campaigns')}>Campaigns</span>
									<ChevronRight />
									<span>{name}</span>
								</div>
								<div className={styles.subHeadingSection}>
									<div className={styles.subCampaignSubHeading}>
										<p>
											Estimated Compensation: ${numberWithCommas(Math.trunc(getTotal(data && data.compensation)))}
										</p>
										<div className={styles.borderDiv}></div>
										<Chip
											className={clsx(styles.campaignStatus, styles.pending)}
											label={'Pending'}
										/>
										<div className={styles.borderDiv}></div>
										{data && data.brand && (
											<div className={styles.avatarContainer}>
												<Avatar className={styles.avatar} src={data.brand.imageUrl} />
												<span>{data.brand.name}</span>
											</div>
										)}
									</div>
									<MoreVertical onClick={handleClick} />
								</div>
								<div className={styles.firstConatiner}>
									<PendingCard
										handlecreateMircositeFlag={() => setCreateMicrositeFlag(true)}
										handleSignContractFlag={() => setSignContractFlag(true)}
										data={data} />
									<Activity activities={data?.events} onClick={handleSeeClick} />
								</div>
								<div className={styles.secondContainer}>
									<div>
										<div className={styles.first}>
											<CampaignDetail campaign={data} handleEdit={handleEdit} />
											<Compensation
												onClick={handleSeeClick}
												handleEdit={handleEdit}
												compensation={
													data && data.compensation && data.compensation !== null
														? _.compact(data.compensation)
														: []
												}
												targetGrossSales={data.targetGrossSales}
												paymentSchedule={data.paymentSchedule}
											/>
										</div>
										<div style={{ marginTop: '30px' }}>
											<Collections
												handleEdit={handleEdit}
												products={data.products}
												id={data.id}
											/>
										</div>
									</div>
									<div className={styles.second}>
										<Deliverables
											deliverables={data.deliverables}
											handleEdit={handleEdit}
											onClick={handleSeeClick}
										/>
									</div>
								</div>
							</div>
						</>
					)
			}
		</>
	);
};

export default PendingInfluencer;
