import React from 'react';
import styles from './Negotiables.module.scss';
import { Grid } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

let options = [
  { id: 1, isChecked: true, text: 'Post Fee' },
  { id: 2, isChecked: true, text: 'Revenue Share %' },
  { id: 3, isChecked: true, text: 'Story Fee' },
  { id: 4, isChecked: true, text: 'Post Frequency' },
  { id: 5, isChecked: true, text: 'Monthly Retainer Fee' },
  { id: 6, isChecked: true, text: 'Campaign Duration' },
];
const Negotiables = () => {
  function toggleOption(option) {
    console.log(option);
    options = options.map((opt) => {
      if (opt.id === option.id) {
        opt.isChecked = !opt.isChecked;
      }
      return opt;
    });
  }
  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>
        Deselect the items you do not wish to negotiate
      </p>
      <div className={styles.optionsContainer}>
        <Grid container spacing={2}>
          {options.map((option) => {
            return (
              <Grid item xs={6}>
                <div className={styles.optionsItem}>
                  {option.isChecked ? (
                    <CheckCircleIcon
                      onClick={() => {
                        toggleOption(option);
                      }}
                    />
                  ) : (
                    <RadioButtonUncheckedIcon
                      onClick={() => {
                        toggleOption(option);
                      }}
                    />
                  )}
                  <span>{option.text}</span>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Negotiables;
