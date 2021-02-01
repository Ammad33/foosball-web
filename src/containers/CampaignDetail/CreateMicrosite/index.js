import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './CreateMicrosite.module.scss';
import Button from '@material-ui/core/Button';
import { ChevronRight, ChevronLeft } from 'react-feather';
import MicrositeTemplate from '../../../assets/Microstie Template 1.png';
import EverettTemplate from '../../../assets/Microstie_Template_2.png'
import LemmonTemplate from '../../../assets/Microstie_Template_3.png'
import ArvonTemplate from '../../../assets/Microstie_Template_4.png'
import WhitneyTemplate from './WhitneyTemplate';

const CreateMicrosite = ({
	name,
	handleCreateMicrosite
}) => {
	const history = useHistory();

	const [template, setTemplate] = useState('');

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [])

	return (
		<>

			<div className={styles.mainContainer}>
				<div className={styles.crumsContainer}>
					<span onClick={() => history.push('/campaigns')}>Campaigns</span>
					<ChevronRight />
					<span onClick={() => window.location.reload()}>
						{name}
					</span>
					<ChevronRight />
					<span>Review and Sign</span>
					<ChevronRight />
					<span>Create Microsite</span>
				</div>
				{
					template !== '' ? <>
						<div onClick={() => setTemplate('')} className={styles.backTemplate}>
							<ChevronLeft />
							<span>Back to templates</span>
						</div>
						<WhitneyTemplate />
					</> :
						<div className={styles.contentContainer}>
							<div className={styles.micrositeContainer}>
								<p> Choose a microsite template below and then customize it.</p>
								<div className={styles.templateContainer}>
									<div className={styles.template}>
										<div onClick={() => setTemplate('whitney')}>
											<img src={MicrositeTemplate} />
										</div>
										<h6>Whitney</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => setTemplate('whitney')}>
											<img src={EverettTemplate} />
										</div>
										<h6>Everett</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => setTemplate('whitney')}>
											<img src={LemmonTemplate} />
										</div>
										<h6>Lemmon</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => setTemplate('whitney')}>
											<img src={ArvonTemplate} />
										</div>
										<h6>Arvon</h6>
									</div>
								</div>
							</div>
						</div>
				}
			</div>
		</>
	);
};

export default CreateMicrosite;
