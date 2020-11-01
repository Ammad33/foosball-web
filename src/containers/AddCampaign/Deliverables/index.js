import React, { useState } from 'react';
import CreateDeliverable from './CreateDeliverable';
import AddIcon from '@material-ui/icons/Add';
import styles from './Deliverables.module.scss';

const Deliverables = ({ deliveries, handleDeliveries, handleDilverableContent,
    handleDeliverDeadlineDate }) => {

    return (<div>
        {
            deliveries.map((item, index) => <CreateDeliverable key={index} deliverableItem={item} index={index} handleDilverableContent={handleDilverableContent}
                handleDeliverDeadlineDate={handleDeliverDeadlineDate} />)
        }
        <button className={styles.addDeliverable} onClick={handleDeliveries}> <AddIcon /> Add another deliverable</button>
    </div>);
}

export default Deliverables;