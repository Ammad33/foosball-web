import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import ChipButton from '../../../components/ChipButton';
import TextField from '../../../components/TextField';
import styles from './TeamMembersDetail.module.scss';
import * as _ from 'lodash';

const addedTeamMembers = [
  {
    id: 1,
    name: 'Ben Parker',
    avatar:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    name: 'Chase Fade',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 3,
    name: 'Benny Chiou',
    avatar:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 4,
    name: 'Alan Walker',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 5,
    name: 'Chris Gayle',
    avatar:
      'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
  },
  {
    id: 6,
    name: 'Mark Zan',
    avatar:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
];

const allTeamMembers = [
  {
    id: 7,
    name: 'Babar Azam',
    avatar:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 8,
    name: 'Ben Dunk',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 9,
    name: 'David Weise',
    avatar:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 10,
    name: 'Morgan Markel',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 12,
    name: 'Darren Samy',
    avatar:
      'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
  },
  {
    id: 13,
    name: 'Keiron Pollard',
    avatar:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
];

const TeamMembersDetail = ({
  addInTeam,
  search,
  handleSearch,
  selectedMembers,
  team }) => {

  return (
    <div className={styles.mainContainer}>
      <h3>Team Members</h3>
      <div className={styles.membersContainer}>
        <div className={styles.addedMembersList}>
          {selectedMembers.map((member) => {
            return (
              <div className={styles.listItem} key={member.id}>
                <Avatar src={member.imageUrl} />
                <span>{member.fullName}</span>
              </div>
            );
          })}
        </div>
        <p className={styles.memberHeading}>Add other members to this Campaign</p>
        <TextField
          id='outlined-basic'
          fullWidth
          type='text'
          label='Search or invite by email address'
          variant='outlined'
          value={search}
          onChange={handleSearch}
        />
        <div style={{ marginTop: '35px' }}>
          <div className={styles.addMembersList}>
            {team.map((member) => {
              return (
                <div className={styles.listItem} key={member.id}>
                  <Avatar src={member.imageUrl} />
                  <span>{member.fullName}</span>
                  <ChipButton
                    handleClick={() => addInTeam(member)}
                    title={'Add'}
                    buttonSize={'sm'}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersDetail;
