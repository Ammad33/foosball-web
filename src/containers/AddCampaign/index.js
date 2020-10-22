import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { Dialog, Button, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import styles from './AddCampaign.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import AddCampaignDetails from './AddCampaignDetails';
import AddTeamMembers from './AddTeamMembers';
import BudgetConversionGoal from './BudgetConversionGoal';
import clsx from 'clsx';

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
const AddCampaign = ({ open, handleCancel }) => {
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(1);
  const [activeNext, setActiveNext] = useState(false);

  const [campaignName, setCampaignName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [discount, setDiscount] = useState('');
  const [percentage, setPercentage] = useState('');
  const [customeMessage, setCustomMessage] = useState('');

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 1:
        return <AddCampaignDetails
          campaignName={campaignName}
          startDate={startDate}
          endDate={endDate}
          startTime={startTime}
          endTime={endTime}
          discount={discount}
          percentage={percentage}
          customeMessage={customeMessage}
          handleCampaignName={(e) => { setCampaignName(e.target.value); filledForm() }}
          handleStartDate={(e) => { setStartDate(e.target.value); filledForm() }}
          handleEndDate={(e) => { setEndDate(e.target.value); filledForm() }}
          handleStartTime={(e) => { setStartTime(e.target.value); filledForm() }}
          handleEndTime={(e) => { setEndTime(e.target.value); filledForm() }}
          handlePercentage={(e) => { setPercentage(e.target.value); filledForm() }}
          handleDiscount={(e) => { setDiscount(e.target.value); filledForm() }}
          handleCustomMessage={(e) => { setCustomMessage(e.target.value); filledForm() }}
        />;
      case 2:
        return <AddTeamMembers />;
      case 3:
        return <BudgetConversionGoal />;
      default:
        return 'Unknown step';
    }
  }

  const filledForm = () => {
    if (campaignName !== '' && startDate !== '' && endDate !== '' && startTime !== '', endTime !== '' && discount !== '' && percentage !== '' && customeMessage !== '') {
      setActiveNext(true);
    } else setActiveNext(false);

  }

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
      <DialogTitle>
        <div className={styles.header}>
          {activeStep > 1 ?
            <KeyboardArrowLeftIcon fontSize='large' onClick={handleBack} />
            : <div></div>
          }
          <div className={styles.stepperNumberAndNameContainer}>
            <p>
              Step {activeStep} of {steps.length - 1}
            </p>
            <h2>{steps[activeStep]}</h2>
          </div>
          <CloseIcon fontSize='large' onClick={handleCancel} />
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
        </div>
      </DialogTitle>
      <DialogContent>
        <div className={styles.contentContainer}>
          {getStepContent(activeStep)}
        </div>
      </DialogContent>
      <DialogActions>
        <div className={styles.actions}>
          <div className={styles.finishLater}>
            {activeNext ?
              <span>
                Save and finish later
            </span>
              : null}
          </div>
          <button
            onClick={() => handleNext(activeStep)}
            disabled={!activeNext}
            className={clsx(
              styles.nextButton,
              activeNext ?
                styles.activeButton : styles.inActiveButton
            )}
          >
            Next
          </button>
        </div>
      </DialogActions>
      {/* </div> */}
    </Dialog >
  );
};

export default AddCampaign;
