import React from 'react';
import styles from './Collections.module.scss';
import { Grid } from '@material-ui/core';
import { Edit } from 'react-feather';

const Collections = () => {
    return (<div className={styles.collectionContainer}>
        <div className={styles.headerContainer}>
            <h1>Collection</h1>
            <Edit />
        </div>
        <div className={styles.collectionSubContent}>
            <h6>Drop Cuts</h6>
            <div className={styles.containerRow}>
                <div className={styles.boxContainer} >
                    <div className={styles.box}></div>
                    <p className={styles.boxItem}>Item name/ #</p>
                    <p className={styles.boxPrice}>$64.99</p>
                    <p className={styles.boxPrice}>15 in stock</p>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}></div>
                    <p className={styles.boxItem}>Item name/ #</p>
                    <p className={styles.boxPrice}>$64.99</p>
                    <p className={styles.boxPrice}>15 in stock</p>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}></div>
                    <p className={styles.boxItem}>Item name/ #</p>
                    <p className={styles.boxPrice}>$64.99</p>
                    <p className={styles.boxPrice}>15 in stock</p>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}></div>
                    <p className={styles.boxItem}>Item name/ #</p>
                    <p className={styles.boxPrice}>$64.99</p>
                    <p className={styles.boxPrice}>15 in stock</p>
                </div>
            </div>
        </div>
        <div className={styles.collectionSubContent}>
            <h6>V Necks</h6>
            <div className={styles.containerRow}>
                <div className={styles.boxContainer} >
                    <div className={styles.box}></div>
                    <p className={styles.boxItem}>Item name/ #</p>
                    <p className={styles.boxPrice}>$64.99</p>
                    <p className={styles.boxPrice}>15 in stock</p>
                </div>
                <div className={styles.boxContainer} >
                    <div className={styles.box}></div>
                    <p className={styles.boxItem}>Item name/ #</p>
                    <p className={styles.boxPrice}>$64.99</p>
                    <p className={styles.boxPrice}>15 in stock</p>
                </div>
                <div className={styles.boxContainer} >
                    <div className={styles.box}></div>
                    <p className={styles.boxItem}>Item name/ #</p>
                    <p className={styles.boxPrice}>$64.99</p>
                    <p className={styles.boxPrice}>15 in stock</p>
                </div>
            </div>
        </div>

        <button>See all</button>
    </div>);
}

export default Collections;