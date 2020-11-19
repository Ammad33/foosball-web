import React , {useState, useEffect} from 'react';
import { Grid, Select, InputAdornment } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './CreateCompensation.module.scss';
import { Trash } from 'react-feather';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import CompensationProductItem from './CompensationProductItem';

const options = [];
for (let i = 3; i <= 20; i += 1) {
  options.push(i);
}

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
  return <SVG src={require('../../../../assets/plus1.svg')}/>;
};

const MinusSVG = () => {
  return <SVG src={require('../../../../assets/minus1.svg')}/>;
};

const Chevron = () => {
  return <span className={styles.dropDownCustomizeSvg}><SVG src={require('../../../../assets/chevron-downn.svg')} /></span>;
};


const CreateCompensation = ({ compensations, handleAnother, index, item, handleCompensationValue,
		handleRemoveCompensation,
		compensationProduct,
		handleCompensationProducts,
		compensationProductItems,
		compensationProducts,
		handleActiveForCompensationProduct,
		handleCompensationProductItem }) => {


			useEffect(() => {
				handleActiveForCompensationProduct();
			}, [compensationProducts]);
			
			const [expanded, setExpanded] = React.useState('');
			const [svg1, setSvg1] = useState(false);
			const [svg2, setSvg2] = useState(false);
			const [svg3, setSvg3] = useState(false);
		
		
			const handleChange = (panel) => (event, newExpanded) => {
				debugger;
				setExpanded(newExpanded ? panel : false);
				closeSvg()
				if (panel == "panel1"){
					handleCompensationProducts("Drop Cuts")
					handleSvg1();
				}
				else if (panel == "panel2"){
					handleCompensationProducts("V-Necks")
					handleSvg2();
				}
				else{
					handleCompensationProducts("Henleys")
					handleSvg3();
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
    return (
        <Grid container spacing={3} >
            <Grid item xs={12} className={clsx(styles.headerContainer, index > 0 ? styles.marginTop : '')}>
                <p className={styles.headingColor}>Compensation Type {index + 1}</p>
                {compensations.length > 1 && <Trash onClick={() => handleRemoveCompensation(index)} />}
            </Grid>
            <Grid item xs={12} className={styles.marginbottomSelect}>
                <FormControl fullWidth variant="outlined">
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
												label="Choose Collection"
												IconComponent={() => (
													<Chevron />     )}
                        value={item.compensationType}
                        onChange={(e) => {
                            handleCompensationValue(e.target.value, index, 'compensationType')
                            if (e.target.value !== '') {
                                handleAnother()
                            }
                        }}
                        displayEmpty
                        MenuProps={{ variant: "menu" }}
                        input={<SelectMenu />}
                    >
                        <MenuItem value='' disabled>
                            Compensation Type
                        </MenuItem>
                        <MenuItem value={'Cash per post'}>Cash per post</MenuItem>
                        <MenuItem value={'Cash per monthly deliverable'}>Cash per monthly deliverable</MenuItem>
                        <MenuItem value={'Revenue Share'}>Revenue Share</MenuItem>
                        <MenuItem value={'Gift Card'}>Gift Card</MenuItem>
                        <MenuItem value={'Products'}>Products</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
							
								{item.compensationType != '' &&  (item.compensationType == "Cash per post"  || item.compensationType == "Cash per monthly deliverable") &&
									<Grid item xs={12} sm={12} md={12} >
											<TextField
													id='outlined-basic'
													fullWidth
													type="number"
													label= "Enter Amount"
													variant='outlined'
													value={item.amount}
													onChange={(e) => handleCompensationValue(e.target.value, index, 'amount')}
													InputProps={{
														startAdornment: (
															<InputAdornment  position="start">
																$
															</InputAdornment>
														),
													}}
											/>
									</Grid>
								}
								{item.compensationType === 'Revenue Share' &&
									<Grid item xs={12} sm={12} md={12}>
										<FormControl fullWidth variant='outlined'>
											<Select
												id='revenue'
												fullWidth
												label='Enter Revenue Share'
												variant='outlined'
												value={item.amount}
												onChange={(e) => handleCompensationValue(e.target.value, index, 'amount')}
												displayEmpty
												IconComponent={() => <Chevron />}
												MenuProps={{ variant: 'menu' }}
												input={<SelectMenu />}
											>
												<MenuItem value='' disabled>
												Select revenue share percentage
												</MenuItem>
												{options.map((option) => (
													<MenuItem key={option} value={option}>
														{option}
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>
								}
								{item.compensationType === 'Gift Card' &&
										<Grid item xs={12} sm={12} md={12} >
											<TextField
													className={styles.marginbottomSelect}
													id='outlined-basic'
													fullWidth
													type="number"
													label= "Enter Amount"
													variant='outlined'
													value={item.amount}
													onChange={(e) => handleCompensationValue(e.target.value, index, 'amount')}
													InputProps={{
														startAdornment: (
															<InputAdornment  position="start">
																$
															</InputAdornment>
														),
													}}
											/>
											<TextField
													id='outlined-basic'
													fullWidth
													label= "Paste gift card code"
													variant='outlined'
													value={item.giftcode}
													className = {styles.giftCard}
													onChange={(e) => handleCompensationValue(e.target.value, index, 'giftcode')}
											/>
										</Grid> 
								}
									{item.compensationType === 'Products' &&
										<Grid item xs={12} sm={12} md={12}>
											<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
												<AccordionSummary className={styles.accordianSummary} aria-controls="panel1d-content" id="panel1d-header">
													<Typography className={styles.collectionName}> Drop Cuts  <span className={styles.svg} > 
													{svg1 ? (
														<MinusSVG/> ): ( <PlusSVG/>) 
													}
														</span> 
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													{compensationProduct !== '' ? (
													<Grid item xs={12} className={styles.collections}>
														<Grid container spacing={3} className={styles.collectionContainer}>
															{compensationProductItems.map((compensationItem, index) => {
																return (
																		<Grid item xs={3}>
																			<CompensationProductItem
																				compensationItem={compensationItem}
																				key={index}
																				compensationProduct={compensationProduct}
																				compensationProducts={compensationProducts}
																				handleCompensationProductItem={handleCompensationProductItem}
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
													<Typography className={styles.collectionName}>V Necks
													<span className={styles.svg} > 
													{svg2 ? (
														<MinusSVG/> ): ( <PlusSVG/>) 
													}
														</span> 
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													{compensationProduct !== '' ? (
													<Grid item xs={12} className={styles.collections}>
														<Grid container spacing={3} className={styles.collectionContainer}>
															{compensationProductItems.map((compensationItem, index) => {
																return (
																		<Grid item xs={3}>
																			<CompensationProductItem
																				compensationItem={compensationItem}
																				key={index}
																				compensationProduct={compensationProduct}
																				compensationProducts={compensationProducts}
																				handleCompensationProductItem={handleCompensationProductItem}
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
													<Typography className={styles.collectionName}>Henleys 
													<span className={styles.svg} > 
													{svg3 ? (
														<MinusSVG/> ): ( <PlusSVG/>) 
													}
														</span> 
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													{compensationProduct !== '' ? (
													<Grid item xs={12} className={styles.collections}>
														<Grid container spacing={3} className={styles.collectionContainer}>
															{compensationProductItems.map((compensationItem, index) => {
																return (
																		<Grid item xs={3}>
																			<CompensationProductItem
																				compensationItem={compensationItem}
																				key={index}
																				compensationProduct={compensationProduct}
																				compensationProducts={compensationProducts}
																				handleCompensationProductItem={handleCompensationProductItem}
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
								}
						</Grid>

        
    );
};

export default CreateCompensation;