import React from 'react';
import { Grid, InputAdornment, Dialog } from '@material-ui/core';
import styles from './EditBrand.module.scss';
import TextField from '../../../../../components/TextField';
import { HelpCircle } from 'react-feather';


const EditBrand = ({ open, handleChange, closeAdd }) => {

    return (
        <Dialog
            classes={{ paper: styles.editContact }}
            aria-labelledby='confirmation-dialog-title'
            open={open}
            onClose={closeAdd}
        >
            <div className={styles.content}>
                <h6>Brand Information</h6>
                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Brand Name'
                        variant='outlined'
                        // value="Sam Ozkural"
                    />
                </Grid>
                <Grid item xs={12} className={styles.element}>
                    <TextField
												className= {styles.bio}
                        id='outlined-basic'
                        fullWidth
                        label='Bio'
                        variant='outlined'
                        // value="@samozkural"
                    />
                </Grid>

                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Email'
                        variant='outlined'
												// value="samozkural@gmail.com"
												InputProps={{
													endAdornment: (
														<InputAdornment position='end'>
															<HelpCircle />
														</InputAdornment>
													),
												}}
                    />
                </Grid>
								<Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Website Url'
                        variant='outlined'
                        // value="samozkural@gmail.com"
                    />
                </Grid>


                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        label='Mobile Number'
												variant='outlined'
												InputProps={{
													endAdornment: (
														<InputAdornment position='end'>
															<HelpCircle />
														</InputAdornment>
													),
												}}

                    />
                </Grid>
            </div>
            <div className={styles.footer} >
                <span onClick={closeAdd}>Cancel</span>
                <button disabled={true}>Save</button>
            </div>

        </Dialog>
    );

};

export default EditBrand;

