import React from 'react';
import styles from './TeamMembers.module.scss';
import { Edit } from 'react-feather';
import { Avatar } from '@material-ui/core';
import ChipButton from './../../../components/ChipButton';


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
