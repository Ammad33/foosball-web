import React, { useState } from 'react';
import styles from './Message.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ConversationListItem from './ConversationListItem';

const Messages = () => {
  const [active, setActive] = useState('All');

  return (
    <div className={styles.mainContainer}>
      <div className={styles.CampaignHeadingContainer}>
        <div className={styles.CampaignHeading}>
          <span>Messages</span>
          <p>
            Newest to oldest <ExpandMoreIcon fontSize='small' />
          </p>
        </div>
        <button>
          <AddIcon /> New Message
        </button>
      </div>
      <div className={styles.CampaignHeadingButton}>
        <button
          className={active === 'All' ? styles.active : ''}
          onClick={() => setActive('All')}
        >
          All
        </button>
        <button
          className={active === 'Unread' ? styles.active : ''}
          onClick={() => setActive('Unread')}
        >
          Unread
        </button>
        <button
          className={active === 'Read' ? styles.active : ''}
          onClick={() => setActive('Read')}
        >
          Read
        </button>
        <button
          className={active === 'Archived' ? styles.active : ''}
          onClick={() => setActive('Archived')}
        >
          Archived
        </button>
      </div>
      <div className={styles.conversationsContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <ConversationListItem />
        ))}
      </div>
    </div>
  );
};

export default Messages;
