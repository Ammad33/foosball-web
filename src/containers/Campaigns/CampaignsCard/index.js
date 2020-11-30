import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './CampaingsCard.module.scss';
import { Avatar } from '@material-ui/core';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';



const CampaignsCard = ({ campaign }) => {
	const convertedStartDate = moment(campaign.startDate*1000).format('MM-DD-YYYY');
	const convertedEndDate = moment(campaign.endDate*1000).format('MM-DD-YYYY');
  return (
    <Card className={styles.campaignCard}>
      <CardContent className={styles.cardContent}>
        <div className={styles.cardStatus}>
          {campaign.showWarningStatus ? (
            <span className={styles.alertBadge}>
              <ErrorOutlineOutlinedIcon className={styles.alertIcon} />
              Action Required
            </span>
          ) : (
            ''
          )}
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.campaignInfo}>
					 <Tooltip title={campaign.name}> 
            <span className={styles.campaignName}>{campaign.name.length > 20 ?
						`${campaign.name.substring(0, 20)}...` : campaign.name
						}</span> 
					</Tooltip>
            <span className={styles.campaignNumber}>
              <small>{convertedStartDate} / {convertedEndDate} </small>
            </span>
						<div className={styles.wrapChip}>
							  {campaign.status != "" ? (
                    <div >
                      {campaign.status == "PENDING" ? (
                        <Chip
													className={clsx(
														styles.statusPending,
														styles[`chip${campaign.status}`]
													)}
													label={campaign.status}
												/>
                      ) : campaign.status == "DRAFT" ? (
                        <Chip
													className={clsx(
														styles.statusDraft,
														styles[`chip${campaign.status}`]
													)}
													label={campaign.status}
												/>
                      ) : campaign.status == "LIVE" ? (
                        <Chip
													className={clsx(
														styles.statusLive,
														styles[`chip${campaign.status}`]
													)}
													label={campaign.status}
												/>
                      ) : (
														<Chip
														className={clsx(
															styles.statusPending,
															styles[`chip${campaign.status}`]
														)}
														label={campaign.status}
													/>
                      )}
                    </div>
                  ) : (
                      ''
                    )}							
							<Avatar
								className={styles.personAvatar}
								src={
									'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80'
								}
							/>
							<span className={styles.mediaTag}>@{'tag'}</span>
						</div>
          </div>
          <div className={styles.personInfo}>
            
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignsCard;
