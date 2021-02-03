import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './CreateMicrosite.module.scss';
import { ChevronRight, ChevronLeft } from 'react-feather';
import MicrositeTemplate from '../../../assets/Microstie Template 1.png';
import EverettTemplateImage from '../../../assets/Microstie_Template_2.png'
import LemmonTemplateImage from '../../../assets/Microstie_Template_3.png'
import ArvonTemplateImage from '../../../assets/Microstie_Template_4.png'
import Template from './WhitneyTemplate';
import ChangeTemplate from '../ChangeTemplate';
import { API, graphqlOperation } from 'aws-amplify';
import { RootContext } from '../../../context/RootContext';

const CreateMicrosite = ({
	name,
	campaignId,
	internalState,
	template
}) => {
	const history = useHistory();

	const [templated, setTemplate] = useState('');
	const [saveBack, setSaveBack] = useState('');
	const [confirmTemplate, setConfirmTemplate] = useState(false);
	const { brandId } = useContext(RootContext);

	const handleCancel = () => {
		setTemplate(saveBack);
		setConfirmTemplate(false);
	}
	const handleOk = () => {
		setTemplate('');
		setSaveBack('');
		setConfirmTemplate(false)
	}

	// const getInternalState = async () => {
	// 	try {
	// 		const state = await API.graphql({
	// 			query: `{
	// 					influencerCampaign(influencerId: "${brandId}", id: "${campaignId}") {
	// 						id
	// 						internalState
	// 					}
	// 				}`
	// 		});
	// 		setInternalState(state.data.influencerCampaign.internalState);
	// 	}
	// 	catch (e) {
	// 		console.log("error", e)
	// 	}
	// }

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setTemplate(template);
	}, []);


	return (
		<>
			<ChangeTemplate
				open={confirmTemplate}
				onCancel={handleCancel}
				onConfirm={handleOk}
			/>

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
					templated !== '' ? <>
						<div onClick={() => {
							const newValue = templated;
							setSaveBack(newValue);
							setTemplate('');
							setConfirmTemplate(true);
						}
						} className={styles.backTemplate}>
							<ChevronLeft />
							<span>Back to templates</span>
						</div>

						<Template campaignId={campaignId} internalState={internalState} template={templated} />
					</> :
						<div className={styles.contentContainer}>
							<div className={styles.micrositeContainer}>
								<p> Choose a microsite template below and then customize it.</p>
								<div className={styles.templateContainer}>
									<div className={styles.template}>
										<div onClick={() => setTemplate('ONE')}>
											<img src={MicrositeTemplate} />
										</div>
										<h6>Whitney</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => setTemplate('TWO')}>
											<img src={EverettTemplateImage} />
										</div>
										<h6>Everett</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => setTemplate('FOUR')}>
											<img src={LemmonTemplateImage} />
										</div>
										<h6>Lemmon</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => setTemplate('THREE')}>
											<img src={ArvonTemplateImage} />
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
