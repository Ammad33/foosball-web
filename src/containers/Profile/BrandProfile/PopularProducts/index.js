import React from 'react';
import { Edit } from 'react-feather';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import styles from './popularProducts.module.scss';
import moment from 'moment';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
import DataImage from '../../../../assets/dummy.png'


const PopularProducts = ({ handleEdit }) => {
	// debugger;
	return (
		<div className={styles.postContainer}>
			<div className={styles.headingContainer}>
				<h1>Popular</h1>
				<Edit onClick={() => handleEdit(1)} />
			</div>
			<Grid container >
				<Grid item xs={2}>
					<div className={styles.mainDiv}>
						<div className={styles.elemtdiv}>
							<img alt="post1" src={DataImage} />
							<div className={styles.postsDescription}> vanilla plant </div>
							<div > $28</div>
						</div>
						<div className={styles.elemtdiv}>
							<img alt="post2" src={DataImage} />
							<div className={styles.postsDescription}> vanilla plant </div>
							<div > $28</div>
						</div>
						<div className={styles.elemtdiv}>
							<img alt="post3" src={DataImage} />
							<div className={styles.postsDescription}> vanilla plant </div>
							<div > $28</div>
						</div>
						<div className={styles.elemtdiv}>
							<img alt="post3" src={DataImage} />
							<div className={styles.postsDescription}> vanilla plant </div>
							<div > $28</div>
						</div>
						<div className={styles.elemtdiv}>
							<img alt="post3" src={DataImage} />
							<div className={styles.postsDescription}> vanilla plant </div>
							<div > $28</div>
						</div>

					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default PopularProducts;
