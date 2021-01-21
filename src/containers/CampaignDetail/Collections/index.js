import React, { useState, useEffect } from 'react';
import styles from './Collections.module.scss';
import { Edit } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { set } from 'lodash';

const Collections = ({ handleEdit, removeSeeAll, products }) => {

  const history = useHistory();
  const [counter, setCounter] = useState(0);

  return (<div className={styles.collectionContainer}>
    <div className={styles.headerContainer}>
      <h1>Collection</h1>
      <Edit onClick={() => handleEdit(4)} />
    </div>
    {
      products && products !== null && products.length > 0 &&
      products.map(item => {

        return (
          <div className={styles.collectionSubContent}>
            <h6>{item.collection && item.collection.name}</h6>
            <div className={styles.containerRow}>
              {
                item.collection && item.collection.products
                && item.collection.products.products.map((pro, index) => {
                  return (
                    <div className={styles.boxContainer} >
                      <div className={styles.box}></div>
                      <p className={styles.boxItem}>{pro.name}</p>
                      <p className={styles.boxPrice}>${pro.priceRange && pro.priceRange.max ? pro.priceRange.max.amount : ''} </p>
                      {/* <span>(1234367)</span> */}
                      {pro && pro.estimatedQty && pro.estimatedQty !== null && <p className={styles.boxPrice}> 25 in stock</p>}
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
        )

      })
    }

    {counter < 9 ? null : <button onClick={() => history.push('/collections')} >See all</button>}
  </div>);
}

export default Collections;