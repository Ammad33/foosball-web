import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import styles from './TextField.module.scss';

const CssTextField = withStyles({

    root: {
        '& label.Mui-focused': {
            color: '#000000',
            fontFamily: 'Poppins',
            fontSize: '16px !important'
        },
        '& .MuiInput-input': {
            '& placeholder': {
                background: 'black',
                color: 'red !important',
                opacity: '1', /* Firefox */
            }
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid #939393',
                borderRadius: '5px',
                fontFamily: 'Poppins',
                fontSize: '16px'

            },
            '&:hover fieldset': {
                borderColor: '#939393',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid #939393'
            },
        },
    },
})(TextField);


const CustomiseTextField = (props) => <CssTextField InputProps={{ classes: { input: styles.input } }} {...props} />;

export default CustomiseTextField;