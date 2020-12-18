import React from 'react';
import styles from './Collections.module.scss';
import { Edit } from 'react-feather';
import { useHistory } from 'react-router-dom';

const Collections = ({ handleEdit, removeSeeAll }) => {

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
          <p className={styles.boxItem}>Ben Parker</p>
          <p className={styles.boxPrice}>$64.22 <span>(1234367)</span></p>
          <p className={styles.boxPrice}> 25 in stock</p>
        </div>
        <div className={styles.boxContainer} >
          <div className={styles.box}></div>
          <p className={styles.boxItem}>Ben Parker</p>
          <p className={styles.boxPrice}>$30.99 <span>(1476519)</span></p>
          <p className={styles.boxPrice}>20 in stock</p>
        </div>
        <div className={styles.boxContainer} >
          <div className={styles.box}></div>
          <p className={styles.boxItem}>Ben Parker</p>
          <p className={styles.boxPrice}>$50.99 <span>(1987456)</span></p>
          <p className={styles.boxPrice}>15 in stock</p>
        </div>
        <div className={styles.boxContainer} >
          <div className={styles.box}></div>
          <p className={styles.boxItem}>Ben Parker</p>
          <p className={styles.boxPrice}>$59.99 <span>(1276124)</span></p>
          <p className={styles.boxPrice}>30 in stock</p>
        </div>
      </div>
    </div>
    <div className={styles.collectionSubContent}>
      <h6>V Necks</h6>
      <div className={styles.containerRow}>
        <div className={styles.boxContainer} >
          <div className={styles.box}></div>
          <p className={styles.boxItem}>Ben Parker</p>
          <p className={styles.boxPrice}>$20.99 <span>(15263748)</span></p>
          <p className={styles.boxPrice}>35 in stock</p>
        </div>
        <div className={styles.boxContainer} >
          <div className={styles.box}></div>
          <p className={styles.boxItem}>Ben Parker</p>
          <p className={styles.boxPrice}>$15.99 <span>(15628394)</span></p>
          <p className={styles.boxPrice}>20 in stock</p>
        </div>
        <div className={styles.boxContainer} >
          <div className={styles.box}></div>
          <p className={styles.boxItem}>Ben Parker</p>
          <p className={styles.boxPrice}>$45.99 <span>(12313131)</span></p>
          <p className={styles.boxPrice}>40 in stock</p>
        </div>
      </div>
    </div>
    {removeSeeAll == true ? null : <button onClick={() => history.push('/collections')} >See all</button>}
  </div>);
}

export default Collections;