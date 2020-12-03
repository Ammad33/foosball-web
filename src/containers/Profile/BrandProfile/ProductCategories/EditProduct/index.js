import React from 'react';
import { Grid, InputAdornment, Dialog } from '@material-ui/core';
import styles from './EditProduct.module.scss';
import TextField from '../../../../../components/TextField';
import { HelpCircle , Search } from 'react-feather';


const EditProduct = ({ open, handleChange, closeAdd }) => {

    return (
        <Dialog
            classes={{ paper: styles.editContact }}
            aria-labelledby='confirmation-dialog-title'
            open={open}
            onClose={closeAdd}
        >
            <div className={styles.content}>
                <h6>Product Categories</h6>
								<div>
									<p className={styles.productsHeading}>Search and select categories that best represent your brand and products.</p>
								</div>
                <Grid item xs={12} className={styles.element}>
                    <TextField
                        id='outlined-basic'
                        fullWidth
                        variant='outlined'
												// value="samozkural@gmail.com"
												InputProps={{
													startAdornment: (
														<InputAdornment position='start'>
															<Search />
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

export default EditProduct;

