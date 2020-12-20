import React, { useEffect } from 'react';
import CreateDeliverable from './CreateDeliverable';
import AddIcon from '@material-ui/icons/Add';
import styles from './Deliverables.module.scss';

const Deliverables = ({ deliveries, handleDeliveries, handleDilverableContent,
	handleDeliverDeadlineDate, deliverableDate,
	handleDeliverableDate, handleActiveForDeliverable, handleRemoveDeliverable, fb, insta, tictock, youtube }) => {

	// const myRef = useRef(null);
	// const executeScroll = () => myRef.current.scrollIntoView();

	// const buttonClicked = () => {
	// 	myRef.current.scrollIntoView();
	// 	handleDeliveries();
	// }

	useEffect(() => {
		handleActiveForDeliverable();
	}, [deliveries])

	return (
		<div>

			{deliveries.map((item, index) => {
				return (
					<CreateDeliverable key={index}
						deliveries={deliveries}
						deliverableItem={item} index={index}
						handleDilverableContent={handleDilverableContent}
						handleDeliverDeadlineDate={handleDeliverDeadlineDate}
						handleDeliverableDate={handleDeliverableDate}
						deliverableDate={deliverableDate}
						handleRemoveDeliverable={handleRemoveDeliverable}
						fb={fb}
						insta={insta}
						tictock={tictock}
						youtube={youtube}
					/>)
			}
			)}
			<button className={styles.addDeliverable}
				onClick={handleDeliveries}> <AddIcon /> Add another deliverable</button>
		</div>)

}

export default Deliverables;