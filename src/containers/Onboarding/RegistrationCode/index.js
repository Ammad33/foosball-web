import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './Registraion.module.scss';

const RegistrationCode = ({
  first,
  second,
  third,
  fourth,
  codeEl1,
  codeEl2,
  codeEl3,
  codeEl4,
  handleFirst,
  handleSecond,
  handleThird,
  handleFourth,
  handleActiveForCode,
}) => {
  function handleCode1Change(e) {
    let key = Number(e.key);
    if (!isNaN(key) || !e.key === null || !e.key === ' ') {
      setTimeout(() => {
        codeEl2.current.focus();
      });
    }
  }
  function handleCode2Change(e) {
    let key = Number(e.key);
    if (!isNaN(key) || !e.key === null || !e.key === ' ') {
      setTimeout(() => {
        codeEl3.current.focus();
      });
    }
  }
  function handleCode3Change(e) {
    let key = Number(e.key);
    if (!isNaN(key) || !e.key === null || !e.key === ' ') {
      setTimeout(() => {
        codeEl4.current.focus();
      });
    }
  }
  useEffect(() => {
    handleActiveForCode();
  }, [first, second, third, fourth]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={3} className={styles.root}>
        <input
          id='input-code-1'
          maxlength='1'
          value={first}
          type='text'
          id='fisrt'
          onChange={handleFirst}
          onKeyDown={handleCode1Change}
          ref={codeEl1}
          autoFocus
        />
      </Grid>
      <Grid item xs={3} className={styles.root}>
        <input
          id='input-code-2'
          maxlength='1'
          value={second}
          type='text'
          id='second'
          ref={codeEl2}
          onChange={handleSecond}
          onKeyDown={handleCode2Change}
        />
      </Grid>
      <Grid item xs={3} className={styles.root}>
        <input
          id='input-code-3'
          maxlength='1'
          value={third}
          type='text'
          id='third'
          ref={codeEl3}
          onChange={handleThird}
          onKeyDown={handleCode3Change}
        />
      </Grid>
      <Grid item xs={3} className={styles.root}>
        <input
          id='input-code-4'
          maxlength='1'
          value={fourth}
          type='text'
          id='fourth'
          ref={codeEl4}
          onChange={handleFourth}
        />
      </Grid>
    </Grid>
  );
};

export default RegistrationCode;
