import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import InfluencerCard from './InfluencerCard';
import styles from './RightMenu.module.scss';

const influencers = [
	{
		avatar:
			'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		name: 'Good To be',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		instaFollowers: '10k',
		youtubeFollowers: '20k',
		facebookFollowers: '30k',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
		name: 'Bee Keeper Natural',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		instaFollowers: '20k',
		youtubeFollowers: '20k',
		facebookFollowers: '40k',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		name: 'Thrive Market',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		instaFollowers: '50k',
		youtubeFollowers: '70k',
		facebookFollowers: '60k',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
		name: 'Oil Pop',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		instaFollowers: '32k',
		youtubeFollowers: '29k',
		facebookFollowers: '45k',
		selected: false,
	},
	{
		avatar:
			'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
		name: 'Care ',
		description: 'Trendy Womens Clothing and accessories.Chic outfits for everyday wear!',
		instaFollowers: '22k',
		youtubeFollowers: '23k',
		facebookFollowers: '33k',
		selected: true,
	},
];

const RightMenu = ({ }) => {
	return (
		<div className={styles.container}>
			<div >
				<p className={styles.heading}>Explore Brands</p>
			</div>
			<Grid container spacing={2}>
				{influencers.map((influencer) => {
					return (
						<Grid item md={12} xs={12}
							className={styles.gridItem}
							style={{ marginTop: 20 }}
							key={influencer.socialTag}
							item            >
							<InfluencerCard influencer={influencer} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default RightMenu;