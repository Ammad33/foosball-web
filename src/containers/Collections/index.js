import React, { useEffect } from 'react';
import styles from './Collections.module.scss';
import { ChevronRight, Edit } from 'react-feather';
import { useHistory } from 'react-router-dom';

const Collections = () => {
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={styles.collectionContainer}>
            <div className={styles.collectionHeading}>
                <span onClick={() => history.push('/campaigns')}>Campaigns</span>
                <ChevronRight />
                <span onClick={() => history.push('/campaignDetail')}>Campaigns Name</span>
                <ChevronRight />
                <span>Collections</span>
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
                    <div className={styles.boxContainer} >
                        <div className={styles.box}></div>
                        <p className={styles.boxItem}>Item name/ #</p>
                        <p className={styles.boxPrice}>$64.99</p>
                        <p className={styles.boxPrice}>15 in stock</p>
                    </div>
                </div>
            </div>

            <div className={styles.collectionSubContent}>
                <h6>Tanks</h6>
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
                </div>
            </div>
        </div>
    );
}

export default Collections;