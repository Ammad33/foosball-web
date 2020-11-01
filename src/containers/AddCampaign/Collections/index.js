import React from 'react';
import { Grid, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../components/SelectMenu';
import CollectionItem from './CollectionItem';
import styles from './Collection.module.scss';

const Collection = ({ collection, handleCollection, collectionItems, collections, handleCollectionItem }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Choose Collection"
                        value={collection}
                        native
                        onChange={handleCollection}
                        input={<SelectMenu />}
                    >
                        <option value="">
                            Choose Collection
                        </option>
                        <option value={'Drop Cuts'}>Drop Cuts</option>
                        <option value={'Henleys'}>Henleys</option>
                        <option value={'Tanks'}>Tanks</option>
                        <option value={'V-Necks'}>V-Necks</option>
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
