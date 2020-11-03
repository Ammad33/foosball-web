import React from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import styles from './ConfirmationDialog.module.scss';
import globalStyles from '../../index.module.scss';
const CDialog = ({
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  message,
  open,
  ...other
}) => {
  const handleCancel = () => {
    onCancel();
  };

  const handleOk = () => {
    onConfirm();
  };

  return (
    <Dialog
      classes={{ paper: styles.cDialog }}
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      {...other}
    >
      <DialogContent className={styles.cDialogContent}>
        <h3>{message}</h3>
      </DialogContent>
      <div className={styles.cDialogActions}>
        <Button className={styles.confirm} onClick={handleOk}>{confirmText ? confirmText : 'Ok'}</Button>
        <Button
          variant='contained'
          className={globalStyles.dangerButton}
          onClick={handleCancel}
        >
          {cancelText ? cancelText : 'Cancel'}
        </Button>
      </div>
    </Dialog>
  );
};

export default CDialog;
