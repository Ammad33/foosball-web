import React from 'react';
import { Dialog, Grid } from '@material-ui/core';
import styles from './AddContact.module.scss';
import TextField from '../../../../components/TextField';
import { HelpCircle } from 'react-feather';

const AddContact = ({ open, handleChange, closeAdd }) => {

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

                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Full Name'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Instagram Handle'
                        variant='outlined'
                    />
                </Grid>

                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Email Address'
                        variant='outlined'
                    />
                </Grid>

                <Grid item xs={12} className={styles.element}>
                    <p className={styles.or}>OR</p>
                </Grid>

                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Mobile Number'
                        variant='outlined'
                    />
                </Grid>
            </div>
            <div className={styles.footer} >
                <span onClick={closeAdd}>Cancel</span>
                <div>
                    <div className={styles.spandiv}><div className={styles.circle}></div> <p>Add another</p></div>
                    <button>Add</button>
                </div>
            </div>

        </Dialog>
    );

};

export default AddContact;

