import React from 'react';
import styles from './CollectionItem.module.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CollectionItem = ({ collectionItem, collection, collections, handleCollectionItem, }) => {

    const index = collections.length > 0 && collections.findIndex(item => item.collectionName === collection);

    let secondItem = null;

    if (index !== false && index !== -1) {
        secondItem = collections[index].collectionItems.findIndex(second => second.sku === collectionItem.sku);
    }

    return (
        <div onClick={() => handleCollectionItem(collection, collectionItem)} className={styles.collectionItemContainer}>
            <div className={styles.divContainer}><div className={styles.divGary}></div> {secondItem !== null && secondItem !== -1 && <CheckCircleIcon />}</div>
            <p className={styles.itemName}>{collectionItem.name}</p>
            <p  >${collectionItem.price} <span>({collectionItem.sku})</span></p>
            <p>{collectionItem.quntity} in stock</p>
        </div>
    );

};

export default CollectionItem;