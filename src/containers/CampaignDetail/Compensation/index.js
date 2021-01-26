import React from 'react';
import styles from './Compensation.module.scss';
import { Edit } from 'react-feather';

const Compensation = ({ onClick, handleEdit, compensation, status }) => {
	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

	const getCompensationAmount = () => {
		switch (compensation[0].__typename) {
			case 'CompRevenueShare':
				return (
					<p>{compensation[0].percentage && numberWithCommas(Math.trunc(compensation[0].percentage * 1000))}%</p>);
			case 'CompCashPerPost':
				return (<p>{compensation[0].amount && numberWithCommas(Math.trunc(compensation[0].amount.amount))}$</p>);
			case 'CompCashPerMonthlyDeliverable':
				return (<p>{compensation[0].amount && numberWithCommas(Math.trunc(compensation[0].amount.amount))}$</p>);
			case 'CompGiftCard':
				return (<p>{compensation[0].amount && numberWithCommas(Math.trunc(compensation[0].amount.amount))}$</p>);
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
					<p>Monthly</p>
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
