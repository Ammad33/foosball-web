import React from 'react';
import styles from './CollectionItem.module.scss';

const CollectionItem = ({ itemName, price, quntity, sku }) => {

    return (
        <div className={styles.collectionItemContainer}>
            <div></div>
            <p className={styles.itemName}>Item name</p>
            <p  >$64.99 <span>(34848393)</span></p>
            <p>15 in stock</p>
        </div>
    );

};

export default CollectionItem;