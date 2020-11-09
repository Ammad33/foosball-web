import React, { useEffect } from 'react';
import { Grid, Select, makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import CollectionItem from './CollectionItem';
import styles from './Collection.module.scss';

const Collection = ({ collection, handleCollection, collectionItems, collections, handleCollectionItem, handleActiveForCollection }) => {

    useEffect(() => {
        handleActiveForCollection()
    }, [collections])


    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Choose Collection"
                        value={collection}
                        displayEmpty
                        onChange={handleCollection}
                        MenuProps={{ variant: "menu" }}
                        input={<SelectMenu />}
                    >
                        <MenuItem value="">
                            Choose Collection
                        </MenuItem>
                        <MenuItem value={'Drop Cuts'} className={styles.menuItem}>Drop Cuts  {
                            collections.find(item => item.collectionName === 'Drop Cuts' && item.collectionItems.length !== 0) && < div className='hello' ><span>{collections.find(item => item.collectionName === 'Drop Cuts').collectionItems.length}</span></div>} </MenuItem>
                        <MenuItem value={'Henleys'} className={styles.menuItem}>Henleys {
                            collections.find(item => item.collectionName === 'Henleys' && item.collectionItems.length !== 0) && < div ><span>{collections.find(item => item.collectionName === 'Henleys').collectionItems.length}</span></div>}</MenuItem>
                        <MenuItem value={'Tanks'} className={styles.menuItem}>Tanks {
                            collections.find(item => item.collectionName === 'Tanks' && item.collectionItems.length !== 0) && < div ><span>{collections.find(item => item.collectionName === 'Tanks').collectionItems.length}</span></div>}</MenuItem>
                        <MenuItem value={'V-Necks'} className={styles.menuItem}>V-Necks {
                            collections.find(item => item.collectionName === 'V-Necks' && item.collectionItems.length !== 0) && < div ><span>{collections.find(item => item.collectionName === 'V-Necks').collectionItems.length}</span></div>}</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {
                collection !== '' ?
                    <Grid item xs={12} className={styles.collections}>
                        <Grid container spacing={3} className={styles.collectionContainer}>
                            {collectionItems.map((collectionItem, index) => {
                                return (

                                    <Grid item xs={3}>
                                        <CollectionItem collectionItem={collectionItem} key={index} collection={collection} collections={collections} handleCollectionItem={handleCollectionItem} />
                                    </Grid>
                                )
                            })
                            }
                        </Grid>
                    </Grid> : null
            }

        </Grid >);
};

export default Collection;
