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


const Accordion = withStyles({
  root: {
    marginTop: '10px',
    boxShadow: 'none',
    '&:not(:last-child)': {

    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      // margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

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

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),

  },
}))(MuiAccordionDetails);


const PlusSVG = () => {
  return <SVG src={require('../../../assets/plus1.svg')} />;
};

const MinusSVG = () => {
  return <SVG src={require('../../../assets/minus1.svg')} />;
};

const Collection = ({
  handleCollection,
  collections,
  handleCollectionItem,
  handleActiveForCollection,
  handleCollectionExpand,
  products,
  clearCollections
}) => {
  useEffect(() => {
    handleActiveForCollection();
  }, [products]);

  useEffect(() => {
    return () => { clearCollections() };
  }, [])


  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        {
          collections && collections.length > 0 && collections.map(
            (collection, index) => {
              return (
                <Accordion square expanded={collection.expand} onChange={() => handleCollectionExpand(collection.expand, index)}>
                  <AccordionSummary className={styles.accordianSummary} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography className={styles.collectionName}>
                      {collection && collection.name}
                      <div className={styles.heading}>
                        {products && products.length > 0 && products.find(
                          (item) =>
                            item.collectionId === collection.id &&
                            item.products !== undefined &&
                            item.products.length !== 0
                        ) && (
                            <div className={styles.quantity}>
                              <span className={styles.collectionNumber}>
                                {products.find(
                                  (item) => item.collectionId === collection.id
                                ).products.length}
                              </span>
                            </div>
                          )}




                        <span className={styles.svg} >
                          {collection.expand ? (
                            <MinusSVG />) : (<PlusSVG />)
                          }
                        </span>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {collection && collection.products && collection.products.products && collection.products.products.length > 0 ? (
                      <Grid item xs={12} className={styles.collections}>
                        <Grid container spacing={3} className={styles.collectionContainer}>
                          {collection.products.products.map((collectionItem, index1) => {
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
                          })}
                        </Grid>
                      </Grid>
                    ) : null}
                  </AccordionDetails>
                </Accordion>
              )
            }
          )
        }

        {/* <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary className={styles.accordianSummary} aria-controls="panel2d-content" id="panel2d-header">
            <Typography className={styles.collectionName}>
              V Necks
						 <div className={styles.heading}>
                {collections.find(
                  (item) =>
                    item.collectionName === 'V-Necks' &&
                    item.collectionItems.length !== 0
                ) && (
                    <div className={styles.quantity}>
                      <span className={styles.collectionNumber}>
                        {collections.find(
                          (item) => item.collectionName === 'V-Necks'
                        ).collectionItems.length}
                      </span>
                    </div>
                  )}

                <span className={styles.svg} >
                  {svg2 ? (
                    <MinusSVG />) : (<PlusSVG />)
                  }
                </span>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {collection !== '' ? (
              <Grid item xs={12} className={styles.collections}>
                <Grid container spacing={3} className={styles.collectionContainer}>
                  {collectionItems.map((collectionItem, index) => {
                    return (
                      <Grid item xs={3}>
                        <CollectionItem
                          collectionItem={collectionItem}
                          key={index}
                          collection={collection}
                          collections={collections}
                          handleCollectionItem={handleCollectionItem}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            ) : null}
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary className={styles.accordianSummary} aria-controls="panel3d-content" id="panel3d-header">
            <Typography className={styles.collectionName}>
              Henleys
						 <div className={styles.heading}>
                {collections.find(
                  (item) =>
                    item.collectionName === 'Henleys' &&
                    item.collectionItems.length !== 0
                ) && (
                    <div className={styles.quantity}>
                      <span className={styles.collectionNumber}>
                        {
                          collections.find(
                            (item) => item.collectionName === 'Henleys'
                          ).collectionItems.length}
                      </span>
                    </div>
                  )}
                {' '}
                <span className={styles.svg} >
                  {svg3 ? (
                    <MinusSVG />) : (<PlusSVG />)
                  }
                </span>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {collection !== '' ? (
              <Grid item xs={12} className={styles.collections}>
                <Grid container spacing={3} className={styles.collectionContainer}>
                  {collectionItems.map((collectionItem, index) => {
                    return (
                      <Grid item xs={3}>
                        <CollectionItem
                          collectionItem={collectionItem}
                          key={index}
                          collection={collection}
                          collections={collections}
                          handleCollectionItem={handleCollectionItem}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            ) : null}
          </AccordionDetails>
        </Accordion> */}
      </Grid>

      {/* <Grid item xs={12}>
        <FormControl fullWidth variant='outlined'>
          <Select
            className={styles.dropdown}
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            label='Choose Collection'
            value={collection}
            displayEmpty
            onChange={handleCollection}
            MenuProps={{ variant: 'menu' }}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            IconComponent={() => <Chevron />}
            input={<SelectMenu />}
          >
            <MenuItem value=''>Choose Collection</MenuItem>
            <MenuItem value={'Drop Cuts'} className={styles.menuItem}>
              Drop Cuts{' '}
              {collections.find(
                (item) =>
                  item.collectionName === 'Drop Cuts' &&
                  item.collectionItems.length !== 0
              ) && (
                <div className='hello'>
                  <span>
                    {open === true &&
                      collections.find(
                        (item) => item.collectionName === 'Drop Cuts'
                      ).collectionItems.length}
                  </span>
                </div>
              )}{' '}
            </MenuItem>
            <MenuItem value={'Henleys'} className={styles.menuItem}>
              Henleys{' '}
              {collections.find(
                (item) =>
                  item.collectionName === 'Henleys' &&
                  item.collectionItems.length !== 0
              ) && (
                <div>
                  <span>
                    {open === true &&
                      collections.find(
                        (item) => item.collectionName === 'Henleys'
                      ).collectionItems.length}
                  </span>
                </div>
              )}
            </MenuItem>
            <MenuItem value={'Tanks'} className={styles.menuItem}>
              Tanks{' '}
              {collections.find(
                (item) =>
                  item.collectionName === 'Tanks' &&
                  item.collectionItems.length !== 0
              ) && (
                <div>
                  <span>
                    {open === true &&
                      collections.find(
                        (item) => item.collectionName === 'Tanks'
                      ).collectionItems.length}
                  </span>
                </div>
              )}
            </MenuItem>
            <MenuItem value={'V-Necks'} className={styles.menuItem}>
              V-Necks{' '}
              {collections.find(
                (item) =>
                  item.collectionName === 'V-Necks' &&
                  item.collectionItems.length !== 0
              ) && (
                <div>
                  <span>
                    {open === true &&
                      collections.find(
                        (item) => item.collectionName === 'V-Necks'
                      ).collectionItems.length}
                  </span>
                </div>
              )}
            </MenuItem>
          </Select>
        </FormControl>
      </Grid> */}

    </Grid>
  );
};

export default Collection;
