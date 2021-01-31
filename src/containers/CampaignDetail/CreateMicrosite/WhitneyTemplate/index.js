import React, { useState } from 'react';
import styles from './WhitneyTemplate.module.scss';
import ColorComponent from '../ColorComponent';
import { Divider, Tooltip, Popover } from '@material-ui/core';
// import mainStyles from '../../../../index.module.scss';
import TextField from '../../../../components/TextField';
import styles1 from '../ImagePicker/ImagePicker.module.scss';
import { HelpCircle, X } from 'react-feather'

const WhitneyTemplate = () => {
    const [headerColor, setHeaderColor] = useState("#984949");
    const [buttonColor, setButtonColor] = useState("#984949");
    const [quotesColor, setQuotesColor] = useState("#984949");
    const [shopColor, setShopColor] = useState("#D38989");
    const [footerColor, setFooterColor] = useState("#984949");
    const [heroImage, setHeroImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [quoteMessage, setQuoteMessage] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



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
                            Customize Whitney
                </h4>
                        <ColorComponent heading="Header highlight color" value={headerColor} handlValue={(e) => setHeaderColor(e.target.value)} />
                        <ColorComponent heading="Button color" value={buttonColor} handlValue={(e) => setButtonColor(e.target.value)} />
                        <div className={styles1.mainContainer}>
                            <div className={styles1.firstContainer}>
                                <div >
                                    <h6>Hero Image</h6>

                                    <HelpCircle onClick={handleClick} />

                                </div>
                                <label htmlFor='hero'>Upload</label>
                                <input id='hero' style={{ visibility: 'hidden', display: 'none' }} type={'file'} onChange={(e) => setHeroImage(URL.createObjectURL(e.target.files[0]))} />

                            </div>
                            <div className={styles1.secondConatiner}>
                                {heroImage !== null && <img src={heroImage} />}
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
                        <ColorComponent heading="Shop below background color" value={shopColor} handlValue={(e) => setShopColor(e.target.value)} />

                        <Divider style={{ marginBottom: '33px' }} />
                        <ColorComponent heading="Footer Color" value={footerColor} handlValue={(e) => setFooterColor(e.target.value)} />

                    </div>
                    <div className={styles.secondContainer}></div>
                </div >
                <div className={styles.buttonContainer}>
                    <button className={styles.liveButton}>Live Preview</button>
                    <button className={styles.sendButton}> Send to Brand for Approval</button>

                </div>
            </div>
        </>
    );

};

export default WhitneyTemplate;