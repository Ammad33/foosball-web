import React, { useState, useEffect, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, SvgIcon } from '@material-ui/core';
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
import { API, graphqlOperation } from 'aws-amplify';
import logo from '../../assets/FomoPromo_logo__white.png';
import * as _ from 'lodash';
import { RootContext } from '../../context/RootContext';

let typ = '';
let val = '';

const XSVG = () => {
  return <SVG src={require('../../assets/x.svg')} />;
};

const ChevronSVG = () => {
  return <SVG src={require('../../assets/chevron-left.svg')} />;
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

let negotialbleOptions = [
  { id: 1, isChecked: true, key: 'post_fee', text: 'Cash Per Post' },
  { id: 2, isChecked: true, key: 'revenue_share', text: 'Revenue Share %' },
  { id: 3, isChecked: true, key: 'story_fee', text: 'Cash Per Monthly Deliverable' },
  { id: 4, isChecked: true, key: 'post_frequency', text: 'Post Frequency' },
  {
    id: 5,
    isChecked: true,
    key: 'monthly_retainer_fee',
    text: 'Gift Card',
  },
  {
    id: 6,
    isChecked: true,
    key: 'campaign_duration',
    text: 'Campaign Duration',
  },
];

const fb = {
  postType: ['Story', 'Post'],
  frameContentType: ['Video', 'Image'],
};
const insta = {
  postType: ['Story', 'Post'],
  frameContentType: ['Video', 'Image'],
};
const tictock = {
  postType: ['Does not apply'],
  frameContentType: ['Does not apply'],
};
const youtube = {
  postType: ['Does not apply'],
  frameContentType: ['Does not apply'],
};

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
    'Choose an Influencer',
    'Review and Send',
  ];
}

/*********Main Container of Add Campaign ************/

