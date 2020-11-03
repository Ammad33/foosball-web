import React from 'react';
import { Grid, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../components/SelectMenu';
import CollectionItem from './CollectionItem';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Collection.module.scss';
import { red } from '@material-ui/core/colors';

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
                        displayEmpty
                        onChange={handleCollection}
                        MenuProps={{ variant: "menu" }}
                        input={<SelectMenu />}
                    >
                        <MenuItem value="">
                            Choose Collection
                        </MenuItem>
                        {/* <MenuItem  value={'Drop Cuts'}>Drop Cuts<span style= {{paddingLeft: "615px"}}> {2} </span>  </MenuItem>
                        <MenuItem  value={'Henleys'}>Henleys <span style= {{paddingLeft: "631px"}}> {2} </span> </MenuItem>
                        <MenuItem  value={'Tanks'}>Tanks <span style= {{paddingLeft: "647px"}}> {2} </span> </MenuItem>
                        <MenuItem  value={'V-Necks'}>V-Necks <span style= {{paddingLeft: "630px"}}> {2} </span> </MenuItem> */}
                        <MenuItem value={'Drop Cuts'}>Drop Cuts </MenuItem>
                        <MenuItem value={'Henleys'}>Henleys </MenuItem>
                        <MenuItem value={'Tanks'}>Tanks</MenuItem>
                        <MenuItem value={'V-Necks'}>V-Necks</MenuItem>
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
