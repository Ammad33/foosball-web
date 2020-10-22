import React from 'react';
import styles from './AddTeamMembers.module.scss';
import { Avatar } from '@material-ui/core';

const membersList = [
  {
    id: 1,
    name: 'Ben Parker',
    avatar:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 2,
    name: 'Chase Fade',
    avatar:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
  },
  {
    id: 3,
    name: 'Benny Chiou',
    avatar:
      'https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Jeromy Wilson',
    avatar:
      'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 5,
    name: 'Amber Miles',
    avatar:
      'https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    name: 'Vaneesa Lee',
    avatar:
      'https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
];

const AddTeamMembers = () => {
  return (
    <div className={styles.mainContainer}>
      {membersList.map((member) => {
        return (
          <div className={styles.memberRow} key={member.id}>
            <Avatar alt='Member Img' src={member.avatar} />
            <p className={styles.memberName}>{member.name}</p>
            <button> Add</button>
          </div>
        );
      })}
    </div>
  );
};

export default AddTeamMembers;
