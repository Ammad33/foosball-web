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
import { API } from 'aws-amplify';
import { RootContext } from '../../../context/RootContext';
import Tooltip from '@material-ui/core/Tooltip';

const CreateMicrosite = ({
	name,
	campaignId,
	internalState,
	microsite,
	getCampaign,
	brand,
	influencer
}) => {


	const history = useHistory();
	const [saveBack, setSaveBack] = useState('');
	const [confirmTemplate, setConfirmTemplate] = useState(false);
	const [changeTemplate, setChangeTemplate] = useState(false);
	const [temprorayTemplate, setTemprorayTemplate] = useState('')
	const { brandId, templated, setTemplate, setCreateMicrositeFlag } = useContext(RootContext);
	const [count, setCount] = useState(0);
	// const [microsite1, setMiscroSite1] = useState(microsite);

	const handleCancel = () => {
		// setTemplate(saveBack);
		// getCampaign();
		// setSaveBack('');
		// getCampaign();
		setConfirmTemplate(false);
		setChangeTemplate(false);
	}
	const handleOk = () => {
		setTemplate(temprorayTemplate);
		setTemprorayTemplate('');
		setSaveBack('');
		// getCampaign();
		setConfirmTemplate(false);
		setChangeTemplate(true);
	}

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		// if (microsite !== undefined) {
		// 	setTemplate(microsite && microsite != '' ? (microsite.template) : (""));
		// }
	}, []);

	const handleTemplateClick = (index) => {
		if (saveBack !== '' && saveBack !== index) {
			setConfirmTemplate(true);
			setTemprorayTemplate(index)
		}
		else {
			setChangeTemplate(false);
			setTemplate(index);
			if (count !== 0) {
				getCampaign();
			}
			setCount(1);
		}
	}

	console.log(microsite);

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
					<Tooltip title={name} >
						<span onClick={() => { setCreateMicrositeFlag(false); setTemplate('') }}>
							{name.length > 15 ? (`${name.substring(0, 15)}...`) : name}
						</span>
					</Tooltip>
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
							// setConfirmTemplate(true);
						}
						} className={styles.backTemplate}>
							<ChevronLeft />
							<span>Back to templates</span>
						</div>

						<Template
							campaignId={campaignId}
							internalState={internalState}
							template={templated}
							microsite={microsite}
							influencer={influencer}
							brand={brand}
							changeTemplate={changeTemplate}
						/>
					</> :
						<div className={styles.contentContainer}>
							<div className={styles.micrositeContainer}>
								<p> Choose a microsite template below and then customize it.</p>
								<div className={styles.templateContainer}>
									<div className={styles.template}>
										<div onClick={() => handleTemplateClick('ONE')}>
											<img src={MicrositeTemplate} />
										</div>
										<h6>Whitney</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => handleTemplateClick('TWO')}>
											<img src={EverettTemplateImage} />
										</div>
										<h6>Everett</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => handleTemplateClick('FOUR')}>
											<img src={LemmonTemplateImage} />
										</div>
										<h6>Lemmon</h6>
									</div>
									<div className={styles.template}>
										<div onClick={() => handleTemplateClick('THREE')}>
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
