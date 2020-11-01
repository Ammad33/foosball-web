import React from 'react';
import styles from './ReviewAndSend.module.scss';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SVG from 'react-inlinesvg';
const EditSVG = () => {
  return <SVG src={require('../../../assets/edit.svg')} />;
};
const ReviewAndSend = () => {
  return (
    <div class={styles.mainContainer}>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Campaign Details</h3>
          <EditSVG />
        </div>
        <div className={styles.campaigndDetails}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.campaignItemInfo}>
                <p>Campaign Name</p>
                <span>Test Campaign</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.campaignItemInfo}>
                <p>Start Date, Time</p>
                <span>10/01/2020, 24:00</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.campaignItemInfo}>
                <p>End Date, Time</p>
                <span>10/30/2020, 24:00</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.campaignItemInfo}>
                <p>Promotional Discount</p>
                <span>15%</span>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className={styles.campaignItemInfo}>
                <p>Custom Message to Influencer</p>
                <span>
                  Hi Sam, we are so excited for the chance to work with you. We
                  love your content and hope that you see value in working with
                  us.
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Team Members</h3>
          <EditSVG />
        </div>
        <div className={styles.teamMembersContainer}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.teamMemberItem}>
                <Avatar src='https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
                <span>Ben Parker</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.teamMemberItem}>
                <Avatar src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' />
                <span>Benny Chiou</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.teamMemberItem}>
                <Avatar src='https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80' />
                <span>Chase Fade</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.teamMemberItem}>
                <Avatar src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' />
                <span>Marsh Nick</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Budget & Conversion</h3>
          <EditSVG />
        </div>
        <div className={styles.budgetAndConversionContainer}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.budgetContainerItem}>
                <p>Budget</p>
                <span>$2,000</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.budgetContainerItem}>
                <p>Target Gross Sale Goal</p>
                <span>$100,000</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Collection</h3>
          <EditSVG />
        </div>
        <div className={styles.collectionContainer}>
          <div className={styles.collectionSection}>
            <p className={styles.sectionTitle}>Drop Cuts</p>
            <div className={styles.collectionItems}>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
            </div>
          </div>
          <div className={styles.collectionSection}>
            <p className={styles.sectionTitle}>V Neck</p>
            <div className={styles.collectionItems}>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
              <div className={styles.collectionItem}>
                <div className={styles.itemPlaceholderBox}></div>
                <p className={styles.itemText}>Item name / #</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Deliverables</h3>
          <EditSVG />
        </div>
        <div className={styles.deliverablesContainer}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Deliverable Deadline</p>
                <span>October 30, 2020</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Social Platform</p>
                <span>Instagram</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Campaign Type</p>
                <span>Story</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Frame Content Type</p>
                <span>Video</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Frames Required</p>
                <span>5</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Brand tag</p>
                <span>Required - @shopgoodtobe</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Hashtag</p>
                <span>Required - #shopgoodtobe</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.deliverableItem}>
                <p>Post Frequency</p>
                <span>5 posts every 1 month</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Compensation</h3>
          <EditSVG />
        </div>
        <div className={styles.compensationContainer}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.compensationItem}>
                <p>Compensation Type</p>
                <span>Required - #shopgoodtobe</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.compensationItem}>
                <p>Revenue Share Percentage</p>
                <span>5 posts every 1 month</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Negotiables</h3>
          <EditSVG />
        </div>
        <div className={styles.negotiablesContainer}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.negotiableItem}>
                <p>Post Fee</p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.negotiableItem}>
                <p>Story Fee</p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.negotiableItem}>
                <p>Campaign Duration</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class={styles.section}>
        <div className={styles.titleAndAction}>
          <h3>Influencer</h3>
          <EditSVG />
        </div>
        <div className={styles.influencerContainer}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.influencerItem}>
                <Avatar
                  className={styles.avatarMedium}
                  src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
                />
                <p>@samozkural</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndSend;
