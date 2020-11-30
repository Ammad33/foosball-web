import React, { useEffect, useState } from 'react';
import SelectMenu from '../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import { Grid, Select, InputAdornment } from '@material-ui/core';
import TextField from '../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
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
  return <SVG src={require('../../../assets/plus1.svg')}/>;
};

const MinusSVG = () => {
  return <SVG src={require('../../../assets/minus1.svg')}/>;
};

const Collection = ({
  collection,
  handleCollection,
  collectionItems,
  collections,
  handleCollectionItem,
  handleActiveForCollection,
}) => {
  useEffect(() => {
    handleActiveForCollection();
	}, [collections]);
	
	const [expanded, setExpanded] = React.useState('');
	const [svg1, setSvg1] = useState(false);
	const [svg2, setSvg2] = useState(false);
	const [svg3, setSvg3] = useState(false);


	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
		closeSvg()
		if (panel == "panel1"){
			handleCollection("Drop Cuts")
			handleSvg1();
			setOpen(true);
		}
		else if (panel == "panel2"){
			handleCollection("V-Necks")
			handleSvg2();
			setOpen(true);
		}
		else{
			handleCollection("Henleys")
			handleSvg3();
			setOpen(true);
		}
	};
	const closeSvg= () =>{
		setSvg1(false);
		setSvg2(false);
		setSvg3(false);
	}
	const handleSvg1 = () => {
		setSvg1 (!svg1);

	}
	const handleSvg2 = () => {
		setSvg2 (!svg2);

	}
	const handleSvg3 = () => {
		setSvg3 (!svg3);

	}

  const [open, setOpen] = useState(false);
  return (
    <Grid container>
			<Grid item xs={12} sm={12} md={12}>
				<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className={styles.accordianSummary} aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={styles.collectionName}>
						 Drop Cutsss{' '}  
							{collections.find(
                (item) =>
                  item.collectionName === 'Drop Cuts' &&
                  item.collectionItems.length !== 0
              ) && (
                <div className='hello'>
                  <span className = {styles.collectionNumber}>
                    {open === true &&
                      collections.find(
                        (item) => item.collectionName === 'Drop Cuts'
                      ).collectionItems.length}
                  </span>
                </div>
              )}
							{' '} 
						
					
					
					<span className={styles.svg} > 
					{svg1 ? (
						<MinusSVG/> ): ( <PlusSVG/>) 
					 }
						</span> 
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
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary className={styles.accordianSummary} aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={styles.collectionName}>
						 V Necks{' '}  
							{collections.find(
                (item) =>
                  item.collectionName === 'V-Necks' &&
                  item.collectionItems.length !== 0
              ) && (
                <div className='hello'>
                  <span className = {styles.collectionNumber}>
                    {open === true &&
                      collections.find(
                        (item) => item.collectionName === 'V-Necks'
                      ).collectionItems.length}
                  </span>
                </div>
              )}
							{' '} 
					<span className={styles.svg} > 
					{svg2 ? (
						<MinusSVG/> ): ( <PlusSVG/>) 
					 }
						</span> 
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
						 Henleys{' '}  
							{collections.find(
                (item) =>
                  item.collectionName === 'Henleys' &&
                  item.collectionItems.length !== 0
              ) && (
                <div className='hello'>
                  <span className = {styles.collectionNumber}>
                    {open === true &&
                      collections.find(
                        (item) => item.collectionName === 'Henleys'
                      ).collectionItems.length}
                  </span>
                </div>
              )}
							{' '} 
					<span className={styles.svg} > 
					{svg3 ? (
						<MinusSVG/> ): ( <PlusSVG/>) 
					 }
						</span> 
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
