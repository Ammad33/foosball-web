import React, { useState, useEffect, useContext } from 'react';
import styles from './LemmonTemplate.module.scss';
import ColorComponent from '../ColorComponent';
import { Divider, Tooltip, Popover } from '@material-ui/core';
// import mainStyles from '../../../../index.module.scss';
import TextField from '../../../../components/TextField';
import styles1 from '../ImagePicker/ImagePicker.module.scss';
import { HelpCircle, X } from 'react-feather'
import { API, graphqlOperation } from 'aws-amplify';
import { RootContext } from '../../../../context/RootContext';
import Iframe from 'react-iframe';




const LemmonTemplate = ({ campaignId , internalState }) => {
	const [buttonColor, setButtonColor] = useState("#B4C389");
	const [quotesColor, setQuotesColor] = useState("#B4C389");
	const [footerColor, setFooterColor] = useState("#B4C389");
	const [shopColor, setShopColor] = useState("#FEF5CB");
	const [heroImage1, setHeroImage1] = useState(null);
	const [heroImage2, setHeroImage2] = useState(null);
	const [heroImage3, setHeroImage3] = useState(null);
	const [image2, setImage2] = useState(null);
	const [quoteMessage, setQuoteMessage] = useState('');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [heroUrl, setHeroUrl] = useState('');
	const [campaign, setCampaign] = useState('');

	const { brandId, currentUser } = useContext(RootContext);



	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	useEffect(() => {
		debugger;
		window.scrollTo({ top: 0, behavior: 'smooth' });
		let id = campaignId.split('#');
		setCampaign(id[1]);
	}, [])

	useEffect(() => {
		if (internalState && internalState != null && internalState === 'CONTRACT_SIGNED') {
			createOrUpdateMicroSite();
		}
	}, [footerColor, quoteMessage, quotesColor]);


	const createOrUpdateMicroSite = async () => {

		let data = {
			appHeader: {
				shopCtaColor: "#D38989",
				titleBgColor: "#FEF5CB"
			},
			campaignId: `${campaignId}`,
			footer: {
				bgColor: footerColor
			},
			influencerDisplayName: "felice",
			influencerId: `${brandId}`,
			influencerQuote: {
				quoteAuthor: "Anthony Author",
				quoteContent: quoteMessage,
				quoteIconColor: quotesColor
			},
			mainHeader: {
				dark: false
			},
			productBuyBgColor: "#984949",
			productBuyTextColor: "#FFFFFF",
			products: {
				direction: 'ROW',
				total: 10
			},
			shopBelow: {
				bgColor: shopColor
			},
			template: 'FOUR'
		};

		try {
			let response = await API.graphql(
				graphqlOperation(

					`mutation  createOrUpdateMicrosite($input: MicrositeInput !) {
														createOrUpdateMicrosite(input: $input) {
										appHeader {
												imageLargeUploadUrl
												imageMediumUploadUrl
												imageUploadUrl
										}
										footer {
												logoUploadUrl
										}
										hero {
												imageLargeUploadUrl
												imageMediumUploadUrl
												imageUploadUrl
										}
										influencerQuote {
												imageUploadUrl
										}
										mainHeader {
												brandImageUploadUrl
												influencerImageUploadUrl
										}
										microsite {
												template
										}
								}
						}`,
					{
						input: data,
					}))

			if (response.data && response.data.createOrUpdateMicrosite) {
				if (response.data.createOrUpdateMicrosite.hero && response.data.createOrUpdateMicrosite.hero !== null) {
					if (response.data.createOrUpdateMicrosite.mainHeader.influencerImageUploadUrl) {
						setHeroUrl(response.data.createOrUpdateMicrosite.mainHeader.influencerImageUploadUrl);
					}


				}

				// if (response.data.createOrUpdateMicrosite.hero && response.data.createOrUpdateMicrosite.hero !== null) {

				// }

			}
		} catch (error) {
			console.log(error);
		}
	};

	const requestMicrositeApproval = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation requestMicrositeApproval {
							requestMicrositeApproval( 
								campaignId: "${campaignId}",
								influencerId: "${brandId}"
							)
						}`
				)
			)
			window.location.reload();
		}
		catch (e) {
			console.log("Error in requestin microSite approval ", e)
		}
	}

	return (
		<>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'right',
					horizontal: 'center',
				}}
				PaperProps={{
					style: {
						boxSizing: 'border-box',
						height: '80px',
						width: '222.5px',
						border: '1px solid #939393',
						backgroundColor: '#FFFFFF',
						color: '#000000',
						fontFamily: 'Poppins',
						fontSize: '14px',
						fontWeight: '500',
						letterSpacing: 0,
						lineHeight: '21px',
						padding: '19px 17px 19px 24px'
					},
				}}
				transformOrigin={{
					vertical: 'right',
					horizontal: 'center',
				}}
			>
				<div className={styles1.tooltip} >Image should be no larger than 800 <X style={{ paddingTop: '10px' }} /> 500.</div>

			</Popover>

			<div>
				<div className={styles.mainContainer}>
					<div className={styles.firstContainer}>
						<h4>
							Customize Lemmon
                </h4>
						<ColorComponent heading="Button color" value={buttonColor} handlValue={(e) => setButtonColor(e.target.value)} />
						<div className={styles1.mainContainer}>
							<div className={styles1.firstContainer}>
								<div >
									<h6>Hero Image 1</h6>

									<HelpCircle onClick={handleClick} />

								</div>
								<label htmlFor='hero'>Upload</label>
								<input id='hero' style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => setHeroImage1(URL.createObjectURL(e.target.files[0]))} />

							</div>
							<div className={styles1.secondConatiner}>
								{heroImage1 !== null && <img src={heroImage1} />}
							</div>

						</div >
						<div className={styles1.mainContainer}>
							<div className={styles1.firstContainer}>
								<div >
									<h6>Hero Image 2</h6>

									<HelpCircle onClick={handleClick} />

								</div>
								<label htmlFor='hero'>Upload</label>
								<input id='hero' style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => setHeroImage2(URL.createObjectURL(e.target.files[0]))} />

							</div>
							<div className={styles1.secondConatiner}>
								{heroImage2 !== null && <img src={heroImage2} />}
							</div>

						</div >
						<div className={styles1.mainContainer}>
							<div className={styles1.firstContainer}>
								<div >
									<h6>Hero Image 3</h6>

									<HelpCircle onClick={handleClick} />

								</div>
								<label htmlFor='hero'>Upload</label>
								<input id='hero' style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => setHeroImage3(URL.createObjectURL(e.target.files[0]))} />

							</div>
							<div className={styles1.secondConatiner}>
								{heroImage3 !== null && <img src={heroImage3} />}
							</div>

						</div >

						<Divider style={{ marginBottom: '33px' }} />
						<ColorComponent heading="Quotes color" value={quotesColor} handlValue={(e) => setQuotesColor(e.target.value)} />
						<TextField
							id='outlined-basic'
							fullWidth
							multiline
							value={quoteMessage}
							onChange={(e) => setQuoteMessage(e.target.value)}
							rows={4}
							placeholder="Quote about product"
							variant='outlined'
						/>
						<Divider style={{ marginBottom: '33px', marginTop: '33px' }} />
						<div className={styles1.mainContainer}>
							<div className={styles1.firstContainer}>
								<div >
									<h6>Image 2</h6>
									<Tooltip placement="right"
										title={<div className={styles1.tooltip} >Image should be no larger than 800<span><X /></span>500  </div>}
									>
										<HelpCircle onClick={handleClick} />
									</Tooltip>
								</div>
								<label htmlFor={'image2'}>Upload</label>
								<input id={'image2'} style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => setImage2(URL.createObjectURL(e.target.files[0]))} />

							</div>
							<div className={styles1.secondConatiner}>
								{image2 !== null && <img src={image2} />}
							</div>

						</div >

						<Divider style={{ marginBottom: '33px' }} />
						<ColorComponent heading="Footer Color" value={footerColor} handlValue={(e) => setFooterColor(e.target.value)} />

					</div>
					<div className={styles.secondContainer}>
						<Iframe
							url={`https://preview.influence-sciences.com/?influencerId=${brandId}&campaignId=campaign%23${campaign}&accessToken=${currentUser.signInUserSession.accessToken.jwtToken}`}
							width="100%"
							height="100%"
							id="myId"
							// className="myClassname"
							className={styles.secondContainer}
							display="initial"
							position="relative" />
					</div>
				</div >
				<div className={styles.buttonContainer}>
					<button className={styles.sendButton} onClick={() => requestMicrositeApproval()}> Send to Brand for Approval</button>

				</div>
			</div>
		</>
	);

};

export default LemmonTemplate;