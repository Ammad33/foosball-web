import React, { useState } from 'react';
import styles from './ColorComponent.module.scss';
import { ChromePicker } from 'react-color';


const ColorComponent = ({ heading, value, handlValue, onClick, open, onChangeComplete, bottom }) => {

    let style = bottom === true ? { position: 'absolute', bottom: '94px' } : { position: 'absolute' }
    return (

        <div className={styles.colorContainer} >
            <h6>{heading}</h6>
            <div className={styles.colorPicker}>
                <div className={styles.colorValue} onClick={onClick} style={{ backgroundColor: value }}></div>
                <input value={value} onChange={handlValue} maxLength={7} />
            </div>
            {open && <div style={style}> <ChromePicker color={value} onChangeComplete={onChangeComplete} /></div>}
        </div>

    );

};

export default ColorComponent;