import React, { useState } from 'react';
import styles from './ConversationListItem.module.scss';
import mainStyles from './../../../index.module.scss';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Popover } from '@material-ui/core';
import { Download, MoreVertical, Archive } from 'react-feather';
const ConversationListItem = ({ conversation, handleItemClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const getTitle = (members) => {
    switch (members.length) {
      case 1:
        return members[0].memberName;
      case 2:
        return `${members[0].memberName}, ${members[1].memberName}`;
      case 3:
        return `${members[0].memberName}, ${members[1].memberName}, ${members[2].memberName}`;
      case 4:
        return `${members[0].memberName}, ${members[1].memberName}, ${members[2].memberName}, ${members[3].memberName}`;
      default:
        return `${members[0].memberName}, ${members[1].memberName}, ${
          members[2].memberName
        }, ${members[3].memberName}, +${members.length - 4} others`;
    }
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
            <Archive /> <p>Archive Conversation</p>
          </div>
          <div>
            <Download /> <p>Download Campaign</p>
          </div>
        </div>
      </Popover>
      <div
        className={clsx(
          styles.conversationListItem,
          conversation.unreadMessages > 0
            ? styles.unreadBackground
            : styles.readBackground
        )}
        onClick={() => handleItemClick(conversation)}
      >
        <div className={styles.avatarContainer}>
          {conversation.members.length > 1 ? (
            <AvatarGroup max={5}>
              {conversation.members.map((member, index) => (
                <Avatar key={index} src={member.imgUrl} />
              ))}
            </AvatarGroup>
          ) : (
            <Avatar
              src={
                'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
              }
            />
          )}
        </div>
        <div className={styles.titleAndMessageContainer}>
          <span className={styles.title}>{getTitle(conversation.members)}</span>
          <span className={styles.time}>{conversation.time}</span>
          <p className={styles.message}>{conversation.message}</p>
        </div>
        <div className={styles.badgeAndMenu}>
          {conversation.unreadMessages ? (
            <span className={mainStyles.countBadge}>
              {conversation.unreadMessages}
            </span>
          ) : (
            ''
          )}
          <MoreVertical onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default ConversationListItem;
