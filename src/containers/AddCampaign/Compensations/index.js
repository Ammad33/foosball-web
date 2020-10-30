import React, { useState } from 'react';
import CreateCompensation from './CreateCompensation';
import AddIcon from '@material-ui/icons/Add';
import styles from './Compensations.module.scss';

const Compensations = ({ compensations, handleCompensations }) => {
    const [handleAnother, setAnother] = useState(false);
    return (<div>

        {
            compensations.map((item, index) => <CreateCompensation key={index} index={index + 1} handleAnother={() => setAnother(true)} />)
        }
        {handleAnother &&
            <button className={styles.addDeliverable} onClick={handleCompensations}> <AddIcon /> Add another compensation type</button>
        }
    </div>);
}

export default Compensations;