import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { Dialog, Button } from '@material-ui/core';
import styles from './AddCampaign.module.scss';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-85% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 10,
    borderRadius: 0,
  },
})(StepConnector);
function QontoStepIcon(props) {
  return '';
}
function getSteps() {
  return [
    'Initial Step',
    'Campaign Details',
    'Add Team Members',
    'Budget & Conversion Goal',
    'Create Collection',
    'Deliverables',
    'Compensation',
    'Negotiables',
    'Choose Influencer',
    'Review And Send',
  ];
}
const AddCampaign = ({ open }) => {
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = (activeSetp) => {
    if (activeSetp !== 9) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function renderStepComponent(activeStep) {
    return <div>Hello</div>;
  }
  return (
    <Dialog
      classes={{ paper: styles.addCampaignDialog }}
      aria-labelledby='confirmation-dialog-title'
      open={open}
    >
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <div>
              <p>
                Step {activeStep} of {steps.length - 1}
              </p>
              <p>{steps[activeStep]}</p>
            </div>
            <div>Close Icon</div>
          </div>

          <div className={styles.stepperAndComponent}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<QontoConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>{renderStepComponent(activeStep)}</div>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            onClick={() => handleNext(activeStep)}
            variant='contained'
            color='primary'
          >
            Next
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddCampaign;
