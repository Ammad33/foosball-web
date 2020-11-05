import React, { useEffect } from 'react';
import CreateDeliverable from './CreateDeliverable';
import AddIcon from '@material-ui/icons/Add';
import styles from './Deliverables.module.scss';

const Deliverables = ({ deliveries, handleDeliveries, handleDilverableContent,
    handleDeliverDeadlineDate, deliverableDate,
    handleDeliverableDate, handleActiveForDeliverable }) => {


    useEffect(() => {
        handleActiveForDeliverable();
    }, [deliveries])

    return (<div>
        {
            deliveries.map((item, index) => <CreateDeliverable key={index} deliverableItem={item} index={index} handleDilverableContent={handleDilverableContent}
                handleDeliverDeadlineDate={handleDeliverDeadlineDate}
                handleDeliverableDate={handleDeliverableDate}
                deliverableDate={deliverableDate} />)
        }
        <button className={styles.addDeliverable}
            onClick={handleDeliveries}> <AddIcon /> Add another deliverable</button>
    </div>);
}

export default Deliverables;