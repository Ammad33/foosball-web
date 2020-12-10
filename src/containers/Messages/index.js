import React, { useState } from 'react';
import styles from './Message.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ConversationListItem from './ConversationListItem';
import * as _ from 'lodash';

const allConversations = [
  {
    archived: false,
    unreadMessages: 3,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: false,
    unreadMessages: 0,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: false,
    unreadMessages: 2,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: false,
    unreadMessages: 0,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: false,
    unreadMessages: 1,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: false,
    unreadMessages: 0,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Spread Fashion',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Alex Graza',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: false,
    unreadMessages: 0,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Donna McAlister',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'TJ Tam',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Greg Harshaw',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Steve Mansouri',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Maan Hamadeh',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Tonny Ann',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: true,
    unreadMessages: 0,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: true,
    unreadMessages: 0,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
  {
    archived: true,
    unreadMessages: 2,
    time: '12:49pm',
    members: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        memberName: 'Sam Ozkural',
      },
    ],
    message:
      'Hey I sent through the microsite for approval, let me know if you got it otherwise I can resubmit.',
  },
];

const Messages = () => {
  const [active, setActive] = useState('All');
  const [conversations, setConversations] = useState(allConversations);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [displayedConversations, setDisplayedConversations] = useState(
    allConversations
  );

  const filterConversations = (filterType) => {
    let convs = [...conversations];
    switch (filterType) {
      case 'All':
        setDisplayedConversations(convs);
        break;
      case 'Unread':
        convs = _.filter(convs, 'unreadMessages');
        setDisplayedConversations(convs);
        break;
      case 'Read':
        convs = _.filter(convs, ['unreadMessages', 0]);
        setDisplayedConversations(convs);
        break;
      case 'Archived':
        convs = _.filter(convs, 'archived');
        setDisplayedConversations(convs);
        break;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.conversationsSection}>
        <div className={styles.headingAndButtonsContainer}>
          <div className={styles.headingAndDropdown}>
            <span>Messages</span>
            <p>
              Newest to oldest <ExpandMoreIcon fontSize='small' />
            </p>
          </div>
          <button>
            <AddIcon /> New Message
          </button>
        </div>
        <div className={styles.messageFiltersContainer}>
          <button
            className={active === 'All' ? styles.active : ''}
            onClick={() => {
              setActive('All');
              filterConversations('All');
            }}
          >
            All
          </button>
          <button
            className={active === 'Unread' ? styles.active : ''}
            onClick={() => {
              setActive('Unread');
              filterConversations('Unread');
            }}
          >
            Unread
          </button>
          <button
            className={active === 'Read' ? styles.active : ''}
            onClick={() => {
              setActive('Read');
              filterConversations('Read');
            }}
          >
            Read
          </button>
          <button
            className={active === 'Archived' ? styles.active : ''}
            onClick={() => {
              setActive('Archived');
              filterConversations('Archived');
            }}
          >
            Archived
          </button>
        </div>
        <div className={styles.conversationsContainer}>
          {displayedConversations.map((conversation, index) => (
            <ConversationListItem
              handleItemClick={(conversation) => {
                setSelectedConversation(conversation);
                console.log('set conversation ', conversation);
              }}
              conversation={conversation}
              key={index}
            />
          ))}
        </div>
      </div>
      {/* {selectedConversation ? (
        <div style={{ width: '885px' }}>Msg Details</div>
      ) : (
        'Not selected'
      )} */}
    </div>
  );
};

export default Messages;
