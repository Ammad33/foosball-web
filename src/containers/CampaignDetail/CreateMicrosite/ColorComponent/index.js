import React, { useState } from 'react';
import styles from './ColorComponent.module.scss';


const ColorComponent = ({ heading, value, handlValue }) => {

    return (
        <div className={styles.colorContainer}>
            <h6>{heading}</h6>
            <div className={styles.colorPicker}>
                <div className={styles.colorValue} style={{ backgroundColor: value }}></div>
                <input value={value} onChange={handlValue} maxlength={7} />
            </div>
        </div>
    );

};

export default ColorComponent;