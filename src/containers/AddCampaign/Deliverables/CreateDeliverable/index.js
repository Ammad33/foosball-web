import React, { useState, useEffect } from 'react';
import { Grid, InputAdornment, Select } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import FormControl from '@material-ui/core/FormControl';
import SelectMenu from '../../../../components/SelectMenu';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import styles from './CreateDeliverable.module.scss';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DateFnsUtils from '@date-io/date-fns';
import { Calendar } from 'react-feather';
import { Trash } from 'react-feather';
import clsx from 'clsx';
import SVG from 'react-inlinesvg';
import mainStyles from '../../../../index.module.scss';
import { makeStyles } from '@material-ui/core/styles';

const Chevron = () => {
  return (
    <span className={styles.dropDownCustomizeSvg}>
      <SVG src={require('../../../../assets/chevron-downn.svg')} />
    </span>
  );
};
const frames = [];
for (let i = 1; i <= 15; i += 1) {
  frames.push(i);
}





const CreateDeliverable = ({
  index,
  deliveries,
  handleDilverableContent,
  handleDeliverDeadlineDate,
  deliverableItem,
  deliverableDate,
  handleDeliverableDate,
  handleRemoveDeliverable,
  fb,
  insta,
  tictock,
  youtube,
}) => {	
	const [error, setError] = useState(false);
	const [post , setPost] = useState(false);
	const [options , setOptions] = useState(false);

  const [value, setValue] = useState(youtube);
  useEffect(() => {
    handleSetValue();
	},[deliverableItem.socialPlatform]);

	const handlePostType = (value , index , name) => {
		if (value == "Post"){
			setPost(true);
			handleDilverableContent(value, index, name);
		}else {
			setPost(false);
			handleDilverableContent(value, index, name);
		}
		
	}
	const handleSocialPlatform = (value , index , name) => {
		if (value == "Youtube"){
			setOptions(true);
			setPost(true);
			handleDilverableContent(value, index, name);
		}else if (value == "Tictock") {
			setOptions(true);
			setPost(true);
			handleDilverableContent(value, index, name);
		}else {
			setOptions(false);
			handleDilverableContent(value, index, name);
		}
		
	}
	


  const handleSetValue = () => {
    if (deliverableItem.socialPlatform === 'Youtube') setValue(youtube);
    else if (deliverableItem.socialPlatform === 'Instagram') setValue(insta);
    else if (deliverableItem.socialPlatform === 'Tictock') setValue(tictock);
    else setValue(fb);
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        className={clsx(
          styles.headerContainer,
          index > 0 ? styles.marginTop : ''
        )}
      >
        <p className={styles.headingColor}>Deliverable {index + 1} </p>
        {deliveries.length > 1 && (
          <Trash onClick={() => handleRemoveDeliverable(index)} />
        )}
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='outlined-basic'
          fullWidth
          label='Deliverable Deadline Date'
          variant='outlined'
          className={mainStyles.placeholderColor}
          helperText={error ? <span> error </span> : ' '}
          value={deliverableItem && deliverableItem.deliverableDeadDate}
          onChange={(e) => handleDeliverDeadlineDate(e.target.value, index)}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={styles.cursorPointer}
                position='end'
                onClick={() => handleDeliverableDate(true)}
              >
                <Calendar />
              </InputAdornment>
            ),
          }}
        />
        <MuiPickersUtilsProvider
          utils={DateFnsUtils}
          className={styles.displayNone}
        >
          <DatePicker
            style={{ display: 'none' }}
            open={deliverableDate}
            onChange={(date) => handleDeliverDeadlineDate(date, index)}
            value={deliverableItem && deliverableItem.deliverableDeadDate}
            orientation='landscape'
            openTo='date'
            format='MM/dd/yyyy'
            margin='normal'
            onClose={() => handleDeliverableDate(false)}
          />
        </MuiPickersUtilsProvider>
      </Grid>
			<Grid item xs={12} sm={12} md={6}>
        <FormControl fullWidth variant='outlined' >
          <TextField
            id='Social Platform'
            fullWidth
            label='Social Platform'
            variant='outlined'
						value={deliverableItem.socialPlatform}
						className={mainStyles.placeholderColor}
            helperText={error ? <span> error </span> : ' '}
						onChange={(e) =>
							handleSocialPlatform(e.target.value, index, 'socialPlatform')
              
            }
            MenuProps={{ variant: 'menu' }}
						// input={<SelectMenu />}
						select  
						SelectProps = {{IconComponent: () => <Chevron />}}
          >
						<MenuItem value="Social Platform" disabled>
            Social Platform            
            </MenuItem>
            <MenuItem value={'Instagram'}>Instagram </MenuItem>
            <MenuItem value={'fb'}>Facebook </MenuItem>
            <MenuItem value={'Youtube'}>Youtube</MenuItem>
            <MenuItem value={'Tictock'}>Tiktok</MenuItem>
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={styles.marginbottomSelect}>
			<FormControl fullWidth variant='outlined'>
          <TextField
            id='Post Type'
            fullWidth
            label='Post Type'
						variant='outlined'
						disabled = {options? true : false}
						className={mainStyles.placeholderColor}
            helperText={error ? <span> error </span> : ' '}
            value={deliverableItem && deliverableItem.campaignType}
            onChange={(e) => 
							handlePostType(e.target.value, index, 'campaignType')
							
            }
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps = {{IconComponent: () => <Chevron />}}

          >
            <MenuItem value='Post Type' disabled>
              Post Type
            </MenuItem>
            {value.campaignType.map((item) => (
              <MenuItem value={item}>{item} </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <FormControl fullWidth variant='outlined' >
          <TextField
						disabled = {options? true : false}
						labelId="demo-simple-select-outlined-label"
            id='Content Type'
            fullWidth
            label='Content Type'
						variant='outlined'
						displayEmpty
						className={mainStyles.placeholderColor}
            helperText={error ? <span> error </span> : ' '}
            value={deliverableItem && deliverableItem.frameType}
            onChange={(e) =>
              handleDilverableContent(e.target.value, index, 'frameType')
            }
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps = {{IconComponent: () => <Chevron />}}

          >
            <MenuItem value='Content Type' disabled>
              Content Type
            </MenuItem>
            {value.frameType.map((item) => (
              <MenuItem value={item}>{item} </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Grid>     
      <Grid item xs={12} sm={12} md={6} className={styles.marginbottom}>
        <FormControl fullWidth variant='outlined' >
          <TextField
						disabled = {post? true : false}
						labelId="demo-simple-select-disabled-label"
						id="demo-simple-select-disabled-Frame-Required"
						fullWidth
						label="Frames Required"
						variant='outlined'
						className={mainStyles.placeholderColor}
            helperText={error ? <span> error </span> : ' '}
            value={deliverableItem && deliverableItem.frameRequired}
            onChange={(e) =>
              handleDilverableContent(e.target.value, index, 'frameRequired')
            }
						MenuProps={{ variant: 'menu' }}
						select
						SelectProps = {{IconComponent: () => <Chevron />}}
          >
            <MenuItem value="Frame Required" disabled>
              Frame Required
            </MenuItem>
            {frames.map((frame) => (
              <MenuItem key={frame} value={frame}>
                {frame}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Grid container alignItems='center' className={styles.marginbottom}>
          <Grid item xs={1} className={styles.optionsItem}>
            {deliverableItem && deliverableItem.brandTagRequired ? (
              <CheckCircleIcon
                onClick={() =>
                  handleDilverableContent(
                    !deliverableItem.brandTagRequired,
                    index,
                    'brandTagRequired'
                  )
                }
              />
            ) : (
              <RadioButtonUncheckedIcon
                className={styles.svgDisabled}
                onClick={() =>
                  handleDilverableContent(
                    !deliverableItem.brandTagRequired,
                    index,
                    'brandTagRequired'
                  )
                }
              />
            )}
          </Grid>
          <Grid item xs={4}>
            <p
              className={
                !deliverableItem.brandTagRequired ? styles.disabled : ''
              }
            >
              Brand tag required
            </p>
          </Grid>
          <Grid item xs={7}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Brand tag'
              variant='outlined'
              className={mainStyles.placeholderColor}
              disabled={!deliverableItem.brandTagRequired}
              value={deliverableItem && deliverableItem.brandTag}
              onChange={(e) =>
                handleDilverableContent(e.target.value, index, 'brandTag')
							}
							InputProps={{
								startAdornment: (
									<InputAdornment  position="start">
										@
									</InputAdornment>
								),
							}}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Grid container alignItems='center'>
          <Grid item xs={1} className={styles.optionsItem}>
            {deliverableItem && deliverableItem.hashTagRequired ? (
              <CheckCircleIcon
                onClick={() =>
                  handleDilverableContent(
                    !deliverableItem.hashTagRequired,
                    index,
                    'hashTagRequired'
                  )
                }
              />
            ) : (
              <RadioButtonUncheckedIcon
                className={styles.svgDisabled}
                onClick={() =>
                  handleDilverableContent(
                    !deliverableItem.hashTagRequired,
                    index,
                    'hashTagRequired'
                  )
                }
              />
            )}
          </Grid>
          <Grid item xs={4}>
            <p
              className={
                !deliverableItem.hashTagRequired ? styles.disabled : ''
              }
            >
              Hashtag required
            </p>
          </Grid>
          <Grid item xs={7}>
            <TextField
              id='outlined-basic'
              fullWidth
              label='Hashtag'
              className={mainStyles.placeholderColor}
              value={deliverableItem && deliverableItem.hashTag}
              onChange={(e) =>
                handleDilverableContent(e.target.value, index, 'hashTag')
              }
              variant='outlined'
							disabled={!deliverableItem.hashTagRequired}
							InputProps={{
								startAdornment: (
									<InputAdornment  position="start">
										#
									</InputAdornment>
								),
							}}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <p className={styles.headingColor}>Post Frequency</p>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          id='outlined-basic'
          fullWidth
          type='number'
          label='Number of Posts'
          helperText={error ? <span> error </span> : ' '}
          className={mainStyles.placeholderColor}
          variant='outlined'
          value={deliverableItem && deliverableItem.NoPost}
          onChange={(e) =>
            handleDilverableContent(e.target.value, index, 'NoPost')
          }
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <FormControl fullWidth variant='outlined'>
          <Select
            id='outlined-basic'
            fullWidth
            label='Per time period'
            variant='outlined'
            helperText={error ? <span> error </span> : ' '}
            value={deliverableItem && deliverableItem.perTimePeriod}
            onChange={(e) =>
              handleDilverableContent(e.target.value, index, 'perTimePeriod')
            }
            displayEmpty
            IconComponent={() => <Chevron />}
            MenuProps={{ variant: 'menu' }}
            input={<SelectMenu />}
          >
            <MenuItem value='' disabled>
              Per Time Period
            </MenuItem>
            <MenuItem value={'Every Month'}> Every Month </MenuItem>
            <MenuItem value={'Every other month'}>Every other month </MenuItem>
            <MenuItem value={'Every Week'}>Every Week </MenuItem>
            <MenuItem value={'Every other week'}>Every other week </MenuItem>
            
          </Select>
        </FormControl>
      </Grid>	
    </Grid>
  );
};

export default CreateDeliverable;
