import React from 'react';
import styles from './CompensationDetail.module.scss';

const CompensationDetail = ({ compensations, budget }) => {

    const getCompensationType = (compensation) => {
        switch (compensation.__typename) {
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

    const getCompensationTypeValue = (compensation) => {
        switch (compensation.__typename) {
            case 'CompRevenueShare':
                return (
                    <h6>${compensation.percentage && compensation.percentage * parseFloat(budget)}</h6>);
            case 'CompCashPerPost':
                return (<h6>${compensation.amount && compensation.amount.amount}</h6>);
            case 'CompCashPerMonthlyDeliverable':
                return (<h6>${compensation.amount && compensation.amount.amount}</h6>);
            case 'CompGiftCard':
                return (<h6>${compensation.amount && compensation.amount.amount}</h6>);
        }
    }

    const getCompensationHeading = (compensation) => {
        switch (compensation.__typename) {
            case 'CompRevenueShare':
                return (
                    <h6>Revenue Share Percentage</h6>);
            case 'CompCashPerPost':
                return (<h6>Amount per Post</h6>);
            case 'CompCashPerMonthlyDeliverable':
                return (<h6>Amount Per Monthly Deliverable</h6>);
            case 'CompGiftCard':
                return (<h6>Gift Card Amount</h6>);
        }
    }

    const getCompensationAmount = (compensation) => {
        switch (compensation.__typename) {
            case 'CompRevenueShare':
                return (
                    <p>{compensation.percentage && compensation.percentage * 1000}%</p>);
            case 'CompCashPerPost':
                return (<p>{compensation.amount && compensation.amount.amount}$</p>);
            case 'CompCashPerMonthlyDeliverable':
                return (<p>{compensation.amount && compensation.amount.amount}$</p>);
            case 'CompGiftCard':
                return (<p>{compensation.amount && compensation.amount.amount}$</p>);
        }
    }

    const getTotal = () => {
        let total = 0;
        compensations.forEach(item => {
            if (item.__typename === 'CompRevenueShare') {
                total = total + parseInt(item.percentage * parseFloat(budget));
            } else {
                total = total + parseInt(item.amount.amount);
            }
        })
        return total;
    }

    return (<div className={styles.compensationContainer}>
        <h1>Compensation</h1>
        <div className={styles.influencerPayment}>
            <h6>Influencer Schedule Payment </h6>
            <p className={styles.detailSubContent} >Monthly</p>
        </div>
        {compensations && compensations !== null && compensations.length > 0 && compensations.map((item, index) => {
            return (<>
                <div className={styles.header}>
                    <h6>Compensation Type {index + 1}</h6>
                    {getCompensationTypeValue(item)}
                </div>
                <div className={styles.detailSubContent}>
                    <h6>Compensation Type</h6>
                    {getCompensationType(item)}
                </div>
                <div className={styles.detailSubContent}>
                    {getCompensationHeading(item)}
                    {getCompensationAmount(item)}
                </div>

            </>)
        })}

        {compensations && compensations !== null && compensations.length > 0 && <div className={styles.header}>
            <h6>Total Comp Estimate:</h6>
            <h6>${getTotal()}</h6>
        </div>
        }
    </div >);
};

export default CompensationDetail;