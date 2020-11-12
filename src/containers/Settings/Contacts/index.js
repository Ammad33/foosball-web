import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import { Plus, MoreVertical, Mail, Edit, Trash } from 'react-feather';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import TextField from '../../../components/TextField';
import { Search } from 'react-feather';

const Contacts = () => {

    const [search, setSearch] = useState('');
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
            <div className={styles.inviteContainer}>
                <span className={styles.inviteSpan}><Plus /> Invite ingluencers to work with</span>
                <p>When you invite other users to FOMO Promo and the sign up and create a campaign, you can get a credit for one campaign. See more details <span>here</span>.</p>
            </div>
            <div className={styles.searchContainer}>
                <TextField
                    id='outlined-basic'
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    label=''
                    helperText={" "}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>
                    }}
                    variant='outlined'
                />
            </div>
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
                    <div className={styles.editDiv}> <Edit /> <p>Edit </p></div>
                    <div className={styles.deleteDiv}> <Trash /> <p>Delete</p></div>
                </div>
            </Popover>
            {[...Array(5)].map((_, i) => {
                return (
                    <Grid container alignItems="center" className={styles.influencerItem}>
                        <Grid item xs={4} className={styles.itemImage}>
                            {i % 2 !== 0 ?
                                <div className={styles.withoutAvatar} >
                                    <Mail />
                                </div> :
                                <Avatar
                                    className={styles.avatar}
                                    src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                                />}
                            <p>
                                Sam Ozkural
                    </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>
                                @samozkural
                    </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>
                                samozkural@gmail.com
                    </p>
                        </Grid>
                        <Grid item xs={2} >
                            <MoreVertical style={{ float: 'right' }} onClick={handleClick} />
                        </Grid>
                    </Grid>
                )
            })}


        </>
    );
}

export default Contacts;