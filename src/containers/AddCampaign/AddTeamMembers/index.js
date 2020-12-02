import React, { useEffect } from 'react';
import styles from './AddTeamMembers.module.scss';
import { Avatar } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const AddTeamMembers = ({ selectedMembers, handleAdd, members, handleActiveNext }) => {

  useEffect(() => {
    handleActiveNext()
  }, []);

  return (
    <div className={styles.mainContainer}>
      {members.map((member) => {
        const index = selectedMembers.findIndex(item => item === member.user.id);
        return (
          <div className={styles.memberRow} key={member.user.id}>
            <Avatar alt='Member Img' src={member.user.imageUrl && member.user.imageUrl !== null ? member.user.imageUrl : ''} className={styles.memberAvatar} />
            <p className={styles.memberName}>{member.user.fullName}</p>
            {index === -1 ? <button onClick={() => handleAdd(member.user)}> Add</button> : <CheckCircleIcon className={styles.svg} onClick={() => handleAdd(member.user)} />}
          </div>
        );
      })}
    </div>
  );
};

export default AddTeamMembers;
