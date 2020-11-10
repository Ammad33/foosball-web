import React, { useState, useEffect } from 'react';
import CreateCompensation from './CreateCompensation';
import AddIcon from '@material-ui/icons/Add';
import styles from './Compensations.module.scss';

const Compensations = ({ compensations, handleCompensations, handleCompensationValue,
    handleRemoveCompensation, handleActiveForCompensation }) => {

    const [handleAnother, setAnother] = useState(false);
    handleActiveForCompensation()
    useEffect(() => {

    }, [compensations])

    return (<div>
        {
            compensations.map((item, index) => <CreateCompensation item={item} key={index} compensations={compensations} index={index} handleCompensationValue={handleCompensationValue}
                handleRemoveCompensation={handleRemoveCompensation} handleAnother={() => setAnother(true)} />)
        }
        {handleAnother &&
            <button className={styles.addDeliverable} onClick={handleCompensations}> <AddIcon /> Add another compensation type</button>
        }
    </div>);
}

export default Compensations;