import React from 'react';
import styles from './TeamMembers.module.scss';
import { Edit } from 'react-feather';
import { Avatar } from '@material-ui/core';
import ChipButton from './../../../components/ChipButton';

const members = [
  {
    name: 'Ben Parker',
    img:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Chase Fade',
    img:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    name: 'Benny Chiou',
    img:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Mark Mian',
    img:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    name: 'Harry Jim',
    img:
      'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
  },
];

const TeamMembers = ({ onClick, handleEdit, seeAll, brandTeam }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h3>Team Members</h3>
        <Edit onClick={() => handleEdit(2)} />
      </div>
      <div className={styles.membersContainer}>
        {brandTeam && brandTeam.length > 0 ?
          <>
            {brandTeam.map((member) => {
              return (
                <div className={styles.memberItem}>
                  <Avatar src={member.imageUrl} />
                  <span>{member.fullName}</span>
                </div>
              );
            })}
          </>
          :
          null
          // <>
          //   {members.map((member) => {
          //     return (
          //       <div className={styles.memberItem}>
          //         <Avatar src={member.img} />
          //         <span>{member.name}</span>
          //       </div>
          //     );
          //   })}
          // </>
        }

      </div>
      {brandTeam && brandTeam !== null && brandTeam.length > 5 &&
        <ChipButton
          handleClick={() => onClick('TeamMembers')}
          title={'See all'}
          buttonSize={'sm'}
        />}
    </div>
  );
};

export default TeamMembers;
