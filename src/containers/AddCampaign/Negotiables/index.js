import React from 'react';
import styles from './Negotiables.module.scss';
import { Grid } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Negotiables = ({ selectedNegotiable, toggleNegotiable }) => {

  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>
        Deselect the items you do not wish to negotiate
      </p>
      <div className={styles.optionsContainer}>
        <Grid container spacing={2}>
          {selectedNegotiable.map((option) => {
            return (
              <Grid item xs={6}>
                <div className={styles.optionsItem}>
                  {option.isChecked ? (
                    <CheckCircleIcon
                      onClick={() => {
                        toggleNegotiable(option);
                      }}
                    />
                  ) : (
                      <RadioButtonUncheckedIcon
                        onClick={() => {
                          toggleNegotiable(option);
                        }}
                      />
                    )}
									<span
											style= {{paddingLeft: "21px"}}
											onClick={() => {
                    toggleNegotiable(option);
                  }}>{option.text}</span>
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
