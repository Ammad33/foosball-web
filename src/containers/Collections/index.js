import React, { useEffect, useContext, useState } from 'react';
import styles from './Collections.module.scss';
import { ChevronRight, Edit } from 'react-feather';
import { useHistory, withRouter } from 'react-router-dom';
import { RootContext } from '../../context/RootContext';
import AddCampaign from '../AddCampaign';
import { API } from 'aws-amplify';

const Collections = ({ location }) => {

  let campaignId = 'campaign' + location.hash;

  const history = useHistory();
  const [addCampaign, setAddCampaign] = useState(false);
  const [data, setData] = useState(null);

  const { activeCampaign, brandId, brandType } = useContext(RootContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCampaign();
  }, [activeCampaign]);

  const getCampaign = async () => {

    try {
      const campaign = await API.graphql({
        query: brandType.toLowerCase() === 'influencer' ? `{
              influencerCampaign(influencerId: "${brandId}", id: "${campaignId}") {
                id
                            name
                            status
                startDate
                endDate
                invitationMessage
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
                  campaign_duration
                  monthly_retainer_fee
                  post_fee
                  post_frequency
                  revenue_share
                  story_fee
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
              }
             
          }` : `{
              campaign(brandId: "${brandId}", id: "${campaignId}") {
                id
                            name
                            status
                startDate
                endDate
                invitationMessage
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
                  campaign_duration
                  monthly_retainer_fee
                  post_fee
                  post_frequency
                  revenue_share
                  story_fee
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
              }
             
          }`,
      });
      if (brandType.toLowerCase() == 'influencer') {
        setData(campaign.data.influencerCampaign);
      } else {
        setData(campaign.data.campaign);
      }
    } catch (e) { }
  };


  const handleCampaginDetail = (id) => {
    history.push(`/campaignDetail/${id}`, { campaignId: id });
  };

  return (
    <>
      {addCampaign && (
        <AddCampaign
          open={addCampaign}
          step={4}
          campaign={data}
          brandId={data.brand.id}
          handleCancel={() => {
            setAddCampaign(false);
            getCampaign();
          }}
        />
      )}
      <div className={styles.collectionContainer}>
        <div className={styles.collectionHeading}>
          <span onClick={() => history.push('/campaigns')}>Campaigns</span>
          <ChevronRight />
          <span onClick={() => handleCampaginDetail(data.id)}>{data && data !== null && data.name}</span>
          <ChevronRight />
          <span>Collections</span>
          <Edit onClick={() => setAddCampaign(true)} />
        </div>
        {
          data && data !== null && data.products && data.products.length > 0 &&
          data.products.map(item => {
            return (<div className={styles.collectionSubContent}>
              <h6>{item.collection.name}</h6>
              <div className={styles.containerRow}>
                {item.products && item.products.length !== 0 && item.products.map(pro => {
                  return (<div className={styles.boxContainer} >
                    <div className={styles.box}><img className={styles.box} src={pro.product.images && pro.product.images && pro.product.images.images[0].src} /></div>
                    <p className={styles.boxItem}>{pro.product.name}</p>
                    <p className={styles.boxPrice}>${pro.product.priceRange && pro.product.priceRange.max && pro.product.priceRange.max.amount} </p>
                    {/* <span>(1276124)</span> */}
                    {pro.product && pro.product.estimatedQty && pro.product.estimatedQty !== null && < p className={styles.boxPrice}>{pro.product.estimatedQty} in stock</p>}
                  </div>)
                })

                }
              </div>
            </div>
            );
          })
        }
      </div >
    </>
  );
}

export default withRouter(Collections);