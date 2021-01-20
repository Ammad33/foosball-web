import React from 'react';
import styles from './CollectionItem.module.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CollectionItem = ({ collectionId, collectionItem, collection, collections, handleCollectionItem, products }) => {

    const index = products.length > 0 && products.findIndex(item => item.collectionId === collectionId);

    let secondItem = null;

    if (index !== false && index !== -1) {
        secondItem = products[index].products.findIndex(second => second.productId === collectionItem.id);
    }

    return (
        <div onClick={() => handleCollectionItem(collectionId, { productId: collectionItem.id })} className={styles.collectionItemContainer} >
            <div className={styles.divContainer}><div className={styles.divGary}></div>
                {secondItem !== null && secondItem !== -1 && <CheckCircleIcon />}</div>
            <p className={styles.itemName}>{collectionItem.name}</p>
            <p  >${collectionItem.priceRange && collectionItem.priceRange.max && collectionItem.priceRange.max.amount} </p>
            {/* <span>({collectionItem.id})</span> */}
            {collectionItem.estimatedQty && < p > {collectionItem.quntity} in stock</p>}
        </div >
    );

};

export default CollectionItem;