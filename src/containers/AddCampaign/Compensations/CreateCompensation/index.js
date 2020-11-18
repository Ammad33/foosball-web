import React from 'react';
import { Grid, Select, InputAdornment } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './CreateCompensation.module.scss';
import { Trash } from 'react-feather';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';


const Chevron = () => {
	return <span className={styles.dropDownCustomizeSvg}><SVG src={require('../../../../assets/chevron-downn.svg')} /></span>;
};
const PlusSVG = () => {
	return <SVG src={require('../../../../assets/plus1.svg')} />;
};

const CreateCompensation = ({ compensations, handleAnother, index, item, handleCompensationValue,
	handleRemoveCompensation }) => {

	return (
		<Grid container spacing={3} >
			<Grid item xs={12} className={clsx(styles.headerContainer, index > 0 ? styles.marginTop : '')}>
				<p className={styles.headingColor}>Compensation Type{index + 1}</p>
				{compensations.length > 1 && <Trash onClick={() => handleRemoveCompensation(index)} />}
			</Grid>
			<Grid item xs={12} className={styles.marginbottomSelect}>
				<FormControl fullWidth variant="outlined">
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						label="Choose Collection"
						IconComponent={() => (
							<Chevron />)}
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

			{item.compensationType !== '' && (item.compensationType == "Cash per post" || item.compensationType === "Cash per monthly deliverable") &&
				<Grid item xs={12} sm={12} md={12} >
					<TextField
						id='outlined-basic'
						fullWidth
						type="number"
						label="Enter Amount"
						variant='outlined'
						value={item.amount}
						onChange={(e) => handleCompensationValue(e.target.value, index, 'amount')}
					/>
				</Grid>
			}
			{item.compensationType === 'Revenue Share' &&
				<Grid item xs={12} sm={12} md={12}>
					<TextField
						id='outlined-basic'
						fullWidth
						type="number"
						label="Enter Revenue Share"
						variant='outlined'
						value={item.amount}
						onChange={(e) => handleCompensationValue(e.target.value, index, 'amount')}
					/>
				</Grid>
			}
			{item.compensationType === 'Gift Card' &&
				<Grid item xs={12} sm={12} md={12} >
					<TextField
						className={styles.marginbottomSelect}
						id='outlined-basic'
						fullWidth
						type="number"
						label="Enter Amount"
						variant='outlined'
						value={item.amount}
						onChange={(e) => handleCompensationValue(e.target.value, index, 'amount')}
					/>
					<TextField
						id='outlined-basic'
						fullWidth
						type="number"
						label="Paste gift card code"
						variant='outlined'
						value={item.giftcode}
						className={styles.giftCard}
						onChange={(e) => handleCompensationValue(e.target.value, index, 'giftcode')}
					/>
				</Grid>
			}
			{item.compensationType === 'Products' &&
				<Grid item xs={12} sm={12} md={12}>
					<TextField
						id='outlined-basic'
						fullWidth
						label="Drop Cuts"
						variant='outlined'
						value={item.dropCuts}
						className={styles.product}
						onChange={(e) => handleCompensationValue(e.target.value, index, 'dropCuts')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<PlusSVG />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						id='outlined-basic'
						fullWidth
						label="V Necks"
						variant='outlined'
						value={item.vNecks}
						className={styles.product}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<PlusSVG />
								</InputAdornment>
							),
						}}
						onChange={(e) => handleCompensationValue(e.target.value, index, 'vNecks')}
					/>
					<TextField
						id='outlined-basic'
						fullWidth
						label="Henleys"
						variant='outlined'
						value={item.henleys}
						className={styles.product}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<PlusSVG />
								</InputAdornment>
							),
						}}
						onChange={(e) => handleCompensationValue(e.target.value, index, 'henleys')}
					/>
				</Grid>
			}
		</Grid>


	);
};

export default CreateCompensation;