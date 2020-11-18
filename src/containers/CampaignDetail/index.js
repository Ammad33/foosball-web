import React from 'react';
import clsx from 'clsx';
import { Grid, Avatar, Chip, Card, CardContent } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './CampaignsDetails.module.scss';
import edit from '../../assets/edit.svg';
import BrandCampaignDetail from './BrandCampaignDetail';
import { useHistory } from 'react-router-dom';
import InfluencerCampaignDetail from './InfluencerCampaignDetail';

const CampaignDetail = () => {
  const history = useHistory();

  return (
    // <div className={styles.campaignsContainer}>
    //   <div className={styles.CampaignHeading}>
    //     <span onClick={() => history.push('/campaigns')}>Campaigns</span>
    //     <ArrowForwardIosIcon fontSize="small" />
    //     <span>Campaigns Name</span>
    //   </div>
    //   <div className={styles.subCampaignSubHeading}>
    //     <p>Promotion: 15%</p>
    //     <div className={styles.borderDiv} ></div>
    //     <Chip
    //       className={clsx(
    //         styles.campaignStatus,
    //         styles[`chipDraft`]
    //       )}
    //       label={'Draft'}
    //     />
    //   </div>

    //   <Grid container spacing={3}>
    //     <Grid item xs={12} sm={12} md={8} >
    //       <Card className={styles.compensationCard}>
    //         <CardContent className={styles.compensationCardContent}>
    //           <h1>Compensation not yet defined</h1>
    //           <p> Pickup where left off and define how you will Compensate <br /> the influencer.</p>
    //           <button>Finalize Campaign</button>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={12} md={4}>
    //       <Card className={styles.activityCard}>
    //         <CardContent className={styles.activityCardContent}>
    //           <h1>Activity</h1>
    //           <div className={styles.activitySubContent}>
    //             <span>9/25</span>
    //             <div></div>
    //             <p>Campaign draft created</p>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={12} md={4}>
    //       <Card className={styles.activityCard}>
    //         <CardContent className={styles.activityCardContent}>
    //           <div className={styles.headerContainer}>
    //             <h1>Campaign Details</h1>
    //             <img src={edit} alt="editIcon" height={20} width={20} />
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Campaign Name</h6>
    //             <p>Campaign name here</p>
    //           </div>
    //           <div className={styles.dateContainer}>
    //             <div className={styles.detailSubContent}>
    //               <h6>StartDate, Time</h6>
    //               <p>10/10/2020, 24:00</p>
    //             </div>
    //             <div className={styles.detailSubContent}>
    //               <h6>End Date, Time</h6>
    //               <p>10/30/2020, 24:00</p>
    //             </div>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Promotion Discount</h6>
    //             <p>15%</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Customer message to Influencer</h6>
    //             <p>Hi Sam, We are so excited for the chance to work with you.
    //             We love your Content and hope that you see value in working with us.
    //             </p>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={12} md={4}>
    //       <Card className={styles.activityCard}>
    //         <CardContent className={styles.activityCardContent}>
    //           <div className={styles.headerContainer}>
    //             <h1>Team Members</h1>
    //             <img src={edit} alt="editIcon" height={20} width={20} />
    //           </div>
    //           <div className={styles.teamMembersContent}>
    //             <Avatar src='data:image/jpeg;base64,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' />
    //             <p>Ben Parker</p>
    //           </div>
    //           <div className={styles.teamMembersContent}>
    //             <Avatar src='data:image/jpeg;base64,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' />
    //             <p>Chase Fade</p>
    //           </div>
    //           <div className={styles.teamMembersContent}>
    //             <Avatar src='data:image/jpeg;base64,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' />
    //             <p>Benny Chiou</p>
    //           </div>
    //           <div className={styles.teamMembersContent}>
    //             <Avatar src='data:image/jpeg;base64,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' />
    //             <p>Danielle Barren</p>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={12} md={4}>
    //       <Card className={styles.activityCard}>
    //         <CardContent className={styles.activityCardContent}>
    //           <div className={styles.headerContainer}>
    //             <h1>Budget & Conversion</h1>
    //             <img src={edit} alt="editIcon" height={20} width={20} />
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Budget</h6>
    //             <p>$2,000</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Target Gross Sales Goal</h6>
    //             <p>$100,000</p>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={12} md={8}>
    //       <Card className={styles.activityCard}>
    //         <CardContent className={styles.activityCardContent}>
    //           <div className={styles.headerContainer}>
    //             <h1>Collection</h1>
    //             <img src={edit} alt="editIcon" height={20} width={20} />
    //           </div>
    //           <div className={styles.collectionSubContent}>
    //             <h6>Drop Cuts</h6>
    //             <Grid container spacing={3}>
    //               <Grid className={styles.boxContainer} item sm={4} md={3}>
    //                 <div className={styles.box}></div>
    //                 <p className={styles.boxItem}>Item name/ #</p>
    //                 <p className={styles.boxPrice}>$64.99</p>
    //                 <p className={styles.boxPrice}>15 in stock</p>
    //               </Grid>
    //               <Grid className={styles.boxContainer} item sm={4} md={3}>
    //                 <div className={styles.box}></div>
    //                 <p className={styles.boxItem}>Item name/ #</p>
    //                 <p className={styles.boxPrice}>$64.99</p>
    //                 <p className={styles.boxPrice}>15 in stock</p>
    //               </Grid>
    //               <Grid className={styles.boxContainer} item sm={4} md={3}>
    //                 <div className={styles.box}></div>
    //                 <p className={styles.boxItem}>Item name/ #</p>
    //                 <p className={styles.boxPrice}>$64.99</p>
    //                 <p className={styles.boxPrice}>15 in stock</p>
    //               </Grid>
    //               <Grid className={styles.boxContainer} item sm={4} md={3}>
    //                 <div className={styles.box}></div>
    //                 <p className={styles.boxItem}>Item name/ #</p>
    //                 <p className={styles.boxPrice}>$64.99</p>
    //                 <p className={styles.boxPrice}>15 in stock</p>
    //               </Grid>
    //             </Grid>
    //           </div>
    //           <div className={styles.collectionSubContent}>
    //             <h6>V Necks</h6>
    //             <Grid container spacing={3}>
    //               <Grid className={styles.boxContainer} item sm={4} md={3}>
    //                 <div className={styles.box}></div>
    //                 <p className={styles.boxItem}>Item name/ #</p>
    //                 <p className={styles.boxPrice}>$64.99</p>
    //                 <p className={styles.boxPrice}>15 in stock</p>
    //               </Grid>
    //               <Grid className={styles.boxContainer} item sm={4} md={3}>
    //                 <div className={styles.box}></div>
    //                 <p className={styles.boxItem}>Item name/ #</p>
    //                 <p className={styles.boxPrice}>$64.99</p>
    //                 <p className={styles.boxPrice}>15 in stock</p>
    //               </Grid>
    //               <Grid className={styles.boxContainer} item sm={4} md={3}>
    //                 <div className={styles.box}></div>
    //                 <p className={styles.boxItem}>Item name/ #</p>
    //                 <p className={styles.boxPrice}>$64.99</p>
    //                 <p className={styles.boxPrice}>15 in stock</p>
    //               </Grid>
    //             </Grid>
    //           </div>

    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={12} md={4}>
    //       <Card className={styles.activityCard}>
    //         <CardContent className={styles.activityCardContent}>
    //           <div className={styles.headerContainer}>
    //             <h1>Deliverables</h1>
    //             <img src={edit} alt="editIcon" height={20} width={20} />
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Deliverable Deadline</h6>
    //             <p>October 30, 2020</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Social Platform</h6>
    //             <p>Instagram</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Campaign Type</h6>
    //             <p>Story</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Frame Content Type</h6>
    //             <p>Video</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Frames Required</h6>
    //             <p>5</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Brand tag</h6>
    //             <p>Required- @shopgoodtobe</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Hashtag</h6>
    //             <p>Required- @shopgoodtobe</p>
    //           </div>
    //           <div className={styles.detailSubContent}>
    //             <h6>Post Frequency</h6>
    //             <p>5 posts every 1 month</p>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </Grid>

    //   </Grid>
    // </div>
    <div className={styles.detailContainer}>
      {/* <InfluencerCampaignDetail /> */}
      <BrandCampaignDetail />
    </div>
  );
};

export default CampaignDetail;
