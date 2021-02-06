import React, { useState, useEffect, useContext } from 'react';
import styles from './WhitneyTemplate.module.scss';
import ColorComponent from '../ColorComponent';
import { Divider, Tooltip, Popover } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import styles1 from '../ImagePicker/ImagePicker.module.scss';
import { HelpCircle, X } from 'react-feather'
import { API, graphqlOperation } from 'aws-amplify';
import { RootContext } from '../../../../context/RootContext';
import Iframe from 'react-iframe';
import uploadImages from '../../../../actions/uploadImges';
import config from '../../../../config';



const Templates = ({ campaignId, internalState, template, microsite,
	brand,
	influencer }) => {

	///*****States for colors and images for all templates */

	const [headerColor, setHeaderColor] = useState("");
	const [headerColorOpen, setHeaderColorOpen] = useState(false);
	const [buttonColor, setButtonColor] = useState("");
	const [buttonColorOpen, setButtonColorOpen] = useState(false);
	const [quotesColor, setQuotesColor] = useState("");
	const [quotesColorOpen, setQuotesColorOpen] = useState(false);
	const [quotesBGColor, setQuotesBGColor] = useState("");
	const [quotesBGColorOpen, setQuotesBGColorOpen] = useState(false);
	const [shopColor, setShopColor] = useState("");
	const [shopColorOpen, setShopColorOpen] = useState(false);
	const [footerColor, setFooterColor] = useState("");
	const [footerColorOpen, setFooterColorOpen] = useState(false);
	const [heroImage1, setHeroImage1] = useState(null);
	const [heroImage2, setHeroImage2] = useState(null);
	const [heroImage3, setHeroImage3] = useState(null);
	const [update, setUpdate] = useState(false);
	const [heroImage1File, setHeroImage1File] = useState(null);
	const [heroImage2File, setHeroImage2File] = useState(null);
	const [heroImage3File, setHeroImage3File] = useState(null);
	const [influencerImage, setInfluencerImage] = useState(null);
	const [brandImage, setBrandImage] = useState(null);
	const [heroImage, setHeroImage] = useState(null);
	const [heroFile, setHeroFile] = useState(null);
	const [image2, setImage2] = useState(null);
	const [image2File, setImage2File] = useState(null);
	const [quoteMessage, setQuoteMessage] = useState('');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [heroUrl, setHeroUrl] = useState('');
	const [image2Url, setImage2Url] = useState('');
	const { brandId, currentUser } = useContext(RootContext);


	//*** Call when pop open on */

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};


	//*** Close the pop on image dimistions */

	const handleClose = () => {
		setAnchorEl(null);
	};

	var elements = [];
	function loaded() {
		console.log("you have loaded an image");
	}

	function CreateFileFrom(dir) {

		/* defining runtime variables */
		var extension = dir.split('.').pop();
		var keys = {
			"png": "IMG", "jpg": "IMG", "jpeg": "IMG",
			"js": "SCRIPT", "json": "SCRIPT",
			"mp3": "AUDIO", "wav": "AUDIO"
		};
		var obj = document.createElement(keys[extension]) || {};
		obj.src = dir;

		/* onload function called when the resource is loaded */
		obj.onload = (e) => {

			elements.push(e.path[0]);
			loaded()
		}

		/* make sure that the data is compitable */
		if (keys[extension] == null) { console.error("not supported media type " + extension); return; }
	}

	//*** Set Colors For Each Template When Component loads first time */

	useEffect(() => {

		if (template === 'ONE' && (microsite === '' || microsite === undefined)) {
			setHeaderColor('#984949');
			setButtonColor('#984949');
			setQuotesColor('#984949');
			setShopColor('#D38989');
			setFooterColor('#984949');
		} else if (template === 'ONE' && microsite !== null && microsite != '') {
			setHeaderColor(microsite.appHeader.titleBgColor);
			setButtonColor(microsite.appHeader.shopCtaColor);
			setQuotesColor(microsite.influencerQuote.quoteIconColor);
			setShopColor(microsite.shopBelow.bgColor);
			setFooterColor(microsite.footer.bgColor);
			console.log(microsite);
			setQuoteMessage(microsite.influencerQuote.quoteContent);
			setHeroImage(microsite.hero.imageLarge && microsite.hero.imageLarge !== null ? microsite.hero.imageLarge : null)
			setImage2(microsite.appHeader.imageLarge && microsite.appHeader.imageLarge !== null ? microsite.appHeader.imageLarge : null)
		} else if (template === 'TWO') {
			setHeaderColor('#FEF5CB');
			setButtonColor('#DCB7D1');
			setQuotesColor('');
			setShopColor('#FEF5CB');
			setFooterColor('#DCB7D1');
			setQuotesBGColor("#F1E2EC");
		} else if (template === 'FOUR') {
			setHeaderColor('#B4C389');
			setButtonColor('#B4C389');
			setQuotesColor('');
			setShopColor('#FEF5CB');
			setFooterColor('#B4C389');
			setQuotesBGColor("#B4C389");

		} else if (template === 'THREE') {
			setHeaderColor('#2B426F');
			setButtonColor('#2B426F');
			setQuotesColor('');
			setShopColor('#2B426F');
			setFooterColor('#2B426F');
			setQuotesBGColor("#2B426F");
		}

	}, [template, microsite]);


	useEffect(() => {
		if (brand && brand !== null && brand.imageUrl !== null) {
			setBrandImage(CreateFileFrom(brand.imageUrl))
			getImageFormUrl(brand.imageUrl, (image) => {
				console.log(image);
			})
		}
	}, [brand])

	console.log(brandImage);

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const [campaign, setCampaign] = useState('');

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		let id = campaignId.split('#');
		setCampaign(id[1]);
	}, []);

	function getImageFormUrl(url, callback) {
		var img = new Image();
		img.setAttribute('crossOrigin', 'anonymous');
		img.onload = function (a) {
			var canvas = document.createElement("canvas");
			canvas.width = this.width;
			canvas.height = this.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(this, 0, 0);

			var dataURI = canvas.toDataURL("image/jpg");

			// convert base64/URLEncoded data component to raw binary data held in a string
			var byteString;
			if (dataURI.split(',')[0].indexOf('base64') >= 0)
				byteString = atob(dataURI.split(',')[1]);
			else
				byteString = unescape(dataURI.split(',')[1]);

			// separate out the mime component
			var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

			// write the bytes of the string to a typed array
			var ia = new Uint8Array(byteString.length);
			for (var i = 0; i < byteString.length; i++) {
				ia[i] = byteString.charCodeAt(i);
			}

			return callback(new Blob([ia], { type: mimeString }));
		}

		img.src = url;
	}



	//*** API Call for Hero Image */

	const PostHeroImage = (URL) => {
		uploadImages(URL, heroFile);
		setUpdate(!update);
	}


	//*** API Call for Image 2 */

	const PostImage2 = (URL) => {
		uploadImages(URL, image2File);
		setUpdate(!update);

	}

	//** Call Life cycle hook for first time and when any of these state is changed */

	useEffect(() => {
		if ((internalState && internalState != null && internalState === 'CONTRACT_SIGNED' && headerColor !== '')) {
			createOrUpdateMicroSite();
		}
	}, [headerColor, buttonColor, footerColor, shopColor, quoteMessage, quotesColor, quotesBGColor, template, update]);

	//* API Call to get microsite data */





	//** API Call for create and update microsite */

	const createOrUpdateMicroSite = async () => {
		let data = {
			appHeader: {
				shopCtaColor: buttonColor,
				titleBgColor: headerColor
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
				quoteIconColor: quotesColor,
				bgColor: quotesBGColor
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
			template: template
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
					if (response.data.createOrUpdateMicrosite.hero.imageLargeUploadUrl) {
						setHeroUrl(response.data.createOrUpdateMicrosite.hero.imageLargeUploadUrl);
					}
				}

				if (response.data.createOrUpdateMicrosite.appHeader && response.data.createOrUpdateMicrosite.appHeader !== null) {
					if (response.data.createOrUpdateMicrosite.appHeader.imageLargeUploadUrl) {
						if (template === 'TWO' || template === 'THREE' || template === 'FOUR') {
							setImage2Url(response.data.createOrUpdateMicrosite.appHeader.imageUploadUrl)
						} else {
							setImage2Url(response.data.createOrUpdateMicrosite.appHeader.imageLargeUploadUrl);
						}
					}
				}
			}
		} catch (error) {
			console.log(error);
		}
	};


	/** Call when hero file is uploading and post Image file is uploading */

	useEffect(() => {

		if (heroFile !== null && heroUrl && heroUrl !== '') {
			PostHeroImage(heroUrl);
		}
		if (image2File !== null && image2Url && image2Url !== '') {
			PostImage2(image2Url);
		}
	}, [heroFile, image2File]);



	/** Request micro site approvel */

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
	};

	//** GEt heading of each Template */

	const getHeading = (template) => {
		switch (template) {
			case 'ONE':
				return 'Whitney';
			case 'TWO':
				return 'Everett';
			case 'THREE':
				return 'Avron';
			case 'FOUR':
				return 'Lemmon';
			default:
				return 'Whitney';

		}
	}

	const handleHeaderColorComplete = (color, event) => {
		setHeaderColor(color.hex);
		setHeaderColorOpen(false);
	}

	const handleButtonColorComplete = (color, event) => {
		setButtonColor(color.hex);
		setButtonColorOpen(false);
	}

	const handleShopColorComplete = (color, event) => {
		setShopColor(color.hex);
		setShopColorOpen(false);
	}

	const handleQuotesColorComplete = (color, event) => {
		setQuotesColor(color.hex);
		setQuotesColorOpen(false);
	}

	const handleQuotesBGColorComplete = (color, event) => {
		setQuotesBGColor(color.hex);
		setQuotesBGColorOpen(false);
	}


	const handleFooterColorComplete = (color, event) => {
		setFooterColor(color.hex);
		setFooterColorOpen(false);
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
							Customize {getHeading(template)}
						</h4>
						{template !== 'FOUR' && <ColorComponent
							heading="Header highlight color"
							value={headerColor}
							open={headerColorOpen}
							handlValue={(e) => setHeaderColor(e.target.value)}
							onClick={() => setHeaderColorOpen(!headerColorOpen)}
							onChangeComplete={handleHeaderColorComplete} />}
						<ColorComponent
							heading="Button color"
							open={buttonColorOpen}
							onClick={() => setButtonColorOpen(!buttonColorOpen)}
							value={buttonColor}
							handlValue={(e) => setButtonColor(e.target.value)}
							onChangeComplete={handleButtonColorComplete}
						/>

						{template !== 'FOUR' &&
							<div className={styles1.mainContainer}>
								<div className={styles1.firstContainer}>
									<div >
										<h6>Hero Image</h6>

										<HelpCircle onClick={handleClick} />

									</div>
									<label htmlFor='hero'>Upload</label>
									<input id='hero' style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => { setHeroFile(e.target.files[0]); setHeroImage(URL.createObjectURL(e.target.files[0])) }} />

								</div>
								<div className={styles1.secondConatiner}>
									{heroImage !== null && <img src={heroImage} />}
								</div>

							</div >
						}

						{template === 'FOUR' &&
							<>
								<div className={styles1.mainContainer}>
									<div className={styles1.firstContainer}>
										<div >
											<h6>Hero Image 1</h6>

											<HelpCircle onClick={handleClick} />

										</div>
										<label htmlFor='hero'>Upload</label>
										<input id='hero' style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => { setHeroFile(e.target.files[0]); setHeroImage(URL.createObjectURL(e.target.files[0])) }} />

									</div>
									<div className={styles1.secondConatiner}>
										{heroImage !== null && <img src={heroImage} />}
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
							</>
						}

						<Divider style={{ marginBottom: '33px' }} />
						{template === 'ONE' && <ColorComponent
							heading="Quotes color"
							open={quotesColorOpen}
							onClick={() => setQuotesColorOpen(!quotesColorOpen)}
							value={quotesColor}
							handlValue={(e) => setQuotesColor(e.target.value)}
							onChangeComplete={handleQuotesColorComplete}
							bottom={true}
						/>}
						{template !== 'ONE' && <ColorComponent
							heading="Quotes background color"
							value={quotesBGColor}
							open={quotesBGColorOpen}
							onClick={() => setQuotesBGColorOpen(!quotesBGColorOpen)}
							handlValue={(e) => setQuotesBGColor(e.target.value)}
							onChangeComplete={handleQuotesBGColorComplete}
							bottom={true}
						/>}
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
								<input id={'image2'} style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => { setImage2File(e.target.files[0]); setImage2(URL.createObjectURL(e.target.files[0])) }} />

							</div>
							<div className={styles1.secondConatiner}>
								{image2 !== null && <img src={image2} />}
							</div>

						</div >
						{(template === 'ONE' || template === 'TWO') && <ColorComponent
							heading="Shop below background color"
							value={shopColor}
							open={shopColorOpen}
							onClick={() => setShopColorOpen(!shopColorOpen)}
							handlValue={(e) => setShopColor(e.target.value)}
							onChangeComplete={handleShopColorComplete}

						/>}

						<Divider style={{ marginBottom: '33px' }} />
						<ColorComponent heading="Footer Color"
							value={footerColor}
							open={footerColorOpen}
							onClick={() => setFooterColorOpen(!footerColorOpen)}
							onChangeComplete={handleFooterColorComplete}
							handlValue={(e) => setFooterColor(e.target.value)} />

					</div>
					<div className={styles.secondContainer}>
						<Iframe
							url={`${config.fomo_Url}/?influencerId=${brandId}&campaignId=campaign%23${campaign}&accessToken=${currentUser.signInUserSession.accessToken.jwtToken}`}
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

export default Templates;