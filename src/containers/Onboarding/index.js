import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, SvgIcon } from '@material-ui/core';
import styles from './Onboarding.module.scss';
import SVG from 'react-inlinesvg';
import RegistrationCode from './RegistrationCode';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import clsx from 'clsx';
import UserTypes from './UserType';
import BrandName from './BrandName';
import DisplayName from './DisplayName';
import Billing from './Billing';
import { useHistory } from 'react-router-dom';

const ChevronSVG = () => {
  return <SVG src={require('../../assets/chevron-down.svg')} />;
};


const CheckCircleIconSvg = (prop) => {
  return (
    <SvgIcon {...prop}>
      <title>751219A7-40EC-48C7-ADA1-FA7C07914000</title>
      <g
        id='Page'
        stroke='none'
        stroke-width='1'
        fill='none'
        fill-rule='evenodd'
      >
        <g
          id='Brand---Create-a-new-Campaign---Step-5-Deliverables-–-Checked'
          transform='translate(-845.000000, -612.000000)'
          fill-rule='nonzero'
        >
          <g id='Wizard' transform='translate(845.000000, 130.000000)'>
            <g id='Check' transform='translate(0.000000, 482.000000)'>
              <rect
                id='Rectangle-40'
                fill='#FFFFFF'
                x='0'
                y='0'
                width='31'
                height='31'
                rx='15.5'
              ></rect>
              <path
                d='M22.0180859,11.518 L13.0544019,20.4816841 L8.98,16.4072822'
                id='check'
                stroke='#7B5CD9'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

//******Stepper Element Design *************/

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

/********* Steppper Labels ****************/



const Onboarding = () => {
	const history = useHistory();
  const [activeStep, setActiveStep] = useState(1);
  const [activeNext, setActiveNext] = useState(false);
  const [activeSave, setActiveSave] = useState(false);
  const [userType, setUserType] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [brandName, setBrandName] = useState('')
  const [displayName, setDisplayName] = useState('');
  const [stepsName, setStepsNames] = useState(['Initial Step',
    'User Type']);

  const subHeading = ['', 'Tell us what type of user you are so wen can personalize your experince',
    'Enter the registration code your received in your email',
    `This is the name that will apear on your brand's public profile`,
    'Setup your primary and secondary billing methods']

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = (activeSetp, e) => {
    if (activeSetp !== 4) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
		if (activeSetp === 4) {
			history.push('/signup');
		}
  };

  const handleUserType = (value) => {
    setUserType(value);
    if (value === 'brand') {
      let sets = ['Initial Step',
        'User Type', 'Registration Code',
        'Brand Name',
        'Billing'];
      setStepsNames(sets)
    } else {
      let sets = ['Initial Step',
        'User Type', 'Registration Code',
        'Display Name',
        'Billing'];
      setStepsNames(sets)
    }
  }

  const setActiveNextForUserType = () => {
    if (userType !== '') {
      setActiveNext(true)
    } else setActiveNext(false);
  }

  const setActiveForCode = () => {

    if (first !== '' && second !== '' && third !== '' && fourth !== '') {
      setActiveNext(true)
    } else setActiveNext(false);
  };

  const setActiveForBrand = () => {
    if (brandName !== '' && userType === 'brand') {
      setActiveNext(true)
    } else setActiveNext(false);
  }

  const setActiveForDisplay = () => {
    if (displayName !== '' && userType !== 'brand') {
      setActiveNext(true)
    } else setActiveNext(false);
  }

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 1:
        return (
          <UserTypes userType={userType} handleUserType={handleUserType} handleActiveForUserType={setActiveNextForUserType} />
        );
      case 2:
        return <RegistrationCode
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          handleFirst={(e) => setFirst(e.target.value)}
          handleSecond={(e) => setSecond(e.target.value)}
          handleThird={(e) => setThird(e.target.value)}
          handleFourth={(e) => setFourth(e.target.value)}
          handleActiveForCode={setActiveForCode}
        />;
      case 3:
        return userType === 'brand' ? <BrandName brandName={brandName} handlebrandName={(e) => setBrandName(e.target.value)} handleActiveForBrand={setActiveForBrand} />
          : <DisplayName displayName={displayName} handleDisplayName={(e) => setDisplayName(e.target.value)} handleActiveForDisplay={setActiveForDisplay} />;
      case 4:
        return <Billing />;
      default:
        return 'Unknown step';
    }
  };
  return (
    <>
      <Dialog
        classes={{ paper: styles.onboardingDialog }}
        aria-labelledby='confirmation-dialog-title'
        open={true}
      >
        <div className={styles.mainContainer}>
          <div className={styles.onboardingSideabr}>
            <h2 className={styles.heading}>Setup your account</h2>
            <div className={styles.setpsContainer}>
              {stepsName.map((label, index) => (
                <>
                  {index > 0 ? (
                    <div key={index} className={styles.stepItem}>
                      {activeStep == index ? (
                        <div className={styles.active}></div>
                      ) : activeStep < index ? (
                        <RadioButtonUncheckedIcon />
                      ) : (
                            <CheckCircleIconSvg viewBox='0 0 31 31' />
                          )}
                      <span
                        className={
                          activeStep == index
                            ? styles.activeLabel
                            : styles.inActiveLabel
                        }
                      >
                        {label}
                      </span>
                    </div>
                  ) : (
                      ''
                    )}
                  {index > 0 ? (
                    <div key={index} className={styles.stepItem}>
                      {activeStep > index ? (
                        <div className={styles.activeBar} />
                      ) : (
                          <div className={styles.inActiveBar} />
                        )}
                    </div>
                  ) : (
                      ''
                    )}
                </>
              ))}
            </div>
          </div>
          <div className={styles.onboardingContainer}>
            <DialogTitle className={styles.dialogTitle}>
              <div className={styles.header}>
                {activeStep > 1 ? (
                  <span onClick={handleBack}>
                    <ChevronSVG />
                  </span>
                ) : (
                    <div className={activeStep === 1 ? styles.header : ''} />
                  )}
              </div>
              <div className={styles.stepperAndComponent}>
                <div className={styles.stepperNumberAndNameContainer}>
                  <p>
                    STEP {activeStep} OF {stepsName.length - 1}
                  </p>
                  <h2>{stepsName[activeStep]}</h2>
                  <p className={styles.subHeading}>{activeStep === 3 && userType !== 'brand' ? 'This is the name that appears on your public profile, use what will be the most recognizable' : subHeading[activeStep]}</p>
                </div>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<QontoConnector />}
                  className={styles.stepperContainer}
                >
                  {stepsName.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </DialogTitle>
            <DialogContent className={styles.dialogContent}>
              <div className={styles.stepperAndComponent}>
                <div className={styles.stepperContent}>
                  {getStepContent(activeStep)}
                </div>
              </div>
            </DialogContent>

            <div className={styles.actions}>
              <div className={styles.finishLater}>
                {activeSave ? (
                  <span
                    onClick={() => {
                      console.log('Test');
                    }}
                  >
                    Save and finish later
                  </span>
                ) : null}
              </div>
              <button
                onClick={(e) => handleNext(activeStep, e)}
                className={clsx(
                  styles.nextButton,
                  activeNext ? styles.activeButton : styles.inActiveButton
                )}
                disabled={!activeNext}
              >
                {activeStep == 4 ? 'Complete' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Onboarding;