import React, { useState } from 'react';
import { Edit } from 'react-feather';
import { InputAdornment, Grid, Avatar, Popover } from '@material-ui/core';
import styles from './RecentPosts.module.scss';
import moment from 'moment';
import clsx from 'clsx';
import DataImage from '../../../../assets/dummy.png';
import Post2 from '../../../../assets/post1.png';
import Post1 from '../../../../assets/main.png';

const RecentPosts = ({ handleEdit }) => {
	return (
		<div className={styles.postContainer}>
			<div className={styles.headingContainer}>
				<h1>Recent Posts</h1>
			</div>
			<Grid container spacing={1} item md={10}>
				<div className={styles.mainDiv}>
					<Grid item md={5}>
						<div className={styles.elemtdiv}>
							<img alt="post1" src={Post1} />
						</div>
					</Grid>
					<Grid item md={5}>
						<div className={styles.elemtdiv}>
							<img alt="post2" src={Post2} />
						</div>
					</Grid>

					<Grid item md={5}>
						<div className={styles.elemtdiv}>
							<img alt="post3" src={Post1} />
						</div>
					</Grid>

					<Grid item md={5}>
						<div className={styles.elemtdiv}>
							<img alt="post3" src={Post2} />
						</div>
					</Grid>

					<Grid item md={5}>
						<div className={styles.elemtdiv}>
							<img alt="post3" src={Post1} />
						</div>
					</Grid>
				</div>
				</Grid>
		</div >
	);
};
export default RecentPosts;
