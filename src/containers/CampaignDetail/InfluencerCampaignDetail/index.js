import React from 'react';
import clsx from 'clsx';
import { Grid, Avatar, Chip, Card, CardContent, Popover } from '@material-ui/core';
import styles from './InfluencerCampaignDetail.module.scss';
import { Edit, ChevronRight, MoreVertical, Download, Mail } from 'react-feather';
import { useHistory } from 'react-router-dom';
import Performance from './Performance';
import Posts from './Posts';
import Activity from './Activity';
import CampaignDetail from './CampaignDetail';

const CampaignDetailInfluencer = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className={styles.popOver}>
                    <div > <Mail /> <p> Message Brand</p></div>
                    <div className={styles.secondElement} > <Download /> <p>Download Campaign</p></div>
                </div>
            </Popover>

            <div className={styles.campaignsContainer}>
                <div className={styles.CampaignHeading}>
                    <span onClick={() => history.push('/campaigns')}>Campaigns</span>
                    <ChevronRight />
                    <span>Campaigns Name</span>
                </div>
                <div className={styles.subHeadingSection}>
                    <div className={styles.subCampaignSubHeading}>
                        <p>Promotion: 15%</p>
                        <div className={styles.borderDiv} ></div>
                        <Chip
                            className={clsx(
                                styles.campaignStatus
                            )}
                            label={'Closed'}
                        />
                        <div className={styles.borderDiv} ></div>

                        <div className={styles.avatarContainer}>
                            <Avatar
                                className={styles.avatar}
                                src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                            />
                            <span>Care of</span></div>

                    </div>
                    <MoreVertical onClick={handleClick} />
                </div>

                <Performance />
                <div className={styles.firstConatiner}>
                    <Posts />
                    <Activity />
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.first}>
                        <CampaignDetail />
                    </div>
                    <div className={styles.scond}>
                    </div>

                </div>

            </div>
        </>
    );
};

export default CampaignDetailInfluencer;
