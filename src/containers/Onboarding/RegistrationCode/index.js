import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './Registraion.module.scss';

const RegistrationCode = ({ first, second, third, fourth, handleFirst, handleSecond,
    handleThird, handleFourth, handleActiveForCode }) => {

    useEffect(() => {
        handleActiveForCode();
    }, [first, second, third, fourth])
    return (
        <Grid container spacing={3}>
            <Grid item xs={3} className={styles.root}>
                <input maxlength="1" value={first} type="text" id="fisrt" onChange={handleFirst} />
            </Grid>
            <Grid item xs={3} className={styles.root}>
                <input maxlength="1" value={second} type="text" id="second" onChange={handleSecond} />
            </Grid>
            <Grid item xs={3} className={styles.root}>
                <input maxlength="1" value={third} type="text" id="third" onChange={handleThird} />
            </Grid>
            <Grid item xs={3} className={styles.root}>
                <input maxlength="1" value={fourth} type="text" id="fourth" onChange={handleFourth} />
            </Grid>
        </Grid>
    );



};

export default RegistrationCode;