import React, { useState } from 'react';
import styles from './ConversationListItem.module.scss';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
import { Popover } from '@material-ui/core';
import { Download, Copy, Trash, MoreVertical } from 'react-feather';
const ConversationListItem = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
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
      >
        <div className={styles.popOver}>
          <div>
            <Copy /> <p>Archive Conversation</p>
          </div>
          <div>
            <Download /> <p>Download Campaign</p>
          </div>
        </div>
      </Popover>
      <div className={clsx(styles.conversationListItem, styles.readBackground)}>
        <div className={styles.avatarContainer}>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
            }
          />
        </div>
        <div className={styles.titleAndMessageContainer}>
          <span className={styles.title}>Title</span>
          <span className={styles.time}>date</span>
          <p className={styles.message}>
            Hey I sent through the microsite for approval, let me know if you
            got it otherwise I can resubmit.
          </p>
        </div>
        <div className={styles.badgeAndMenu}>
          <MoreVertical onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default ConversationListItem;
