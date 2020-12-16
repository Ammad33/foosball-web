import React from 'react';
import styles from './TeamMembers.module.scss';
import { Edit } from 'react-feather';
import { Avatar } from '@material-ui/core';
import ChipButton from './../../../components/ChipButton';


const TeamMembers = ({ onClick, handleEdit, seeAll, brandTeam }) => {
  const team = brandTeam && brandTeam.length > 0 ? brandTeam.slice(0, 5) : [];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h3>Team Members</h3>
        <Edit onClick={() => handleEdit(2)} />
      </div>
      <div className={styles.membersContainer}>
        {brandTeam && brandTeam.length > 0 ?
          <>
            {team.map((member) => {
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
        }

      </div>
      {brandTeam && brandTeam !== null && brandTeam.length > 5 &&
        <div style={{ position: 'absolute', bottom: '20px' }}>
          <ChipButton

            handleClick={() => onClick('TeamMembers')}
            title={'See all'}
            buttonSize={'sm'}
          />
        </div>
      }
    </div>
  );
};

export default TeamMembers;
