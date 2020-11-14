import React from 'react';
import { Dialog, Grid } from '@material-ui/core';
import styles from './AddContact.module.scss';
import TextField from '../../../../components/TextField';
import { HelpCircle } from 'react-feather';

const AddContact = ({ open, newInfluencer,
    handleNewInfluencerChange,
    addNewInfluencer,
    setNew, closeAdd,
    newInfluencerError }) => {

    return (
        <Dialog
            classes={{ paper: styles.addContact }}
            aria-labelledby='confirmation-dialog-title'
            open={open}
            onClose={closeAdd}
        >
            <div className={styles.content}>
                <h6>Add an influencer </h6>
                <div className={styles.subHeadingContainer}>
                    <p>Add influencers manually or upload an excel file</p>
                    <HelpCircle />
                    <button>Upload</button>
                </div>

                <Grid item xs={12} className={newInfluencerError.fullName ? styles.errorElement : styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Full Name'
                        variant='outlined'
                        value={newInfluencer.fullName}
                        onChange={(e) => handleNewInfluencerChange(e.target.value, 'fullName')}
                        helperText={
                            newInfluencerError.fullName && (
                                <span className={styles.errorText}>Full name is required </span>
                            )
                        }
                    />
                </Grid>
                <Grid item xs={12} className={newInfluencerError.instagramHandler ? styles.errorElement : styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Instagram Handle'
                        variant='outlined'
                        value={newInfluencer.instagramHandler}
                        onChange={(e) => handleNewInfluencerChange(e.target.value, 'instagramHandler')}
                        helperText={
                            newInfluencerError.instagramHandler && (
                                <span className={styles.errorText}>Instagram Handle is required </span>
                            )
                        }

                    />
                </Grid>

                <Grid item xs={12} className={newInfluencerError.email ? styles.errorElement : styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Email Address'
                        variant='outlined'
                        value={newInfluencer.email}
                        onChange={(e) => handleNewInfluencerChange(e.target.value, 'email')}
                        helperText={
                            newInfluencerError.email && (
                                <span className={styles.errorText}>Email Address is required </span>
                            )
                        }

                    />
                </Grid>

                <Grid item xs={12} className={styles.element}>
                    <p className={styles.or}>OR</p>
                </Grid>

                <Grid item xs={12} className={newInfluencerError.mobilePhone ? styles.errorElement : styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Mobile Number'
                        variant='outlined'
                        value={newInfluencer.mobilePhone}
                        onChange={(e) => handleNewInfluencerChange(e.target.value, 'mobilePhone')}
                        helperText={
                            newInfluencerError.mobilePhone && (
                                <span className={styles.errorText}> Mobile Number is required </span>
                            )
                        }

                    />
                </Grid>
            </div>
            <div className={styles.footer} >
                <span onClick={closeAdd}>Cancel</span>
                <div>
                    <div className={styles.spandiv} onClick={setNew}><div className={styles.circle}></div> <p>Add another</p></div>
                    <button onClick={addNewInfluencer}>Add</button>
                </div>
            </div>

        </Dialog>
    );

};

export default AddContact;

