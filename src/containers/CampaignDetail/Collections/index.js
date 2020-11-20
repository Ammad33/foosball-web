import React from 'react';
import styles from './Collections.module.scss';
import { Edit } from 'react-feather';
import { useHistory } from 'react-router-dom';

const Collections = ({ handleEdit }) => {
    const history = useHistory();
    return (<div className={styles.collectionContainer}>
        <div className={styles.headerContainer}>
            <h1>Collection</h1>
            <Edit onClick={() => handleEdit(4)} />
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

        <button onClick={() => history.push('/collections')} >See all</button>
    </div>);
}

export default Collections;