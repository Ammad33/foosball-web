import React, { useState } from 'react';
import styles from './ColorComponent.module.scss';
import { ChromePicker } from 'react-color';


const ColorComponent = ({ heading, value, handlValue, onClick, open, onChangeComplete, bottom }) => {

    let style = bottom === true ? { position: 'absolute', bottom: '76px' } : { position: 'absolute' }
    let stle1 = bottom === true && open === true ? { position: 'relative' } : {};

    return (

        <div className={styles.colorContainer} style={stle1} >
            {open && bottom === true && < div style={style}> <ChromePicker color={value} onChangeComplete={onChangeComplete} /></div>}
            <h6>{heading}</h6>
            <div className={styles.colorPicker}>
                <div className={styles.colorValue} onClick={onClick} style={{ backgroundColor: value }}></div>
                <input value={value} onChange={handlValue} maxLength={7} />
            </div>
            {open && bottom === undefined && <div style={style}> <ChromePicker color={value} onChangeComplete={onChangeComplete} /></div>}
        </div >

    );

};

export default ColorComponent;