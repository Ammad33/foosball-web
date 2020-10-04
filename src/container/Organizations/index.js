import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './../../styles/Dashboard.module.css';

const Organizations = () => {
    return (<div>
          <div>
      <div className={styles.title}>
        <h1>ORGANIZATION NAME</h1>
        <Button variant='contained' color='primary'>
          Add Company
        </Button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.flexGrow5}>
          <div className={styles.contentContainerSectionHeaderOrg}>
            <h3>Organization Address</h3>
            <Button variant='outlined' className={styles.buttonMargin} color='primary'>
            CREATE ORGANIZATION
          </Button>
          </div>
          <div className={styles.details}>
            <p><strong>Street:</strong></p>
            <p><strong>City:</strong></p>
            <p><strong>State:</strong></p>
            <p><strong>ZipCode:</strong></p>
            <p><strong>Country:</strong></p>
            <p>
              <strong>Company ID: </strong>00001
            </p>
          </div>
        </div>
        <div className={styles.flexGrow5}>
          <div className={styles.contentContainerSectionHeaderOrg}>
            <h3>Account Profile</h3>
            <Button variant='outlined' className={styles.buttonMargin} color='primary'>
             ACCOUNT SETUP
          </Button>
          </div>
          <div className={styles.accountProfile}>
            <div>
              <p>
                <strong>First </strong> <strong>Last</strong>
              </p>
              <p>
                <strong>Email: </strong>lori.ajax@bbc.ca.gov
              </p>
              <p>
                <strong>Your Role: </strong>Company Admin
              </p>
              <p>
                <strong>Title: </strong> CFO
              </p>
              <p>
                <strong>Office: </strong>None
              </p>
              <p>
                <strong>Cell</strong> None
              </p>
              <p>
                <strong>Member ID: </strong>64738294
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.emailSection}>
        <h3>Alternate Email</h3>
        <p>For easy online ID and password recovery assistance, please provide alternate email address. </p>
        <div className={styles.emailContainer}>
          <TextField
            className={styles.emailInput}
            id='alternate-email'
            label='Alternate Email'
            variant='outlined'
          />
          <Button variant='outlined' color='primary'>
            Verify Email
          </Button>
        </div>
      </div>
    </div>
  
    </div>);
}

export default Organizations;