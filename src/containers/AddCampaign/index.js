import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent } from '@material-ui/core';
import styles from './AddCampaign.module.scss';
import AddCampaignDetails from './AddCampaignDetails';
import AddTeamMembers from './AddTeamMembers';
import BudgetConversionGoal from './BudgetConversionGoal';
import ChooseInfluencer from './ChooseInfluencer';
import Negotiables from './Negotiables';
import ReviewAndSend from './ReviewAndSend';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Collection from './Collections';
import Deliverables from './Deliverables';
import Compensations from './Compensations';
import clsx from 'clsx';
import moment from 'moment';
import CDialog from '../../components/ConfirmationDialog';
import Translation from '../../assets/translation.json';
import SVG from 'react-inlinesvg';

const XSVG = () => {
  return <SVG src={require('../../assets/x.svg')} />;
};

const ChevronSVG = () => {
  return <SVG src={require('../../assets/chevron-down.svg')} />;
};

let negotialbleOptions = [
  { id: 1, isChecked: true, text: 'Post Fee' },
  { id: 2, isChecked: true, text: 'Revenue Share %' },
  { id: 3, isChecked: true, text: 'Story Fee' },
  { id: 4, isChecked: true, text: 'Post Frequency' },
  { id: 5, isChecked: true, text: 'Monthly Retainer Fee' },
  { id: 6, isChecked: true, text: 'Campaign Duration' },
];

let componentOptions = [
  { id: 1, text: 'Post Fee' },
  { id: 2, text: 'Revenue Share %' },
  { id: 3, text: 'Story Fee' },
  { id: 4, text: 'Post Frequency' },
  { id: 5, text: 'Monthly Retainer Fee' },
  { id: 6, text: 'Campaign Duration' },
  { id: 7, text: 'Campaign Duration1' },
  { id: 8, text: 'Campaign Duration2' },
  { id: 9, text: 'Campaign Duration3' },

];

const influencers = [
  {
    avatar:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Mark',
    socialTag: 'aatikta',
    instaFollowers: '10k',
    youtubeFollowers: '20k',
    facebookFollowers: '30k',
    selected: false,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    name: 'Julie',
    socialTag: 'jurica',
    instaFollowers: '20k',
    youtubeFollowers: '20k',
    facebookFollowers: '40k',
    selected: false,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Muntasir',
    socialTag: 'aatiktas',
    instaFollowers: '50k',
    youtubeFollowers: '70k',
    facebookFollowers: '60k',
    selected: false,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    name: 'Sam',
    socialTag: 'miracle',
    instaFollowers: '32k',
    youtubeFollowers: '29k',
    facebookFollowers: '45k',
    selected: false,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
    name: 'Chris',
    socialTag: 'happy',
    instaFollowers: '22k',
    youtubeFollowers: '23k',
    facebookFollowers: '33k',
    selected: true,
  },
];

