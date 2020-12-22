import React, { useState } from 'react';
import { Edit, Phone } from 'react-feather';
import { Popover } from '@material-ui/core';
import styles from './BrandInformation.module.scss';
import SVG from 'react-inlinesvg';
import { Globe } from 'react-feather';
import EditBrand from './EditBrand';

const Messages = () => {
  return (
    <span>
      <SVG src={require('../../../../assets/Messages.svg')} />
    </span>
  );
};

const BrandInformation = ({ isOwner }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [brandInformation, setBrandInformation] = useState(true);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={styles.brandInfoContainer}>
      <div className={styles.headerContainer}>
        <h1>Brand Information</h1>
        {isOwner ? (
          <Edit
            onClick={() => {
              setEditOpen(true);
              setAnchorEl(null);
            }}
          />
        ) : (
          ''
        )}
      </div>
      <EditBrand
        open={editOpen}
        closeAdd={() => setEditOpen(false)}
        brandName='Brand Name'
        bio='Premium Vitamins and Powders, Tailored to You, Delivered right to your door.'
        email='customerservice@careof.com'
        website='www.careof.com'
        phoneNo='414-444-888'
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      ></Popover>
      {brandInformation ? (
        <>
          <div className={styles.detailSubContent}>
            <p>
              Premium Vitamins and Powders, Tailored to You, Delivered right to
              your door.
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <div className={styles.svgContainer}>
              <Messages />
              <span style={{ marginLeft: '10px' }}>
                {' '}
                customerservice@careof.com{' '}
              </span>
            </div>
            <div className={styles.svgContainer}>
              <Globe />
              <span style={{ marginLeft: '10px' }}> www.careof.com </span>
            </div>
            <div className={styles.svgContainer}>
              <Phone />
              <span style={{ marginLeft: '10px' }}> 414-444-888 </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.detailSubContent}>
            <p>
              Tell influencers a little about your brand and your products in
              your bio.
            </p>
          </div>
          <div className={styles.detailSubContent}>
            <div className={styles.svgContainer}>
              <Messages />
              <span style={{ marginLeft: '10px' }}> </span>
            </div>
            <div className={styles.svgContainer}>
              <Globe />
              <span style={{ marginLeft: '10px' }}></span>
            </div>
            <div className={styles.svgContainer}>
              <Phone />
              <span style={{ marginLeft: '10px' }}></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BrandInformation;