const AddCampaign = ({ open, handleCancel, step, campaign }) => {
  /****** Stepper States ********/

  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(step ? step : 1);
  const [activeNext, setActiveNext] = useState(false);
  const [team, setTeam] = useState([]);
  const [search, setSearch] = useState('');
  const [campaigns, setCampaigns] = useState([]);
  const { brandId } = useContext(RootContext);
  const [campaignError, setCampaignError] = useState('');
  const [products, setProducts] = useState('');

  /****** Campaign Detail States ********/

  const [campaignName, setCampaignName] = useState('');
  const [startDate, setStartDate] = useState(
    moment().add(1, 'days').format('MM/DD/YYYY')
  );
  const [endDate, setEndDate] = useState(
    moment().add(1, 'month').format('MM/DD/YYYY')
  );
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [startTime, setStartTime] = useState(
    moment().subtract(1, 'days').startOf('day').format('HH:mm')
  );
  const [startTimeError, setStartTimeError] = useState(false);
  const [endTime, setEndTime] = useState(
    moment().subtract(1, 'days').startOf('day').format('HH:mm')
  );
  const [endTimeError, setEndTimeError] = useState(false);

  const [discount, setDiscount] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [customeMessage, setCustomMessage] = useState('');
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endTimeOpen, setEndTimeOpen] = useState(false);
  const [lastStep, setLastStep] = useState(0);

  const [giftCode, setGiftCode] = useState('');

  /***** Budget and Target Sales ********/

  const [budget, setBudget] = useState('');
  const [targetGrossSale, setTargetGrossSale] = useState('');

  const [collection, setCollection] = useState('');

  /****** Deliverable States **********/

  const [deliverableDate, setDeliverableDate] = useState(false);

  const [deliveries, setDeliveries] = useState([
    {
      deadlineDate: '',
      platform: '',
      frameContentType: '',
      deliverableType: '',
      framesRequired: '',
      brandTag: '',
      brandTagRequired: false,
      hashTag: '',
      hashTagRequired: false,
      posts: '',
      frequency: '',
    },
  ]);

  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    setActiveStep(step !== undefined ? step : 1);
    if (campaign && campaign !== null && step !== undefined) {
      setCampaignName(campaign.name);

      const startDate = new Date(campaign.startDate * 1000);
      const endDate = new Date(campaign.endDate * 1000);
      setCustomMessage(
        campaign.invitationMessage && campaign.invitationMessage !== null
          ? campaign.invitationMessage
          : ''
      );
      setStartDate(moment(startDate).format('MM/DD/YYYY'));
      setEndDate(moment(endDate).format('MM/DD/YYYY'));
      setStartTime(moment(startDate).format('HH:mm'));
      setEndTime(moment(endDate).format('HH:mm'));
      if (campaign.name !== '' && startDate !== '' && endDate !== '') {
        setActiveSave(true);
      }
      setDiscount(
        campaign.discount && campaign.discount !== null
          ? campaign.discount.__typename === 'FlatDiscount'
            ? campaign.discount.amount.amount
            : campaign.discount.percentage
          : ''
      );
      setSelectedMemebers(
        campaign.brandTeam && campaign.brandTeam !== null
          ? campaign.brandTeam.map((item) => item.id)
          : []
      );

      if (campaign.products && campaign.products !== null && campaign.products.length > 0) {
        setProducts(getCampaignsProducts());
      }
      setDiscountType(
        campaign.discount && campaign.discount !== null
          ? campaign.discount.__typename === 'PercentageDiscount'
            ? 'Percentage'
            : campaign.discount.__typename === 'FlatDiscount'
              ? 'Amount'
              : ''
          : ''
      );
      if (
        campaign.compensation &&
        campaign.compensation !== null &&
        campaign.compensation.length !== 0
      ) {
        setCompensation(campaign.compensation);
      } else {
        setCompensations([
          {
            compensationType: '',
            amount: '',
          },
        ]);
      }
      if (campaign.budget && campaign.budget) {
        setBudget(campaign.budget.amount);
      }

      if (campaign.targetGrossSales && campaign.targetGrossSales) {
        setTargetGrossSale(campaign.targetGrossSales.amount);
      }
      if (campaign.negotiables) {
        const negotiables = [...selectedNegotiable];
        const keys = Object.keys(campaign.negotiables);
        keys.forEach((key) => {
          negotiables.map((negotiable) => {
            if (negotiable.key === key) {
              negotiable.isChecked = campaign.negotiables[key];
            }
            return negotiable;
          });
        });
      }
      if (campaign.deliverables && campaign.deliverables.length) {
        campaign.deliverables.map((deliverable) => {
          if (deliverable.deadlineDate) {
            deliverable.deadlineDate = new Date(
              deliverable.deadlineDate
            ).toLocaleDateString();
          }
          deliverable.brandTagRequired = deliverable.brandTag ? true : false;
          deliverable.hashTagRequired = deliverable.hashTag ? true : false;
          return deliverable;
        });
        setDeliveries(campaign.deliverables);
      }
    }
    filledForm();
  }, [step]);

  const getCampaignsProducts = () => {
    let productSample = [];
    campaign.products && campaign.products.length > 0 &&
      campaign.products.forEach(product => {
        if (product.collection.products && product.collection.products.products.length > 0) {
          productSample.push({
            collectionId: product.collection.id,
            products: product.collection.products.products.map(item => ({ productId: item.id }))
          })
        }
      })
    return productSample;
  }

  useEffect(() => {
    if (open === false) {
      setCampaignName('');
      setDiscount('');
      setDiscountType('Percentage');
      setCustomMessage('');
      setStartDate(moment().add(1, 'days').format('MM/DD/YYYY'));
      setEndDate(moment().add(31, 'days').format('MM/DD/YYYY'));
      setStartTime(moment().subtract(1, 'days').startOf('day').format('HH:mm'));
      setEndTime(moment().subtract(1, 'days').startOf('day').format('HH:mm'));
      setBudget('');
      setTargetGrossSale('');
      setCollections([]);
      setCompensations([
        {
          compensationType: '',
          amount: '',
        },
      ]);
      setDeliveries([
        {
          deadlineDate: '',
          platform: '',
          frameContentType: '',
          deliverableType: '',
          framesRequired: '',
          brandTag: '',
          brandTagRequired: false,
          hashTag: '',
          hashTagRequired: false,
          posts: '',
          frequency: '',
        },
      ]);
      setSelectedMemebers([]);
      setSelectedInfluncer(null);
      setActiveStep(1);
    }
  }, [open]);

  useEffect(() => {
    getTeam();
    getCollection();
  }, [brandId]);

  useEffect(() => {
		getInfluencers();
  }, []);

  const getInfluencers = async () => {
    try {
      const influencers = await API.graphql({
        query: `{
          influencers(input: {limit:50}) {
            influencers {
              id
              name
              imageUrl
              socialIdentities {
                followerCount
                handle
                platform
              }
            }
          }
        }`,
      });
      if (
        influencers &&
        influencers.data &&
        influencers.data.influencers &&
        influencers.data.influencers.influencers &&
        influencers.data.influencers.influencers.length
      ) {
        setInfluencers(influencers.data.influencers.influencers);
      }
      if (campaign && campaign.influencer && campaign.influencer.id) {
        const selectedInfluencer = _.find(
          influencers.data.influencers.influencers,
          ['id', campaign.influencer.id]
        );
        setInfluencer(selectedInfluencer);
      }
    } catch (e) {
      console.error(e);
    }
  };
  /******* Compensations States */
  const [compensationPayment, setCompensationPayment] = useState('');
  const [addAnother, setAddAnother] = useState('false');

  const [compensations, setCompensations] = useState([
    {
      compensationType: '',
      amount: '',
    },
  ]);

  /***************Compensation Product ********************/

  const [compensationProduct, setCompensationProduct] = useState('');
  const [compensationProducts, setCompensationProducts] = useState('');

  const handleCompensationProducts = (value) => {
    setCompensationProduct(value);
  };

  const setActiveForCompensationProduct = () => {
    const cols = [...compensationProducts];
    if (cols.length === 0) {
      setActiveNext(false);
    }
    if (cols.length > 0) {
      let flag = true;
      cols.forEach((item) => {
        if (item.collectionItems.length === 0) {
          flag = false;
        }
        setActiveNext(flag);
      });
    } else {
      setActiveNext(false);
    }
  };

  const handleCompensationProductItem = (name, item) => {
    const opts = [...compensationProducts];
    if (opts.length > 0) {
      const index = opts.findIndex((item) => item.collectionName === name);

      if (index !== -1) {
        const secondIndex = opts[index].collectionItems.findIndex(
          (secondItem) => secondItem.sku === item.sku
        );
        if (secondIndex === -1) {
          opts[index].collectionItems.push(item);
          setCompensationProducts(opts);
        } else {
          opts[index].collectionItems.splice(secondIndex, 1);
          setCompensationProducts(opts);
        }
      } else {
        opts.push({
          collectionName: name,
          collectionItems: [item],
        });
        setCompensationProducts(opts);
      }
    } else {
      opts.push({
        collectionName: name,
        collectionItems: [item],
      });
      setCompensationProducts(opts);
    }
  };

  /** Negotiable Options */

  const [selectedNegotiable, setSelectedNegotiables] = useState(
    negotialbleOptions
  );

  //**** Members State **********/

  const [selectedMembers, setSelectedMemebers] = useState([]);

  // const [selectedComponent, setSelectedComponent] = useState(componentOptions);

  const [selectedInfluncer, setSelectedInfluncer] = useState([]);
  const [influencer, setInfluencer] = useState(null);

  const [openCDialog, setOpenCDialog] = useState(false);
  const [activeSave, setActiveSave] = useState(false);

  const [collections, setCollections] = useState([]);

  const [stepSeven, setStepSeven] = useState(false);

  /**** Add New deliverable */

  const getTeam = async () => {
    try {
      const team = await API.graphql({
        query: `{
          brand(id:"${brandId}") {
            users {
              user {
                imageUrl
                id
                fullName
                email
              }
            }
          }
        }`,
			});
      if (team.data !== null && team.data.brand !== null) {
        setTeam(team.data.brand.users);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeliverable = () => {
    const deliverables = [...deliveries];

    deliverables.push({
      deadlineDate: '',
      platform: '',
      frameContentType: '',
      deliverableType: '',
      framesRequired: '',
      brandTag: '',
      brandTagRequired: false,
      hashTag: '',
      hashTagRequired: false,
      posts: '',
      frequency: '',
    });

    setDeliveries(deliverables);
  };

  /** Handle deliverable Deadline *********/

  const handleDeliverDeadlineDate = (date, index) => {
    const opts = [...deliveries];

    if (date !== '' && moment(date, 'MM/DD/YYYY', true).isValid()) {
      opts[index].deadlineDate = moment(date).format('L');
    } else {
      if (opts[index].deadlineDate.length > date.length) {
        opts[index].deadlineDate = date;
      } else if (date.length < 11) {
        if (date !== "") {
          var targetValue = date;

          if (targetValue.length === 5) {
            opts[index].deadlineDate = targetValue + "/";
          } else if (targetValue.length === 2) {
            opts[index].deadlineDate = targetValue + "/";
          } else {
            opts[index].deadlineDate = targetValue;
          }
        } else {
          opts[index].deadlineDate = "";
        }
      }
    }
    setDeliveries(opts);
    setDeliverableDate(false);
  };

  /***** Handle Deliverable Content ********/

  const handleDilverableContent = (value, index, fieldname) => {
    const opts = [...deliveries];
    opts[index][fieldname] = value;
    setDeliveries(opts);
  };

  /***** Handle Delete Deliverable ***********/

  const handleRemoveDeliverable = (index) => {
    const opts = [...deliveries];
    opts.splice(index, 1);
    setDeliveries(opts);
  };

  /***** Add New Compesation */

  const handleCompensations = () => {
    //const pro = [...compensationProducts]
    const comp = [...compensations];

    comp.push({
      compensationType: '',
      amount: '',
    });
    setCompensations(comp);
  };

  /************ Compensation Influencer payment schedule *******/

  const handleCompensationPayment = (value) => {
    setCompensationPayment(value);
  };

  /***** Handle Compesation Value ********/

  const handleCompensationValue = (value, index, fieldName) => {
    const comp = [...compensations];
    if (fieldName === 'compensationType') {
      const found = comp.findIndex((item) => item.compensationType === value);
      if (found !== -1 || value === 'PRODUCT') {
        return;
      }
    }
    comp[index][fieldName] = value;

    setCompensations(comp);
  };

  /***** Remove Compesation *******/

  const handleRemoveCompensation = (index) => {
    const comp = [...compensations];
    comp.splice(index, 1);
    setCompensations(comp);
  };

  /**** Toggle Negotiable *********/

  const toggleNegotiable = (option) => {
    const opts = [...selectedNegotiable];
    opts.map((opt) => {
      if (opt.id === option.id) {
        opt.isChecked = !opt.isChecked;
      }
      setSelectedNegotiables(opts);
    });
  };

  /********* Add Collection ***********/

  const handleCollection = (value) => {
    setCollection(value);
  };

  const handleCollectionItem = (id, item) => {
    const opts = [...products];
    if (opts.length > 0) {

      const index = opts.findIndex((item) => item.collectionId === id);

      if (index !== -1) {
        if (opts[index].products) {
          const secondIndex = opts[index].products.findIndex(
            (secondItem) => secondItem.productId === item.productId
          )
          if (secondIndex === -1) {
            opts[index].products.push(item);
            setProducts(opts);
          } else {
            opts[index].products.splice(secondIndex, 1);
            setProducts(opts);
          }
        }
      } else {
        opts.push({
          collectionId: id,
          products: [item]
        }
        );
        setProducts(opts);
      }
    } else {
      opts.push({
        collectionId: id,
        products: [item]
      }
      );
      setProducts(opts);
    }
  };

  const toggleComponent = (option) => {
    getStepContent(option);
  };

  /***** Toggle Influncer ********/

  const toggleInfluncer = (option) => {
    setInfluencer(option);
  };

  //************************ Add Members  *********************/

  const addMember = (member) => {
    const opts = [...selectedMembers];

    const optIndex = opts.findIndex((item) => item === member.id);

    if (optIndex === -1) {
      opts.push(member.id);
      setSelectedMemebers(opts);
    } else {
      opts.splice(optIndex, 1);
      setSelectedMemebers(opts);
    }
  };

  /******************* Handle Budget *******************/

  const handleBudget = (e) => {
    setBudget(e.target.value);
  };

  /************* Handle Target Gross Sale ***********/

  const handleGrossSale = (e) => {
    setTargetGrossSale(e.target.value);
  };

  /***************** Handle Discount Type *********/

  const handleDiscountType = (value) => {
    setDiscount('');
    setDiscountType(value);
  };

  /******************** Handle Start Date */

  const handleStartDate = (date) => {
    const moment_date = moment(date).format('L');
    setStartDate(
      date !== '' && moment(date, 'MM/DD/YYYY', true).isValid()
        ? moment_date
        : date
    );
    setEndDate(moment(moment_date).add(1, 'M').format('MM/DD/YYYY'));
    setStartDateOpen(false);
    handleStartDateValidation(moment_date);
  };

  /**********************Handle End Date ********/
  const handleEndDate = (date) => {
    const moment_date = moment(date).format('L');
    setEndDate(
      date !== '' && moment(date, 'MM/DD/YYYY', true).isValid()
        ? moment_date
        : date
    );
    setEndDateOpen(false);
    handleEndDateValidation(moment_date);
  };

  /*************End Date Validation *************/
  const handleEndDateValidation = (date) => {
    if (date < startDate) {
      setEndDateError(true);
    } else setEndDateError(false);
    handleEndTimeDateValidation(endTime, date);
  };

  /*************Start date validation************/
  const handleStartDateValidation = (date) => {
    if (date < moment().format('MM/DD/YYYY')) {
      setStartDateError(true);
    } else setStartDateError(false);
    handleStartTimeDateValidation(startTime, date);
  };

  /*************Start Time/Date validation************/
  const handleStartTimeDateValidation = (time, date) => {

    const startDateTime = moment(date + ' ' + time);
    if (startDateTime.isBefore(moment())) {
      setStartTimeError(true);
    } else setStartTimeError(false);
  };

  /*************END Time/Date validation************/
  const handleEndTimeDateValidation = (time, date) => {
    const endDateTime = moment(date + ' ' + time);
    const startDateTime = moment(startDate + ' ' + startTime);
    if (endDateTime.isBefore(startDateTime)) {
      setEndTimeError(true);
    } else setEndTimeError(false);
  };

  /*************Start Time validation************/
  const handleStartTimeValidation = (time) => {
    const startDateTime = moment(startDate + ' ' + time);
    if (startDateTime.isBefore(moment())) {
      setStartTimeError(true);
    } else setStartTimeError(false);
  };

  /*************End Time validation************/
  const handleEndTimeValidation = (time) => {
    const startDateTime = moment(startDate + ' ' + startTime);
    const endDateTime = moment(endDate + ' ' + time);
    if (endDateTime.isBefore(startDateTime)) {
      setEndTimeError(true);
    } else setEndTimeError(false);
  };
  //*************Handle Discount *****************/

  const handleDiscount = (e) => {
    if (discountType === 'Amount') {
      const value = e.target.value.replace(/[^\d]/, '');
      if (parseInt(value) !== 0) {
        setDiscount(value);
      }
    } else {
      // const re = /^((0|[1-9]\d?)(\.\d{1,2})?|100(\.00?)?)$/;
      const value = e.currentTarget.value;
      var x = parseFloat(value);
      if (value !== '' && (isNaN(x) || x < 0 || x > 100)) {
        return false;
      } else setDiscount(value);
    }
  };

  //***************** Active Next for Budget ********/

  const setActiveForBudget = () => {
    if (budget !== '' && targetGrossSale !== '') {
      setActiveNext(true);
    } else setActiveNext(false);
  };

  //*** Active for Collection *********/

  const setActiveForCollection = () => {
    const cols = [...products];
    if (cols.length === 0) {
      setActiveNext(false);
    }
    if (cols.length > 0) {
      let flag = true;
      cols.forEach((item) => {
        if (item.products === undefined || item.products.length === 0) {
          flag = false;
        }
        setActiveNext(flag);
      });
    } else {
      setActiveNext(false);
    }
  };

  console.log(products);

  const getNegotiablesObjectForAPI = () => {
    let data = {};
    selectedNegotiable.forEach((negotiable) => {
      data[negotiable.key] = negotiable.isChecked;
    });
    return data;
  };
  const getDeliverablesForAPI = () => {
    const data = [...deliveries];
    data.map((deliverable) => {
      delete deliverable.brandTagRequired;
      delete deliverable.hashTagRequired;
      delete deliverable.id;
      deliverable.deadlineDate =
        Date.parse(`${deliverable.deadlineDate}`) / 1000;
      deliverable.platform = deliverable.platform.toUpperCase();
      deliverable.postType = deliverable.deliverableType.toUpperCase();
      deliverable.frameContentType = deliverable.frameContentType.toUpperCase();
      delete deliverable.deliverableType;
      return deliverable;

      // switch (deliverable.frequency) {
      //   case 'Every Month':
      //     deliverable.frequency = 'MONTH';
      //     break;
      //   case 'Every other month':
      //     deliverable.frequency = 'BI_MONTHLY';
      //     break;
      //   case 'Every Week':
      //     deliverable.frequency = 'WEEK';
      //     break;
      //   case 'Every other week':
      //     deliverable.frequency = 'BI_WEEKLY';
      //     break;
      // }
    });
    return data;
  };

  const setCompensation = (compensation) => {
    let compensationsForm = compensation.map((item) => {
      switch (item.__typename) {
        case 'CompRevenueShare':
          return {
            compensationType: 'REVENUE_SHARE',
            amount: item.percentage * 1000,
          };
        case 'CompCashPerPost':
          return {
            compensationType: 'CASH_PER_POST',
            amount: item.amount.amount,
          };
        case 'CompCashPerMonthlyDeliverable':
          return {
            compensationType: 'CASH_PER_MONTHLY_DELIVERABLE',
            amount: item.amount.amount,
          };
        case 'CompGiftCard':
          setGiftCode(item.code);
          return {
            compensationType: 'GIFT_CARD',
            amount: item.amount.amount,
          };
      }
    });
    setCompensations(compensationsForm);
  };

  const getCompensations = () => {
    let compensation = compensations.map((item) => {
      switch (item.compensationType) {
        case 'REVENUE_SHARE':
          return {
            type: 'REVENUE_SHARE',
            value: '{ "percentage": "' + item.amount / 1000 + '"}',
          };
        case 'CASH_PER_POST':
          return {
            type: 'CASH_PER_POST',
            value:
              '{"amount":{"amount": "' + item.amount + '","currency":"USD"}}',
          };
        case 'CASH_PER_MONTHLY_DELIVERABLE':
          return {
            type: 'CASH_PER_MONTHLY_DELIVERABLE',
            value:
              '{"amount":{"amount": "' + item.amount + '","currency":"USD"}}',
          };
        case 'GIFT_CARD':
          return {
            type: 'GIFT_CARD',
            value:
              '{"amount":{"amount": "' +
              item.amount +
              '","currency":"USD"}, "code": "' +
              giftCode +
              '" }',
          };
      }
    });
    return _.compact(compensation);
  };

  const createCampaign = async () => {
    try {
      if (discountType === 'Amount') {
        typ = 'FLAT';
        val = '{\"amount\":{\"amount\":\"' + discount + '\",\"currency\":\"USD\"},\"minimum\":{\"amount\":\"50.0\",\"currency\":\"USD\"}}';
      } else if (discountType === 'Percentage') {
        typ = 'PERCENTAGE';
        val = '{\"percentage\":\"' + discount + '\"}';
			}

      let data = {
        brandId,
        name: campaignName,
        startDate: Date.parse(`${startDate} ${startTime} `) / 1000,
        endDate: Date.parse(`${endDate} ${endTime} `) / 1000,
        // discount: { value: val, type: typ },
        // invitationMessage: customeMessage,
        // budget: { amount: parseFloat(budget).toFixed(2), currency: 'USD' },
        // targetGrossSales: { amount: parseFloat(targetGrossSale).toFixed(2), currency: 'USD' },
        // team: selectedMembers,
        // negotiables: getNegotiablesObjectForAPI(),
        // invitationMessage: customeMessage,
        //deliverables: getDeliverablesForAPI(),
        // compensation: getCompensations(),
      };

      if (discountType !== '' && discount !== '') {
        data = {
          ...data, discount: { value: val, type: typ }
        }
      }

      if (customeMessage !== '') {
        data = {
          ...data, invitationMessage: customeMessage,
        }
      }

      if (budget !== '') {
        data = {
          ...data, budget: { amount: budget, currency: 'USD' }
        }
      }

      if (targetGrossSale !== '') {
        data = {
          ...data, targetGrossSales: { amount: targetGrossSale, currency: 'USD' }
        }
      }

      if (selectedMembers && selectedMembers.length > 0) {
        data = {
          ...data, team: selectedMembers
        }
      }

      if (compensations && compensations.length > 0 && compensations[0].compensationType !== '') {
        data = {
          ...data, compensation: getCompensations()
        }
      }

      if (stepSeven) {
        data = {
          ...data, negotiables: getNegotiablesObjectForAPI()
        }
			}

      if (influencer && influencer.id && influencer.id !== '') {
        data.influencerId = influencer.id;
      }
      let response = await API.graphql(
        graphqlOperation(
          `mutation createCampaign($input: CreateCampaignInput!) {
        createCampaign(input: $input) {
          id
          name
          startDate
          endDate

        }
      }
      `,
          {
            input: data,
          }
        )
      );
      handleCancel();

      if (response && response !== null && response.data !== null && response.data.createCampaign !== null) {
        updateCampaignProducts(response.data.createCampaign.id)
        return response.data.createCampaign.id;
      } else {
        return null
      }
    } catch (e) {
      console.log('Error in mutation for create campaign ', e);
      return null;
    }
  };

  const handleCollectionExpand = (value, index) => {
    const collect = [...collections];
    if (value === true) {
      collect[index].expand = false;
    } else {
      collect[index].expand = true;
    }

    setCollections(collect)
  }

  const updateCampaignProducts = async (id) => {
    if (products && products.length > 0) {

      try {
        let data = {
          brandId,
          id: id,
          products: products
        };

        await API.graphql(
          graphqlOperation(
            `mutation updateCampaign($input : UpdateCampaignInput!) {
            updateCampaign(input: $input) {
              products {
                collection {
                  id
                  products {
                    products {
                      id
                      name
                    }
                  }
                }
              }          
            }
        }`,
            {
              input: data,
            }
          )
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  const updateCampaign = async () => {

    if (discountType === 'Amount') {
      typ = 'FLAT';
      val = '{"amount":{"amount": "' + discount + '","currency":"USD"}}';
    } else {
      typ = 'PERCENTAGE';
      val = '{"percentage":"' + discount + '"}';
    }
    try {
      const end = Date.parse(`${endDate} ${endTime}`) / 1000;
      const start = Date.parse(`${startDate} ${startTime}`) / 1000;
      let data = {
        brandId,
        id: campaign.id,
        name: campaignName,
        endDate: end,
        startDate: start,
        // discount: { value: val, type: typ },
        // invitationMessage: customeMessage,
        // budget: { amount: budget, currency: 'USD' },
        // targetGrossSales: { amount: targetGrossSale, currency: 'USD' },
        // team: selectedMembers,
        // negotiables: getNegotiablesObjectForAPI(),
        // invitationMessage: customeMessage,
        // compensation: getCompensations(),
        // deliverables: getDeliverablesForAPI(),
      };



      if (discountType !== '' && discount !== '') {
        data = {
          ...data, discount: { value: val, type: typ }
        }
      }

      if (customeMessage !== '') {
        data = {
          ...data, invitationMessage: customeMessage,
        }
      }

      if (selectedMembers && selectedMembers.length > 0) {
        data = {
          ...data, team: selectedMembers
        }
      }

      if (budget !== '') {
        data = {
          ...data, budget: { amount: budget, currency: 'USD' }
        }
      }

      if (targetGrossSale !== '') {
        data = {
          ...data, targetGrossSales: { amount: targetGrossSale, currency: 'USD' }
        }
      }

      if (compensations && compensations.length > 0 && compensations[0].compensationType !== '') {
        data = {
          ...data, compensation: getCompensations()
        }
      }

      if (campaign.negotiables !== null || stepSeven) {
        data = {
          ...data, negotiables: getNegotiablesObjectForAPI()
        }
      }

      if (influencer && influencer.id && influencer.id !== null && influencer.id !== '') {
        data.influencerId = influencer.id;
			}
			
			

      let response = await API.graphql(
        graphqlOperation(
          `mutation updateCampaign($input : UpdateCampaignInput!) {
            updateCampaign(input: $input) {
              name
            }
        }`,
          {
            input: data,
          }
        )
      );

      updateCampaignProducts(campaign.id);
      handleCancel();
      if (response && response !== null && response.createCampaign.id) {
        return response.createCampaign.id;
      } else {
        return null
      }
    } catch (e) {
      console.log('update campaign error ', e);
      return null;
    }
  };
  const sendCampaignInvite = async () => {
    let id = null;
    if (campaign === undefined || campaign === null) {
      id = await createCampaign()
    } else {
      updateCampaign()
    }

    let data = {
      brandId: brandId,
      id: campaign && campaign.id ? campaign.id : id
    };
    try {
      await API.graphql(
        graphqlOperation(
          `mutation MyMutation {
						sendCampaignInvite(brandId: "${brandId}", id: "${campaign && campaign.id ? campaign.id : id}") {
							id
						}
					}`
        )
      );
      handleCancel();
    } catch (e) {
      console.log('Campaign Invite error ', e);
    }
  }


  const getCollection = async () => {
    try {
      const collectionsResponse = await API.graphql({
        query: `{
          collections(brandId: "${brandId}") {
            collections {
              id
              name
              products {
                products {
                  id
                  name
                  estimatedQty
                  priceRange {
                    max {
                      amount
                      currency
                    }
                    min {
                      amount
                      currency
                    }
                  }
                  images {
                    images {
                      src
                      altText
                    }
                  }
                }
              }
            }
          }
        }`
			})
			
      console.log(collectionsResponse.data.collections.collections);
      if (collectionsResponse.data && collectionsResponse.data !== null) {
        setCollections(collectionsResponse.data.collections && collectionsResponse.data.collections.collections && collectionsResponse.data.collections.collections.map(obj => ({ ...obj, expand: false })));
      }

    } catch (err) {

    }
  }

  /************* Active for deliverable */

  const setActiveForDeliverables = () => {
    const deliverables = [...deliveries];

    let flag = true;

    deliverables.forEach((delive) => {
      if (delive.platform === 'Facebook' || delive.platform === 'Instagram') {
        if (delive.deliverableType === 'Post') {
          delive.framesRequired = null;
        }
        else if (delive.framesRequired == null) {
          delive.framesRequired = '';
        }
      }
      if (
        delive.deadlineDate === '' ||
        delive.platform === '' ||
        delive.deliverableType === '' ||
        delive.frameContentType === '' ||
        delive.framesRequired === '' ||
        delive.posts === '' ||
        delive.frequency === ''
      ) {
        flag = false;
      }
      if (
        (delive.brandTagRequired === true && delive.brandTag === '') ||
        (delive.hashTagRequired === true && delive.hashTag === '')
      ) {
        flag = false;
      }
    });
    setActiveNext(flag);
  };

  /************* Active for compensations */

  const setActiveForCompensation = () => {
    const compensation = [...compensations];

    let flag = true;
    compensation &&
      compensation.forEach((comp) => {
        if (
          comp.compensationType === '' ||
          comp.amount === '' ||
          (comp.compensationType === 'GIFT_CARD' && giftCode === '')
        ) {
          flag = false;
        }
      });
    setActiveNext(flag);
    if (!flag) {
      setActiveForCompensationProduct();
      setAddAnother(true);
    }
  };

  /************* Active for Negotiables */

  const setActiveForNegotialble = () => {
    const negotiable = [...selectedNegotiable];

    let flag = false;
    negotiable.forEach((comp) => {
      if (comp.isChecked === true) {
        flag = true;
      }
    });
    setStepSeven(true);
    setActiveNext(flag);
  };

  /************* Active for Negotiables */

  const setActiveForInfluncer = () => {
    setActiveNext(influencer !== null ? true : false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const members = [...team];
    setTeam(members.filter(item => item.user.email.includes(e.target.value)));
    if (e.target.value === '') {
      getTeam();
    }
  }

  // /*********************** To disable next button */

  const leftSideDawerClick = (index) => {
    if (activeStep >= index) {
      setLastStep(activeStep);
      setActiveStep(index);

    } else return;
  };

  const handleCampaignName = (e) => {

    setCampaignName(e.target.value);
    if (e.target.value !== '') {

      const index = campaigns.findIndex(item => item.name === e.target.value);

      if (index !== -1) {
        setCampaignError('This name already exists');
      } else {
        setCampaignError('');
      }
    }
  }

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 1:
        return (
          <AddCampaignDetails
            campaignName={campaignName}
            startDate={startDate}
            startDateError={startDateError}
            endDateError={endDateError}
            endDate={endDate}
            startTime={startTime}
            startTimeError={startTimeError}
            endTime={endTime}
            endTimeError={endTimeError}
            discount={discount}
            discountType={discountType}
            customeMessage={customeMessage}
            handleCampaignName={handleCampaignName}
            startDateOpen={startDateOpen}
            endDateOpen={endDateOpen}
            startTimeOpen={startTimeOpen}
            endTimeOpen={endTimeOpen}
            campaignError={campaignError}
            // handleValidation={handleDateTimeValidation}
            handleStartDate={handleStartDate}
            handleStartDateOpen={(value) => setStartDateOpen(value)}
            handleEndDateOpen={(value) => setEndDateOpen(value)}
            handleStartTimeOpen={(value) => setStartTimeOpen(value)}
            handleEndTimeOpen={(value) => setEndTimeOpen(value)}
            handleEndDate={handleEndDate}
            handleStartTime={(e) => {
              setStartTime(moment(e).format('HH:mm'));
              setStartTimeOpen(false);
              handleStartTimeValidation(moment(e).format('HH:mm'));
            }}
            handleEndTime={(e) => {
              setEndTime(moment(e).format('HH:mm'));
              setEndTimeOpen(false);
              handleEndTimeValidation(moment(e).format('HH:mm'));
            }}
            handleDiscount={handleDiscount}
            handleDiscountType={handleDiscountType}
            handleCustomMessage={(e) => {
              setCustomMessage(e.target.value);
            }}
            filledForm={filledForm}
            partialFilledForm={partialFilledForm}
          />
        );
      case 2:
        return (
          <AddTeamMembers
            selectedMembers={selectedMembers}
            handleAdd={addMember}
            members={team}
            handleActiveNext={() => setActiveNext(true)}
            search={search}
            handleSearch={handleSearch}
          />
        );
      case 3:
        return (
          <BudgetConversionGoal
            budget={budget}
            handleBudget={handleBudget}
            handleGrossSale={handleGrossSale}
            targetGrossSale={targetGrossSale}
            setActiveForBudget={setActiveForBudget}
          />
        );
      case 4:
        return (
          <Collection
            collection={collection}
            handleCollection={handleCollection}
            collectionItems={items}
            collections={collections}
            handleActiveForCollection={setActiveForCollection}
            handleCollectionItem={handleCollectionItem}
            handleCollectionExpand={handleCollectionExpand}
            products={products}
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
            handleActiveForDeliverable={setActiveForDeliverables}
            handleRemoveDeliverable={handleRemoveDeliverable}
            fb={fb}
            insta={insta}
            tictock={tictock}
            youtube={youtube}
          />
        );
      case 6:
        return (
          <Compensations
            compensations={compensations}
            handleCompensations={handleCompensations}
            handleCompensationValue={handleCompensationValue}
            handleRemoveCompensation={handleRemoveCompensation}
            handleActiveForCompensation={setActiveForCompensation}
            addAnother={addAnother}
            compensationPayment={compensationPayment}
            handleCompensationPayment={handleCompensationPayment}
            compensationProduct={compensationProduct}
            handleCompensationProducts={handleCompensationProducts}
            compensationProductItems={items}
            compensationProducts={compensationProducts}
            handleActiveForCompensationProduct={setActiveForCompensation}
            handleCompensationProductItem={handleCompensationProductItem}
            giftCode={giftCode}
            handleGiftCode={(e) => setGiftCode(e.target.value)}
          />
        );
      case 7:
        return (
          <Negotiables
            selectedNegotiable={selectedNegotiable}
            toggleNegotiable={toggleNegotiable}
            handleActiveForNegotiable={setActiveForNegotialble}
          />
        );
      case 8:
        return (
          <ChooseInfluencer
            selectedInfluncer={influencer}
            toggleInfluncer={toggleInfluncer}
            influencers={influencers}
            handleActiveForInfluncer={setActiveForInfluncer}
          />
        );
      case 9:
        return (
          <ReviewAndSend
            campaignName={campaignName}
            startDate={startDate}
            endDate={endDate}
            startTime={startTime}
            endTime={endTime}
            discount={discount}
            discountType={discountType}
            customeMessage={customeMessage}
            selectedMembers={selectedMembers}
            budget={budget}
            targetGrossSale={targetGrossSale}
            collections={collections}
            deliverables={deliveries}
            compensations={compensations}
            compensationPayment={compensationPayment}
            selectedNegotiable={selectedNegotiable}
            selectedInfluncer={influencer}
            handleActiveStep={(value) => setActiveStep(value)}
            toggleComponent={toggleComponent}
            team={team}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  const partialFilledForm = () => {
    if (campaignName !== '' && startDate !== '' && endDate !== '' && campaignError === '' && discountType !== '' && discount !== '') {
      setActiveSave(true);
    } else {
      setActiveSave(false);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    try {
      const campaigns = await API.graphql({
        query: `{
        campaigns(brandId: "${brandId}") {
          campaigns {
            name
          }
        }
      }`,
      });
      setCampaigns(campaigns.data.campaigns.campaigns);
    } catch (e) { }
  };

  const filledForm = () => {
    if (
      campaignError === '' &&
      campaignName !== '' &&
      startDate !== '' &&
      endDate !== '' &&
      startTime !== '' &&
      endTime !== '' &&
      discount !== '' &&
      discountType !== '' &&
      customeMessage !== '' &&
      startDateError === false &&
      endDateError === false &&
      startTimeError === false &&
      endTimeError === false
    ) {
      setActiveNext(true);
    } else setActiveNext(false);
  };

  const handleNext = (activeSetp) => {
    if (activeStep === 1) {
      const startDateTime = moment(startDate + ' ' + startTime);
      if (startDateTime.isBefore(moment())) {
        setStartTimeError(true);
      } else {
        setStartTimeError(false);
        if (lastStep !== 0) {
          setActiveStep(lastStep);
          setLastStep(0)
        } else {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      }
    } else if (activeSetp !== 9) {
      if (lastStep !== 0) {
        setActiveStep(lastStep);
        setLastStep(0)
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCancelCampaignDialog = () => {
    if (campaignName !== '' && startDate !== '' && endDate !== '') {
      setOpenCDialog(true);
    } else {
      handleCancel();
    }
  };

  const handleCancelCDialog = () => {
    setOpenCDialog(false);
    setStartTimeError(false);
    setEndTimeError(false);
    setStartDateError(false);
    setEndDateError(false);
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
            <img className={styles.logoDiv} src={logo} alt='Logo' />
            <h2 className={styles.heading}>Create a Campaign</h2>
            <div className={styles.setpsContainer}>
              {steps.map((label, index) => (
                <>
                  {index > 0 ? (
                    <div key={index} className={styles.stepItem}>
                      {activeStep === index ? (
                        <div className={styles.active}></div>
                      ) : activeStep < index ? (
                        <RadioButtonUncheckedIcon />
                      ) : activeStep < index ? (
                        <RadioButtonUncheckedIcon />
                      ) : (
                              <CheckCircleIconSvg viewBox='0 0 31 31' />
                            )}
                      <span
                        className={
                          activeStep === index
                            ? styles.activeLabel
                            : styles.inActiveLabel
                        }
                        onClick={() => leftSideDawerClick(index)}
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
          <div className={styles.campaignContainer}>
            <DialogTitle className={styles.dialogTitle}>
              <div className={styles.header}>
                {activeStep > 1 ? (
                  <span onClick={handleBack}>
                    <ChevronSVG />
                  </span>
                ) : (
                    <div></div>
                  )}
                <span onClick={handleCancelCampaignDialog}>
                  <XSVG />
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
                {activeSave || (campaign !== undefined && activeSave) ? (
                  <span
                    onClick={() => {
                      campaign !== undefined
                        ? updateCampaign()
                        : sendCampaignInvite();
                    }}
                  >
                    Save and finish later
                  </span>
                ) : null}
              </div>
              <button
                onClick={(e) =>
                  activeStep === 9
                    ? sendCampaignInvite()
                    : handleNext(activeStep, e)
                }
                className={clsx(
                  styles.nextButton,
                  activeNext ? styles.activeButton : styles.inActiveButton
                )}
                disabled={!activeNext}
              >
                {activeStep === 9
                  ? 'Send Invite'
                  : 'Next'}
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
        message={campaign ? 'Are you sure you want to exit? You will lose any updates to this campaign since your last save.' : Translation.DIALOG.CAMPAIGN_CDIALOG_MSG}
      />
    </>
  );
};

export default AddCampaign;
