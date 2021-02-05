import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import CollectionItem from './CollectionItem';
import styles from './Collection.module.scss';
import SVG from 'react-inlinesvg';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { CheckCircle, Circle } from 'react-feather';
import * as _ from 'lodash';

/**styles */
const Accordion = withStyles({
  root: {
    marginTop: '10px',
    boxShadow: 'none',
    '&:not(:last-child)': {},
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      // margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

/**styles */
const AccordionSummary = withStyles({
  root: {
    // marginBottom: -1,
    minHeight: 66,
    '&$expanded': {
      // minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

/**styles */
const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
}))(MuiAccordionDetails);

/**SVG */
const PlusSVG = () => {
  return <SVG src={require('../../../assets/plus1.svg')} />;
};

const MinusSVG = () => {
  return <SVG src={require('../../../assets/minus1.svg')} />;
};

const Collection = ({
  collections,
  setCollections,
  handleCollectionItem,
  handleActiveForCollection,
  handleCollectionExpand,
  handleCollectionAllCheck,
  handleCollectionAllUncheck,
  products,
}) => {
  /**check for conditions and activate the next button for collection */
  useEffect(() => {
    handleActiveForCollection();
  }, [products]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        {collections &&
          collections.length > 0 &&
          collections.map((collection, index) => {
            return (
              <Accordion
                square
                expanded={collection.expand}
                onChange={() =>
                  handleCollectionExpand(collection.expand, index)
                }
              >
                <AccordionSummary
                  className={styles.accordianSummary}
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                >
                  <Typography className={styles.collectionName}>
                    {collection && collection.name}
                    <div className={styles.heading}>
                      {products &&
                        products.length > 0 &&
                        products.find(
                          (item) =>
                            item.collectionId === collection.id &&
                            item.products !== undefined &&
                            item.products.length !== 0
                        ) && (
                          <div className={styles.quantity}>
                            <span className={styles.collectionNumber}>
                              {
                                products.find(
                                  (item) => item.collectionId === collection.id
                                ).products.length
                              }
                            </span>
                          </div>
                        )}

                      <span className={styles.svg}>
                        {collection.expand ? <MinusSVG /> : <PlusSVG />}
                      </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {collection &&
                  collection.products &&
                  collection.products.products &&
                  collection.products.products.length > 0 ? (
                    <>
                      <div className={styles.checkCollection}>
                        {collection.selectedAll ? (
                          <CheckCircle
                            onClick={() => {
                              handleCollectionAllUncheck(collection);
                            }}
                          />
                        ) : (
                          <Circle
                            onClick={() => {
                              handleCollectionAllCheck(collection);
                            }}
                          />
                        )}

                        <p>Select Entire Collection</p>
                      </div>
                      <Grid item xs={12} className={styles.collections}>
                        <Grid
                          container
                          spacing={3}
                          className={styles.collectionContainer}
                        >
                          {collection.products.products.map(
                            (collectionItem, index1) => {
                              return (
                                <Grid item xs={3}>
                                  <CollectionItem
                                    collectionItem={collectionItem}
                                    key={index1}
                                    products={products}
                                    collectionId={collection.id}
                                    collectionKey={collection}
                                    collection={collection}
                                    collections={collections}
                                    handleCollectionItem={handleCollectionItem}
                                  />
                                </Grid>
                              );
                            }
                          )}
                        </Grid>
                      </Grid>
                    </>
                  ) : null}
                </AccordionDetails>
              </Accordion>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Collection;