const members = [
  {
    id: 1,
    name: 'Ben Parker',
    avatar:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 2,
    name: 'Chase Fade',
    avatar:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
  },
  {
    id: 3,
    name: 'Benny Chiou',
    avatar:
      'https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Jeromy Wilson',
    avatar:
      'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 5,
    name: 'Amber Miles',
    avatar:
      'https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    name: 'Vaneesa Lee',
    avatar:
      'https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
];


const items = [
  {
    id: 1,
    name: 'Ben Parker',
    quntity: 25,
    price: 64.22,
    sku: '1234357',
  },
  {
    id: 2,
    name: 'Ben Parker',
    quntity: 20,
    price: 64.22,
    sku: '1324671',
  },
  {
    id: 3,
    name: 'Ben Parker',
    quntity: 20,
    price: 58.22,
    sku: '14235671',
  },
  {
    id: 4,
    name: 'Ben Parker',
    quntity: 18,
    price: 50.22,
    sku: '15234671',
  },
  {
    id: 5,
    name: 'Ben Parker',
    quntity: 30,
    price: 60.22,
    sku: '17234561',
  },
  {
    id: 6,
    name: 'Ben Parker',
    quntity: 40,
    price: 90.22,
    sku: '18234567',
  },
  {
    id: 7,
    name: 'Ben Parker',
    quntity: 20,
    price: 80.22,
    sku: '19234567',
  },
  {
    id: 8,
    name: 'Ben Parker',
    quntity: 30,
    price: 70.22,
    sku: '17234567',
  },
];


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


/*********Main Container of Add Campaign ************/

const AddCampaign = ({ open, handleCancel }) => {


  /****** Stepper States ********/

  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(1);
  const [activeNext, setActiveNext] = useState(false);

  /****** Campaign Detail States ********/

  const [campaignName, setCampaignName] = useState('');
  const [startDate, setStartDate] = useState(moment().format("DD/MM/YYYY"));
  const [endDate, setEndDate] = useState(moment().add(1, 'M').format("DD/MM/YYYY"));
  const [startTime, setStartTime] = useState(moment(new Date(), "hmm").format("HH:mm"));
  const [endTime, setEndTime] = useState(moment(new Date(), "hmm").format("HH:mm"));
  const [discount, setDiscount] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [customeMessage, setCustomMessage] = useState('');
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);


  /***** Budget and Target Sales ********/

  const [budget, setBudget] = useState('');
  const [targetGrossSale, setTargetGrossSale] = useState('');


  const [collection, setCollection] = useState('');


  /****** Deliverable States **********/

  const [deliverableDate, setDeliverableDate] = useState(false);

  const [deliveries, setDeliveries] = useState([
    {
      deliverableDeadDate: '',
      socialPlatform: '',
      frameType: '',
      campaignType: '',
      frameRequired: '',
      brandTag: '',
      brandTagRequired: false,
      hashTag: '',
      hashTagRequired: false,
      NoPost: '',
      perTimePeriod: '',
    },
  ]);


  /******* Compensations States */

  const [compensations, setCompensations] = useState([{
    compensationType: '',
    amount: ''
  }]);



  /** Negotiable Options */

  const [selectedNegotiable, setSelectedNegotiable] = useState(
    negotialbleOptions
  );

  //**** Members State **********/

  const [selectedMembers, setSelectedMemebers] = useState([]);


  const [selectedComponent, setSelectedComponent] = useState(componentOptions);

  const [selectedInfluncer, setSelectedInfluncer] = useState([]);
  const [influencer, setInfluencer] = useState('');


  const [openCDialog, setOpenCDialog] = useState(false);
  const [activeSave, setActiveSave] = useState(false);


  const [collections, setCollections] = useState([]);



  /**** Add New deliverable */

  const handleDeliverable = () => {
    const deliverables = [...deliveries];
    deliverables.push({
      deliverableDeadDate: '',
      socialPlatform: '',
      frameType: '',
      campaignType: '',
      frameRequired: '',
      brandTag: '',
      brandTagRequired: false,
      hashTag: '',
      hashTagRequired: false,
      NoPost: '',
      perTimePeriod: '',
    });
    setDeliveries(deliverables);
  };

  /** Handle deliverable Deadline *********/

  const handleDeliverDeadlineDate = (date, index) => {
    const opts = [...deliveries];
    opts[index].deliverableDeadDate =
      date !== '' && moment(date, 'MM/DD/YYYY', true).isValid()
        ? moment(date).format('L')
        : date;

    setDeliveries(opts);
    setDeliverableDate(false);
  };


  /***** Handle Deliverable Content ********/

  const handleDilverableContent = (value, index, fieldname) => {
    const opts = [...deliveries];
    opts[index][fieldname] = value;
    setDeliveries(opts);
  };


  /***** Add New Compesation */

  const handleCompensations = () => {
    const comp = [...compensations];
    comp.push({
      compensationType: '',
      amount: ''
    });
    setCompensations(comp);
  };


  /***** Handle Compesation Value ********/

  const handleCompensationValue = (value, index, fieldName) => {

    const comp = [...compensations];

    comp[index][fieldName] = value;

    setCompensations(comp);

  }

  /***** Remove Compesation *******/

  const handleRemoveCompensation = (index) => {
    const comp = [...compensations];
    comp.splice(index, 1);
    setCompensations(comp);
  }


  /**** Toggle Negotiable *********/

  const toggleNegotiable = (option) => {
    const opts = [...selectedNegotiable];
    opts.map((opt) => {
      if (opt.id === option.id) {
        opt.isChecked = !opt.isChecked;
      }
      setSelectedNegotiable(opts);
    });
  };


  /********* Add Collection ***********/

  const handleCollectionItem = (name, item) => {
    const opts = [...collections];
    if (opts.length > 0) {
      const index = opts.findIndex((item) => item.collectionName === name);

      if (index !== -1) {
        const secondIndex = opts[index].collectionItems.findIndex(
          (secondItem) => secondItem.sku === item.sku
        );
        if (secondIndex === -1) {
          opts[index].collectionItems.push(item);
          setCollections(opts);

        } else {
          opts[index].collectionItems.splice(secondIndex, 1);
          setCollections(opts);
        }
      } else {
        opts.push({
          collectionName: name,
          collectionItems: [item],
        });
        setCollections(opts);
      }
    } else {
      opts.push({
        collectionName: name,
        collectionItems: [item],
      });
      setCollections(opts);
    }

  };

  const toggleComponent = (option) => {
    getStepContent(option)
  }

  /***** Toggle Influncer ********/

  const toggleInfluncer = (option) => {
    const opts = [...selectedInfluncer];

    const optIndex = opts.findIndex((item) => item.name === option.name);

    if (influencer === '') {
      opts.push(option);
      setSelectedInfluncer(opts);
      setInfluencer(1);
    }
    else if (influencer !== optIndex) {
      opts.splice(optIndex, 1);
      setSelectedInfluncer(opts);
      setInfluencer('');
      opts.push(option);
      setSelectedInfluncer(opts)
      setInfluencer(1);

    }
  };

  //************************ Add Members  *********************/

  const addMember = (member) => {
    const opts = [...selectedMembers];

    const optIndex = opts.findIndex((item) => item.name === member.name);

    if (optIndex === -1) {
      opts.push(member);
      setSelectedMemebers(opts);
    } else {
      opts.splice(optIndex, 1);
      setSelectedMemebers(opts);
    }
  };

  /******************* Handle Budget *******************/

  const handleBudget = (e) => {
    setBudget(e.target.value);
  }

  /************* Handle Target Gross Sale ***********/

  const handleGrossSale = (e) => {
    setTargetGrossSale(e.target.value);
  }

  /***************** Handle Discount Type *********/

  const handleDiscountType = (value) => {
    setDiscount('');
    setDiscountType(value);
  }

  //*************Handle Discount *****************/

  const handleDiscount = (e) => {
    if (discountType === "Amount") {
      const value = e.target.value.replace(/[^\d]/, '');
      if (parseInt(value) !== 0) {
        setDiscount(value);
      }
    }
    else {
      const re = /^((0|[1-9]\d?)(\.\d{1,2})?|100(\.00?)?)$/;
      const value = e.currentTarget.value
      var x = parseFloat(value);
      if (value !== "" && (isNaN(x) || x < 0 || x > 100)) {
        return false;
      }
      else
        setDiscount(value);
    }
  }

  //***************** Active Next for Budget ********/

  const setActiveForBudget = () => {
    if (budget !== '' && targetGrossSale !== '') {
      setActiveNext(true);
    } else setActiveNext(false);
  }

  //*** Active for Collection *********/

  const setActiveForCollection = () => {
    const cols = [...collections];
    if (cols.length === 0) {
      setActiveNext(false);
    } if (cols.length > 0) {
      let flag = true;
      cols.forEach(item => {
        if (item.collectionItems.length === 0) {
          flag = false;
        }
        setActiveNext(flag);
      })
    } else {
      setActiveNext(false);
    }
  }

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
            discountType={discountType}
            customeMessage={customeMessage}
            handleCampaignName={(e) => {
              setCampaignName(e.target.value);
            }}
            startDateOpen={startDateOpen}
            endDateOpen={endDateOpen}
            handleStartDate={(date) => {
              setStartDate(
                date !== '' && moment(date, 'MM/DD/YYYY', true).isValid()
                  ? moment(date).format('L')
                  : date
              );
              setStartDateOpen(false);
            }}
            handleStartDateOpen={(value) => setStartDateOpen(value)}
            handleEndDateOpen={(value) => setEndDateOpen(value)}
            handleEndDate={(date) => {
              setEndDate(
                date !== '' && moment(date, 'MM/DD/YYYY', true).isValid()
                  ? moment(date).format('L')
                  : date
              );
              setEndDateOpen(false);
            }}
            handleStartTime={(e) => {
              setStartTime(e.target.value);
            }}
            handleEndTime={(e) => {
              setEndTime(e.target.value);
            }}
            handleDiscount={handleDiscount}
            handleDiscountType={handleDiscountType}
            handleCustomMessage={(e) => {
              setCustomMessage(e.target.value);
            }}
						filledForm={filledForm}
						partialFilledForm = {partialFilledForm}
          />
        );
      case 2:
        return (
          <AddTeamMembers
            selectedMembers={selectedMembers}
            handleAdd={addMember}
            members={members}
            handleActiveNext={() => setActiveNext(true)}
          />
        );
      case 3:
        return <BudgetConversionGoal
          budget={budget}
          handleBudget={handleBudget}
          handleGrossSale={handleGrossSale}
          targetGrossSale={targetGrossSale}
          setActiveForBudget={setActiveForBudget}
        />;
      case 4:
        return (
          <Collection
            collection={collection}
            handleCollection={(e) => setCollection(e.target.value)}
            collectionItems={items}
            collections={collections}
            handleActiveForCollection={setActiveForCollection}
            handleCollectionItem={handleCollectionItem}
          />
        );
      case 5:
        return (
          <Deliverables
            deliveries={deliveries}
            handleDeliveries={handleDeliverable}
            handleDilverableContent={handleDilverableContent}
            handleDeliverDeadlineDate={handleDeliverDeadlineDate}
            deliverableDate={deliverableDate}
            handleDeliverableDate={(value) => setDeliverableDate(value)}
          />
        );
      case 6:
        return (
          <Compensations
            compensations={compensations}
            handleCompensations={handleCompensations}
            handleCompensationValue={handleCompensationValue}
            handleRemoveCompensation={handleRemoveCompensation}
          />
        );
      case 7:
        return (
          <Negotiables
            selectedNegotiable={selectedNegotiable}
            toggleNegotiable={toggleNegotiable}
          />
        );
      case 8:
        return (
          <ChooseInfluencer
            selectedInfluncer={selectedInfluncer}
            toggleInfluncer={toggleInfluncer}
            influencers={influencers}
          />
        );
      case 9:
        return <ReviewAndSend
          toggleComponent={toggleComponent} />;
      default:
        return 'Unknown step';
    }
	};
	
	const partialFilledForm = () => {
		if (
      (	      
        campaignName !== '' &&
        startDate !== '' &&
        endDate !== '')
    ) {	   
				setActiveSave(true);
    } else setActiveSave(false);
  };
	

  const filledForm = () => {

    if (
      (campaignName !== '' &&
        startDate !== '' &&
        endDate !== '' &&
        startTime !== '',
        endTime !== '' &&
        discount !== '' &&
        discountType !== '' &&
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

  const handleCancelCampaignDialog = () => {
    setOpenCDialog(true);
  };

  const handleCancelCDialog = () => {
    setOpenCDialog(false);
    handleCancel();
  };
  const handleConfirmCDialog = () => {
    setOpenCDialog(false);
  };

  return (
    <>
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
                    <div key={index} className={styles.stepItem}>
                      {activeStep == index ? (
                        <div className={styles.active}></div>
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
                  <span onClick={handleBack}>
                    <ChevronSVG
                    />
                  </span>
                ) : (
                    <div></div>
                  )}
                <span onClick={handleCancelCampaignDialog}>
                  <XSVG
                  />
                </span>
              </div>
              <div className={styles.stepperAndComponent}>
                <div className={styles.stepperNumberAndNameContainer}>
                  <p>
                    STEP {activeStep} OF {steps.length - 1}
                  </p>
                  <h2>{steps[activeStep]}</h2>
                </div>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<QontoConnector />}
                  className={styles.stepperContainer}
                >
                  {steps.map((label) => (
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
                {activeSave ? <span>Save and finish later</span> : null}
              </div>
              <button
                onClick={() => handleNext(activeStep)}
                className={clsx(
                  styles.nextButton,
                  activeNext ? styles.activeButton : styles.inActiveButton
                )}
                disabled={!activeNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      <CDialog
        open={openCDialog}
        cancelText={'Delete'}
        confirmText={'Keep working'}
        onCancel={handleCancelCDialog}
        onConfirm={handleConfirmCDialog}
        message={Translation.DIALOG.CAMPAIGN_CDIALOG_MSG}
      />
    </>
  );
};

export default AddCampaign;
