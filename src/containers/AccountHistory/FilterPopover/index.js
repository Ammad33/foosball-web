import React, { useState } from 'react';
import styles from './FilterPopover.module.scss';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import TextField from '../../../components/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	input: {
		height: 45,
		marginTop: '5px'

	},
}));
const FilterPopover = ({ data, selectAll,handleSelectAll, handleClearAll ,selectedMember ,handleSelection}) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = useStyles();

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<>
			<div className={styles.container}>
				<div className={styles.popOverContainer}>
					<div className={styles.popOverInfo}>
						{selectAll ? (
							<CheckCircleIcon
								fontSize="small"
								onClick={handleSelectAll}
							/>
						) : (
								<RadioButtonUncheckedIcon
									fontSize="small"
									onClick={handleSelectAll}
								/>
							)}
					 Select all </div>
					<span onClick={() => { handleClearAll() }}> Clear all</span>
				</div>
				<div >
					<TextField
						id='outlined-basic'
						fullWidth
						label='Search'
						variant='outlined'
						className={styles.searchField}
						InputProps={{
							className: classes.input
						}}
					// value={formData.fullName}
					// onChange={(e) => handleFormChange(e.target.value, 'fullName')}
					/>
				</div>
				<div className={styles.selectionContainer}>
					{data.map((item, index) => {
						return (
							<div className={styles.content}>
								{selectedMember[index] && selectedMember[index].selected == true ? (
									<CheckCircleIcon fontSize="small" onClick={() => { handleSelection(index) }}
									/>
								)
									: (
										<RadioButtonUncheckedIcon fontSize="small" onClick={() => { handleSelection(index) }} />
									)
								}
								<Avatar
									className={styles.selectAvatar}
									src={item.img}
									alt={'avatar'} />
								<p> Sam Ozkural </p>
							</div>
						)
					})}
				</div>
			</div>

		</>
	);
};

export default FilterPopover;
