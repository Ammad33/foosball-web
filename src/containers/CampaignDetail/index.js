import React, { useState, useContext, useEffect } from 'react';
import styles from './CampaignsDetails.module.scss';
import BrandCampaignDetail from './BrandCampaignDetail';
import {
	useHistory,
	withRouter,
} from 'react-router-dom';
import InfluencerCampaignDetail from './InfluencerCampaignDetail';
import { Select, MenuItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { RootContext } from '../../context/RootContext';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import _ from 'lodash';
import moment from 'moment';

const CampaignDetail = ({ location }) => {
	let campaignId = 'campaign' + location.hash;
	const history = useHistory();
	const [status, setStatus] = useState('');
	const [addCampaign, setAddCampagin] = useState(false);

	const [brandState, setBrandState] = useState(true);
	const { setActiveCampaign, brandId, brandType, currentUser, setCurrentUser, setTemplate, setShowLoader } = useContext(RootContext);
	const [selectedMembers, setSelectedMemebers] = useState([]);
	const [team, setTeam] = useState([]);
	const [search, setSearch] = useState('');
	const [headingValue, setHeadingValue] = useState('');
	const [internalState, setInternalState] = useState('');
	const [data, setData] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');

	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	const getAuth = async () => {

		try {
			const cognitoUser = await Auth.currentAuthenticatedUser();
			const currentSession = await Auth.currentSession();
			cognitoUser.refreshSession(currentSession.refreshToken, (err, session) => {
				// console.log('session', err, session);
				let currentUserAWS = { ...currentUser };
				currentUserAWS.signInUserSession = session;
				setCurrentUser(currentUserAWS);

			});
		} catch (e) {
			console.log('Unable to refresh Token', e);
		}

	}

	const handleSearch = async (e) => {
		setSearch(e.target.value);

		const members = [...team];
		setTeam(members.filter((item) => item.email.includes(e.target.value)));
		if (e.target.value === '') {
			let teamData = await getTeam();

			teamData = teamData.map((item) => item.user);

			if (
				selectedMembers &&
				selectedMembers !== null &&
				selectedMembers.length !== 0
			) {
				let data =
					teamData &&
					teamData !== null &&
					teamData.map((item) => {
						const index = selectedMembers.findIndex(
							(sec) => sec.email === item.email
						);
						if (index !== -1) {
							return;
						} else {
							return item;
						}
					});
				setTeam(_.compact(data));
			} else {
				setTeam(teamData);
			}
		}
	};

	const handleDelete = async () => {
		try {
			await API.graphql(
				graphqlOperation(
					`mutation deleteCampaign($brandId: ID!, $id: ID!) {
          deleteCampaign(brandId: $brandId, id:$id)
        }`,
					{
						brandId: brandId,
						id: campaignId,
					}
				)
			);
			setErrorMessage('');
			history.push('/');
		} catch (e) {

			let message = errorMessage;

			if (e.errors && e.errors.length > 0)
				e.errors.forEach((m) => {
					message = message + m.message;
				});

			setErrorMessage(message);
		}
	};

	const updateCampaign = async () => {
		try {
			const data = {
				brandId,
				id: campaignId,
				team: selectedMembers.map((item) => item.id),
			};

			await API.graphql(
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

			setErrorMessage('');

			getCampaign();

		} catch (e) {

			let message = errorMessage;

			if (e.errors && e.errors.length > 0)
				e.errors.forEach((m) => {
					message = message + m.message;
				});

			setErrorMessage(message);

		}
	};

	const getCampaign = async () => {

		setShowLoader(true);
		try {
			const campaign = await API.graphql({
				query:
					brandType.toLowerCase() === 'influencer'
						? `{
          influencerCampaign(influencerId: "${brandId}", id: "${campaignId}") {
            id
						name
						status
            startDate
            endDate
						invitationMessage
						invitedAt
            internalState
            paymentSchedule
            products {
              collection {
                id
                name
              }
              products {
                product {
                  id
                  name
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
                      altText
                      src
                    }
                  }
                  estimatedQty
                }
              }
            }     
						discount {
							... on PercentageDiscount {
								__typename
								percentage
							}
							... on FlatDiscount {
								__typename
								amount {
									amount
                }
                minimum {
                  amount
                  currency
                }
							}
						}
            compensation {
              ... on CompRevenueShare {
                __typename
                percentage
              }
              ... on CompCashPerPost {
                __typename
                amount {
                  amount
                  currency
                }
              }
              ... on CompCashPerMonthlyDeliverable {
                __typename
                amount {
                  amount
                  currency
                }
              }
              ... on CompGiftCard {
                __typename
                amount {
                  amount
                  currency
                }
                code
              }
            }
            
            budget {
              amount
              currency
            }
            targetGrossSales {
              amount
              currency
            }

  
            brandTeam {
              id
              imageUrl
              fullName
              email
            }
            brand {
              imageUrl
              id
              name
            }
            negotiables {
              campaignDuration
              monthlyRetainerFee
              postFee
              postFrequency
              revenueShare
							giftCard
            }
            deliverables {
              brandTag
              deadlineDate
              postType
              description
              frameContentType
              framesRequired
              frequency
              hashTag
              id
              platform
              posts
            }
            
            influencer {
              imageUrl
              name
              id
            }
            events {
              description
              time
						}
						microsite {
							appHeader {
								shopCtaColor
								titleBgColor
								imageLarge
								image
								image1
								image2
								image3
							}
							footer {
								bgColor
							}
							hero {
								imageLarge
							}
							influencerQuote {
								bgColor
								textColor
								quoteIconColor
								quoteContent
							}
							productBuyBgColor
							productBuyTextColor
							shopBelow {
								bgColor
							}
							template
						}
          }
         
      }`
						: `{
          campaign(brandId: "${brandId}", id: "${campaignId}") {
            id
						name
						status
            startDate
            endDate
						invitationMessage
            invitedAt
						paymentSchedule
						internalState
						micrositeUrl
            products {
              collection {
                id
                name
              }
              products {
                product {
                  id
                  name
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
                      altText
                      src
                    }
                  }
                  estimatedQty
                }
              }
            }       
						discount {
							... on PercentageDiscount {
								__typename
								percentage
							}
							... on FlatDiscount {
								__typename
								amount {
									amount
                }
                minimum {
                  amount
                  currency
                }
							}
						}
            compensation {
              ... on CompRevenueShare {
                __typename
                percentage
              }
              ... on CompCashPerPost {
                __typename
                amount {
                  amount
                  currency
                }
              }
              ... on CompCashPerMonthlyDeliverable {
                __typename
                amount {
                  amount
                  currency
                }
              }
              ... on CompGiftCard {
                __typename
                amount {
                  amount
                  currency
                }
                code
              }
            }
            
            budget {
              amount
              currency
            }
            targetGrossSales {
              amount
              currency
            }

            
            brandTeam {
              id
              imageUrl
              fullName
              email
            }
            brand {
              imageUrl
              id
              name
            }
            negotiables {
              campaignDuration
              monthlyRetainerFee
              postFee
              postFrequency
              revenueShare
							giftCard
            }
            deliverables {
              brandTag
              deadlineDate
              postType
              description
              frameContentType
              framesRequired
              frequency
              hashTag
              id
              platform
              posts
            }
            influencer {
              imageUrl
              name
              id
            }
            events {
              description
              time
						}
						microsite {
							appHeader {
								shopCtaColor
								titleBgColor
							}
							footer {
								bgColor
							}
							influencerQuote {
								bgColor
								textColor
								quoteIconColor
							}
							productBuyBgColor
							productBuyTextColor
							shopBelow {
								bgColor
							}
							template
						}
          } 
      }`,
			});
			setShowLoader(false);

			if (brandType.toLowerCase() == 'influencer') {
				campaign.data.influencerCampaign &&
					campaign.data.influencerCampaign !== null &&
					campaign.data.influencerCampaign.deliverables &&
					campaign.data.influencerCampaign.deliverables !== null &&
					campaign.data.influencerCampaign.deliverables.map((deliverable) => {
						deliverable.postType = deliverable.postType && deliverable.postType !== null ?
							deliverable.postType.charAt(0).toUpperCase() +
							deliverable.postType.toLowerCase().slice(1) : '';
						deliverable.frameContentType = deliverable.frameContentType && deliverable.frameContentType !== null ?
							deliverable.frameContentType.charAt(0).toUpperCase() +
							deliverable.frameContentType.toLowerCase().slice(1) : '';
						deliverable.platform = deliverable.platform && deliverable.platform !== null ?
							deliverable.platform.charAt(0).toUpperCase() +
							deliverable.platform.toLowerCase().slice(1) : '';
						deliverable.deadlineDate = new Date(
							deliverable.deadlineDate * 1000
						).toDateString();
					});
				campaign.data.influencerCampaign.events = campaign.data.influencerCampaign.events.map(
					(activity) => {
						activity.time = moment.unix(activity.time).format("MM/DD");
						return activity;
					}
				);
				setInternalState(campaign.data.influencerCampaign.internalState)
				setData(campaign.data.influencerCampaign);
				// if ((campaign.data &&
				// 	campaign.data !== null &&
				// 	campaign.data.influencerCampaign !== null && campaign.data.influencerCampaign.microsite !== null && campaign.data.influencerCampaign.internalState !== "MICROSITE_APPROVAL_REQUESTED")) {
				// 	setTemplate(campaign.data.influencerCampaign.microsite.template)
				// } else {
				// 	setTemplate('');
				// }
				if (
					campaign.data &&
					campaign.data !== null &&
					campaign.data.influencerCampaign !== null
				) {
					setStatus(
						campaign.data.influencerCampaign.status
							? campaign.data.influencerCampaign.status
							: 'CLOSED'
					);

					setSelectedMemebers(
						campaign.data.influencerCampaign.brandTeam
							? campaign.data.influencerCampaign.brandTeam
							: []
					);

					let teamData = await getTeam();
					teamData = teamData.map((item) => item.user);

					if (
						campaign.data.influencerCampaign.brandTeam &&
						campaign.data.influencerCampaign.brandTeam !== null &&
						campaign.data.influencerCampaign.brandTeam.length !== 0
					) {
						let data =
							teamData &&
							teamData !== null &&
							teamData.map((item) => {
								const index = campaign.data.influencerCampaign.brandTeam.findIndex(
									(sec) => sec.email === item.email
								);
								if (index !== -1) {
									return;
								} else {
									return item;
								}
							});
						setTeam(_.compact(data));
					} else {
						setTeam(teamData);
					}

				}

			}
			else {
				setShowLoader(false);
				campaign.data.campaign &&
					campaign.data.campaign !== null &&
					campaign.data.campaign.deliverables &&
					campaign.data.campaign.deliverables !== null &&
					campaign.data.campaign.deliverables.map((deliverable) => {
						deliverable.postType = deliverable.postType && deliverable.postType !== null ?
							deliverable.postType.charAt(0).toUpperCase() +
							deliverable.postType.toLowerCase().slice(1) : '';
						deliverable.frameContentType = deliverable.frameContentType && deliverable.frameContentType !== null ?
							deliverable.frameContentType.charAt(0).toUpperCase() +
							deliverable.frameContentType.toLowerCase().slice(1) : '';
						deliverable.platform = deliverable.platform && deliverable.platform !== null ?
							deliverable.platform.charAt(0).toUpperCase() +
							deliverable.platform.toLowerCase().slice(1) : '';
						deliverable.deadlineDate = new Date(
							deliverable.deadlineDate * 1000
						).toDateString();
					});

				campaign.data.campaign.events = campaign.data.campaign.events.map(
					(activity) => {
						activity.time = moment.unix(activity.time).format("MMM DD");
						return activity;
					}
				);
				setData(campaign.data.campaign);
				if (
					campaign.data &&
					campaign.data !== null &&
					campaign.data.campaign !== null
				) {
					setStatus(
						campaign.data.campaign.status
							? campaign.data.campaign.status
							: 'CLOSED'
					);

					setSelectedMemebers(
						campaign.data.campaign.brandTeam
							? campaign.data.campaign.brandTeam
							: []
					);

					let teamData = await getTeam();
					teamData = teamData.map((item) => item.user);

					if (
						campaign.data.campaign.brandTeam &&
						campaign.data.campaign.brandTeam !== null &&
						campaign.data.campaign.brandTeam.length !== 0
					) {
						let data =
							teamData &&
							teamData !== null &&
							teamData.map((item) => {
								const index = campaign.data.campaign.brandTeam.findIndex(
									(sec) => sec.email === item.email
								);
								if (index !== -1) {
									return;
								} else {
									return item;
								}
							});
						setTeam(_.compact(data));
					} else {
						setTeam(teamData);
					}
				}
			}
			setErrorMessage('');

		} catch (e) {

			let message = errorMessage;

			if (e.errors && e.errors.length > 0)
				e.errors.forEach((m) => {
					message = message + m.message;
				});

			setErrorMessage(message);

		}
	};

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
				return team.data.brand.users;
			}
		} catch (e) {
			let message = errorMessage;

			if (e.errors && e.errors.length > 0)
				e.errors.forEach((m) => {
					message = message + m.message;
				});

			setErrorMessage(message);

		}
	};

	const addInTeam = (memeber) => {
		const members = [...selectedMembers];
		members.push(memeber);
		setSelectedMemebers(members);
		const total = [...team];
		const index = total.findIndex((item) => item.email === memeber.email);
		total.splice(index, 1);
		setTeam(total);
	};

	const removeInTeam = (memeber) => {
		const total = [...selectedMembers];
		const index = total.findIndex((item) => item.email === memeber.email);
		total.splice(index, 1);
		setSelectedMemebers(total);
		const members = [...team];
		members.push(memeber);
		setTeam(members);
	};

	useEffect(() => {
		getCampaign();
	}, [addCampaign]);

	const [setAll, setSetAll] = useState(false);

	useEffect(() => {
		setSetAll(false);
		if (data && data !== null && data.negotiables !== null) {
			let negotialble = true;
			Object.values(data.negotiables).map((item) => {
				if (item === true) {
					negotialble = false;
				}
			});

			if (
				((data.discount &&
					data.discount !== null &&
					data.discount.percentage &&
					data.discount.percentage !== '') ||
					(data.discount &&
						data.discount !== null &&
						data.discount.amount &&
						data.discount.amount.amount !== '')) &&
				data.invitationMessage !== null &&
				data.invitationMessage !== '' &&
				data.budget !== null &&
				data.budget.amount !== '' &&
				data.targetGrossSales !== null &&
				data.targetGrossSales.amount !== '' &&
				data.deliverables !== null &&
				data.deliverables &&
				data.deliverables.length !== 0 &&
				data.compensation !== null &&
				data.compensation &&
				data.compensation.length !== 0 &&
				negotialble === false &&
				data.influencer !== null &&
				data.invitedAt !== null
			) {
				setSetAll(true);
			}
		}
	}, [data]);

	const handleHeading = () => {
		let negotialble = true;
		if (data && data !== null && data.negotiables !== null) {
			Object.values(data.negotiables).forEach((item) => {
				if (item === true) {
					negotialble = false;
				}
			});
		}

		if (

			(data.discount &&
				data.discount !== null &&
				data.discount.percentage &&
				data.discount.percentage === '') ||
			(data.discount &&
				data.discount !== null &&
				data.discount.amount &&
				data.discount.amount.amount === '') ||
			data.startDate === null || data.endDate === null ||
			data.invitationMessage === null
		) {
			setHeadingValue('Campaign Detail');
		} else if (data.budget === null || data.budget.amount === '') {
			setHeadingValue('Budget');
		} else if (
			data.targetGrossSales === null ||
			data.targetGrossSales.amount === ''
		) {
			setHeadingValue('Target Gross Sale');
		} else if (data.products === null || data.products.length === 0) {
			setHeadingValue('Products');
		} else if (
			data.deliverables === null ||
			(data.deliverables && data.deliverables.length === 0)
		) {
			setHeadingValue('Deliverable');
		} else if (
			data.compensation === null ||
			(data.compensation && data.compensation.length === 0)
		) {
			setHeadingValue('Compensation');
		} else if (negotialble) {
			setHeadingValue('Negotiable');
		} else if (data.influencer === null) {
			setHeadingValue('Influencer');
		}
		else if (data.invitedAt === null) {
			setHeadingValue('Invite');
		}
	};

	const handleBrandState = () => {
		setBrandState(brandState ? false : true);
	};

	useEffect(() => {
		setActiveCampaign(campaignId);
	}, []);

	useEffect(() => {
		if (data !== null) {
			handleHeading();
		}
	}, [data]);

	return (
		<div className={styles.detailContainer}>
			{brandType.toLowerCase() === 'influencer' ? (
				<InfluencerCampaignDetail
					status={status}
					data={data}
					addCampaign={addCampaign}
					setAddCampagin={setAddCampagin}
					handleDelete={handleDelete}
					selectedMembers={selectedMembers}
					team={team}
					addInTeam={addInTeam}
					removeInTeam={removeInTeam}
					search={search}
					handleSearch={handleSearch}
					updateCampaign={updateCampaign}
					setAll={setAll}
					headingValue={headingValue}
					campaignId={campaignId}
					handleStatus={() => setStatus('PENDING')}
					internalState={internalState}
					getCampaign={getCampaign}
				/>
			) : (
					<BrandCampaignDetail
						status={status}
						data={data}
						addCampaign={addCampaign}
						setAddCampagin={setAddCampagin}
						handleDelete={handleDelete}
						selectedMembers={selectedMembers}
						team={team}
						addInTeam={addInTeam}
						removeInTeam={removeInTeam}
						search={search}
						handleSearch={handleSearch}
						updateCampaign={updateCampaign}
						setAll={setAll}
						campaignId={campaignId}
						headingValue={headingValue}
					/>
				)}
			{errorMessage !== '' && (
				<div style={{ padding: '16px', color: 'red' }}>
					{errorMessage}
				</div>
			)}
		</div>
	);
};

export default withRouter(CampaignDetail);
