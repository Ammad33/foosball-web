import React, { useState, useEffect } from 'react';
import styles from './Activity.module.scss';
import moment from 'moment';
const Activity = ({ activities, onClick }) => {
  const [seeAll] = useState(activities && activities.length > 3 ? true : false);

  return (
    <div className={styles.activityContainer}>
      <h1>Activity</h1>
      <div className={styles.mainDiv}>
        {seeAll
          ? activities &&
            activities.map((activity, index) => {
              if (index < 3) {
                return (
                  <div className={styles.activitySubContent}>
                    <span>{activity.time}</span>
                    <div></div>
                    <p>{activity.description} </p>
                  </div>
                );
              } else {
                return '';
              }
            })
          : activities &&
            activities.map((activity) => {
              return (
                <div className={styles.activitySubContent}>
                  <span>{activity.time}</span>
                  <div></div>
                  <p>{activity.description} </p>
                </div>
              );
            })}
      </div>
      {seeAll && <button onClick={() => onClick('Activity')}>See all</button>}
    </div>
  );
};

export default Activity;
