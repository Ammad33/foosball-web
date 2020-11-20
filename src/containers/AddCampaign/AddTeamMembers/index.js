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
        const index = selectedMembers.findIndex(item => item.name === member.name);
        return (
          <div className={styles.memberRow} key={member.id}>
            <Avatar alt='Member Img' src={member.avatar} className={styles.memberAvatar} />
            <p className={styles.memberName}>{member.name}</p>
            {index === -1 ? <button onClick={() => handleAdd(member)}> Add</button> : <CheckCircleIcon onClick={() => handleAdd(member)} />}
          </div>
        );
      })}
    </div>
  );
};

export default AddTeamMembers;
