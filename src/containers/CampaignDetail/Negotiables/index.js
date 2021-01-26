import React from 'react';
import styles from './Negotiables.module.scss';
import { Edit } from 'react-feather';

const Negotiables = ({ handleEdit, data , status}) => {

  const getNegotiablesData = () => {
    if (data.negotiables !== null) {
      const keys = Object.keys(data.negotiables);
      return keys.map((key) => {
        if (data.negotiables[key]) {
          switch (key) {
            case 'monthly_retainer_fee':
              return <p>Monthly Retainer Fee</p>;
            case 'post_fee':
              return <p>Post Fee</p>;
            case 'story_fee':
              return <p>Story Fee</p>;
            case 'campaign_duration':
              return <p>Campaign Duration</p>;
            case 'post_frequency':
              return <p>Post Frequency</p>;
            case 'revenue_share':
              return <p>Revenue Share</p>;
            default:
              return '';
          }
        }
      });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1>Negotiables</h1>
				{(status && status !== 'INVITED')  ? (
            <Edit onClick={() => handleEdit(7)} />
          ) : (
            ''
          )}   
      </div>
      {data?.negotiables ? <>{data.negotiables !== null && getNegotiablesData()}</> : ''}
    </div>
  );
};

export default Negotiables;
