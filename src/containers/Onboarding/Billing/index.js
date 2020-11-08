import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import TextField from '../../../components/TextField';
import styles from './Billing.module.scss';
import { Plus, HelpCircle } from 'react-feather';
import paypal from '../../../assets/paypal.png';


const Billing = () => {
    const [primary, setPrimary] = useState(false);
    const [secondary, setSecondary] = useState(false);
    return (
        <div >
            <p className={styles.billingHeading}>You will be billed automatically every 30 days. See our pricing model for billing info.</p>
            <p className={styles.primary}>Primary Payment</p>
            <Grid container spacing={3}>
                <Grid item xs={6} className={styles.iconItem}>
                    <button onClick={() => setPrimary(!primary)}>
                        <Plus /> Add Credit Card
                </button>
                </Grid>
                <Grid item xs={6} className={styles.imageItem}>
                    <button>
                        <img src={paypal} height={38} width={152} />
                        <span>malloryhuntsman@gmail.com</span>
                    </button>
                </Grid>
                {primary &&
                    <> <Grid item md={12}>
                        <TextField
                            id='outlined-basic'
                            fullWidth
                            label='Name on Card'
                            variant='outlined'
                        />

                    </Grid>
                        <Grid item md={12}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='Card Number'
                                variant='outlined'
                            />

                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='Expiration Date'
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='CCV'
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={12}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='Street Address'
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='City'
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={2}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='State'
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='Zip Code'
                                variant='outlined'
                            />
                        </Grid>
                    </>
                }
            </Grid >
            <div>
                <p className={styles.primary}>Secondary Payment <HelpCircle /></p>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={styles.iconItem}>
                        <button onClick={() => setSecondary(!secondary)}>
                            <Plus /> Add Credit Card
                </button>
                    </Grid>
                    <Grid item xs={6} className={styles.imageItem}>
                        <button>
                            <img src={paypal} height={38} width={152} />
                            <span>malloryhuntsman@gmail.com</span>
                        </button>.
            </Grid>
                    {secondary &&
                        <> <Grid item md={12}>
                            <TextField
                                id='outlined-basic'
                                fullWidth
                                label='Name on Card'
                                variant='outlined'
                            />

                        </Grid>
                            <Grid item md={12}>
                                <TextField
                                    id='outlined-basic'
                                    fullWidth
                                    label='Card Number'
                                    variant='outlined'
                                />

                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id='outlined-basic'
                                    fullWidth
                                    label='Expiration Date'
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id='outlined-basic'
                                    fullWidth
                                    label='CCV'
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    id='outlined-basic'
                                    fullWidth
                                    label='Street Address'
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id='outlined-basic'
                                    fullWidth
                                    label='City'
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    id='outlined-basic'
                                    fullWidth
                                    label='State'
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    id='outlined-basic'
                                    fullWidth
                                    label='Zip Code'
                                    variant='outlined'
                                />
                            </Grid>
                        </>
                    }
                </Grid>
            </div>
        </div >
    );

};

export default Billing;