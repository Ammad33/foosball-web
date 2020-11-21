import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import ChipButton from '../../../components/ChipButton';
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

const TeamMembersDetail = () => {
  const [addedMembers, setMembers] = useState(addedTeamMembers);
  const [teamMembers, setTeamMembers] = useState(allTeamMembers);

  const addTeamMemberClick = (member) => {
    let addedTeamMembers = [...addedMembers, member];
    let remainingTeamMembers = [...teamMembers];
    _.remove(remainingTeamMembers, (mem) => mem.id === member.id);
    setMembers(addedTeamMembers);
    setTeamMembers(remainingTeamMembers);
    console.log(member);
  };

  return (
    <div className={styles.mainContainer}>
      <h3>Team Members</h3>
      <div className={styles.membersContainer}>
        <div className={styles.addedMembersList}>
          {addedMembers.map((member) => {
            return (
              <div className={styles.listItem} key={member.id}>
                <Avatar src={member.avatar} />
                <span>{member.name}</span>
              </div>
            );
          })}
        </div>
        <div>
          <div className={styles.addMembersList}>
            {teamMembers.map((member) => {
              return (
                <div className={styles.listItem} key={member.id}>
                  <Avatar src={member.avatar} />
                  <span>{member.name}</span>
                  <ChipButton
                    handleClick={() => addTeamMemberClick(member)}
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
