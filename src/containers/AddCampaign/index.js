import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent } from '@material-ui/core';
import styles from './AddCampaign.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import AddCampaignDetails from './AddCampaignDetails';
import AddTeamMembers from './AddTeamMembers';
import BudgetConversionGoal from './BudgetConversionGoal';
import ChooseInfluencer from './ChooseInfluencer';
import Negotiables from './Negotiables';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Collection from './Collections';
import Deliverables from './Deliverables';
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
  const history = useHistory();
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
  const [collection, setCollection] = useState('');
  const [collectionItems, setCollectItems] = useState([]);

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 1:
        return (
          <AddCampaignDetails
            campaignName={campaignName}
            startDate={startDate}
            endDate={endDate}
            startTime={startTime}
            endTime={endTime}
            discount={discount}
            percentage={percentage}
            customeMessage={customeMessage}
            handleCampaignName={(e) => {
              setCampaignName(e.target.value);
              filledForm();
            }}
            handleStartDate={(e) => {
              setStartDate(e.target.value);
              filledForm();
            }}
            handleEndDate={(e) => {
              setEndDate(e.target.value);
              filledForm();
            }}
            handleStartTime={(e) => {
              setStartTime(e.target.value);
              filledForm();
            }}
            handleEndTime={(e) => {
              setEndTime(e.target.value);
              filledForm();
            }}
            handlePercentage={(e) => {
              setPercentage(e.target.value);
              filledForm();
            }}
            handleDiscount={(e) => {
              setDiscount(e.target.value);
              filledForm();
            }}
            handleCustomMessage={(e) => {
              setCustomMessage(e.target.value);
              filledForm();
            }}
          />
        );
      case 2:
        return <AddTeamMembers />;
      case 3:
        return <BudgetConversionGoal />;
      case 4:
        return (
          <Collection
            collection={collection}
            handleCollection={(e) => setCollection(e.target.value)}
            collectionItems={collectionItems}
          />
        );
      case 5:
        return (
          <Deliverables />
        );
      case 7:
        return <Negotiables />;
      case 8:
        return <ChooseInfluencer />;
      default:
        return 'Unknown step';
    }
  };

  const filledForm = () => {
    if (
      (campaignName !== '' &&
        startDate !== '' &&
        endDate !== '' &&
        startTime !== '',
        endTime !== '' &&
        discount !== '' &&
        percentage !== '' &&
        customeMessage !== '')
    ) {
      setActiveNext(true);
    } else setActiveNext(false);
  };

  const handleNext = (activeSetp) => {
    if (activeSetp !== 9) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Dialog
      classes={{ paper: styles.addCampaignDialog }}
      aria-labelledby='confirmation-dialog-title'
      open={open}
    >
      <div className={styles.mainContainer}>
        <div className={styles.campaignSideabr}>
          <h2 className={styles.heading}>Create a Campaign</h2>
          <div className={styles.setpsContainer}>
            {steps.map((label, index) => (
              <>
                {index > 0 ? (
                  <div className={styles.stepItem}>
                    {activeStep == index ? (
                      <FiberManualRecordIcon />
                    ) : (
                        <RadioButtonUncheckedIcon />
                      )}
                    <span>{label}</span>
                  </div>
                ) : (
                    ''
                  )}
              </>
            ))}
          </div>
        </div>
        <div className={styles.campaignContainer}>
          <DialogTitle className={styles.dialogTitle}>
            <div className={styles.header}>
              {activeStep > 1 ? (
                <KeyboardArrowLeftIcon fontSize='large' onClick={handleBack} />
              ) : (
                  <div></div>
                )}

              <CloseIcon fontSize='large' onClick={handleCancel} />
            </div>
          </DialogTitle>
          <DialogContent className={styles.dialogContent}>
            <div className={styles.stepperAndComponent}>
              <div className={styles.stepperNumberAndNameContainer}>
                <p>
                  Step {activeStep} of {steps.length - 1}
                </p>
                <h2>{steps[activeStep]}</h2>
              </div>
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
              <div>{getStepContent(activeStep)}</div>
            </div>
          </DialogContent>

          <div className={styles.actions}>
            <div className={styles.finishLater}>
              {activeNext ? <span>Save and finish later</span> : null}
            </div>
            <button
              onClick={() => handleNext(activeStep)}
              disabled={!activeNext}
              className={clsx(
                styles.nextButton,
                activeNext ? styles.activeButton : styles.inActiveButton
              )}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddCampaign;
