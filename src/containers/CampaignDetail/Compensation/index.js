import React from 'react';
import styles from './Compensation.module.scss';
import { Edit } from 'react-feather';

const Compensation = ({ onClick, handleEdit, compensation, status, targetGrossSales, paymentSchedule }) => {

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	const getPaymentSchedule = (compensation) => {
		switch (compensation) {
			case 'FIRST_OF_MONTH':
				return (
					'1st of every month');
			case 'FIFTEENTH_OF_MONTH':
				return ('15th of every month');
			case 'LAST_DAY_OF_MONTH':
				return ('Last day of every month');
			default:
				return '';
		}
	}

	const getCompensationType = () => {
		switch (compensation[0].__typename) {
			case 'CompRevenueShare':
				return (
					<p>Revenue Share</p>);
			case 'CompCashPerPost':
				return (<p>Cash Per Post</p>);
			case 'CompCashPerMonthlyDeliverable':
				return (<p>Cash Per Monthly Deliverable</p>);
			case 'CompGiftCard':
				return (<p>Gift Card</p>);
			default:
				return '';
		}
	}
	const getCompensationHeading = () => {
		switch (compensation[0].__typename) {
			case 'CompRevenueShare':
				return (
					<h6>Revenue Share Percentage</h6>);
			case 'CompCashPerPost':
				return (<h6>Amount per Post</h6>);
			case 'CompCashPerMonthlyDeliverable':
				return (<h6>Amount Per Monthly Deliverable</h6>);
			case 'CompGiftCard':
				return (<h6>Gift Card Amount</h6>);
			default:
				return <h6></h6>;
		}
	}

	console.log(targetGrossSales);

	const getCompensationAmount = () => {
		switch (compensation[0].__typename) {
			case 'CompRevenueShare':
				return (
					<p>{compensation[0].percentage && numberWithCommas(Math.trunc(compensation[0].percentage * 1000))}% ($ {numberWithCommas(Math.trunc(parseFloat((compensation[0].percentage * 1000) * parseFloat(targetGrossSales.amount / 100))))})</p>);
			case 'CompCashPerPost':
				return (<p>${compensation[0].amount && numberWithCommas(Math.trunc(compensation[0].amount.amount))}</p>);
			case 'CompCashPerMonthlyDeliverable':
				return (<p>${compensation[0].amount && numberWithCommas(Math.trunc(compensation[0].amount.amount))}</p>);
			case 'CompGiftCard':
				return (<p>${compensation[0].amount && numberWithCommas(Math.trunc(compensation[0].amount.amount))}</p>);
			default:
				return <p></p>;
		}
	}
	return (
		<div className={styles.compensationContainer}>
			<div className={styles.headerContainer}>
				<h1>Compensation</h1>
				{(status && status !== 'INVITED') ? (
					<Edit onClick={() => handleEdit(6)} />
				) : (
						''
					)}
			</div>
			<div className={styles.conatianer}>
				<div className={styles.detailSubContent}>
					<h6>Influencer Schedule Payment </h6>
					<p>{paymentSchedule && paymentSchedule !== null ? getPaymentSchedule(paymentSchedule) : ''}</p>
				</div>
				{

				}
				<div className={styles.detailSubContent}>
					<h6>Compensation Type</h6>
					{
						compensation && compensation.length > 0 && getCompensationType()
					}

				</div>
				<div className={styles.detailSubContent}>
					{compensation && compensation.length > 0 && getCompensationHeading()}
					<p>{compensation && compensation.length > 0 && getCompensationAmount()}</p>
				</div>
			</div>
			{compensation && compensation.length > 1 &&
				<button onClick={() => onClick('Compensation')}>See all</button>
			}
		</div>
	);
};

export default Compensation;
