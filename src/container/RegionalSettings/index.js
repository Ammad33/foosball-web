import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Select, FormControl, TextField, Button } from "@material-ui/core";
import styles from './../../styles/Dashboard.module.css';

const TimeZones = [
    {
        "value": -12,
        "text": "(GMT -12:00) Eniwetok, Kwajalein"
    },
    {
        "value": -11,
        "text": "(GMT -11:00) Midway Island, Samoa"
    },
    {
        "value": -10,
        "text": "(GMT -10:00) Hawaii"
    },
    {
        "value": -9,
        "text": "(GMT -9:00) Alaska"
    },
    {
        "value": -8,
        "text": "(GMT -8:00) Pacific Time (US & Canada)"
    },
    {
        "value": -7,
        "text": "(GMT -7:00) Mountain Time (US & Canada)"
    },
    {
        "value": -6,
        "text": "(GMT -6:00) Central Time (US & Canada), Mexico City"
    },
    {
        "value": -5,
        "text": "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima"
    },
    {
        "value": -4,
        "text": "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz"
    },
    {
        "value": -3.5,
        "text": "(GMT -3:30) Newfoundland"
    },
    {
        "value": -3,
        "text": "(GMT -3:00) Brazil, Buenos Aires, Georgetown"
    },
    {
        "value": -2,
        "text": "(GMT -2:00) Mid-Atlantic"
    },
    {
        "value": -1,
        "text": "(GMT -1:00) Azores, Cape Verde Islands"
    },
    {
        "value": 0,
        "text": "(GMT) Western Europe Time, London, Lisbon, Casablanca"
    },
    {
        "value": 1,
        "text": "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris"
    },
    {
        "value": 2,
        "text": "(GMT +2:00) Kaliningrad, South Africa"
    },
    {
        "value": 3,
        "text": "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg"
    },
    {
        "value": 3.5,
        "text": "(GMT +3:30) Tehran"
    },
    {
        "value": 4,
        "text": "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi"
    },
    {
        "value": 4.5,
        "text": "(GMT +4:30) Kabul"
    },
    {
        "value": 5,
        "text": "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent"
    },
    {
        "value": 5.5,
        "text": "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi"
    },
    {
        "value": 5.75,
        "text": "(GMT +5:45) Kathmandu"
    },
    {
        "value": 6,
        "text": "(GMT +6:00) Almaty, Dhaka, Colombo"
    },
    {
        "value": 7,
        "text": "(GMT +7:00) Bangkok, Hanoi, Jakarta"
    },
    {
        "value": 8,
        "text": "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong"
    },
    {
        "value": 9,
        "text": "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
    },
    {
        "value": 9.5,
        "text": "(GMT +9:30) Adelaide, Darwin"
    },
    {
        "value": 10,
        "text": "(GMT +10:00) Eastern Australia, Guam, Vladivostok"
    },
    {
        "value": 11,
        "text": "(GMT +11:00) Magadan, Solomon Islands, New Caledonia"
    },
    {
        "value": 12,
        "text": "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka"
    }
];

const Organizations = () => {
    const [allowTime, setAllowTime] = useState(false);
    const [timeZone, setTimeZone] = useState(5);
    return (<div>
        <div>
            <div className={styles.title}>
                <h1>Regional Setings</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.flexGrow5}>
                    <div className={styles.contentContainerSectionHeaderOrg}>
                        <h3>Time Zone</h3>
                    </div>
                    <div className={styles.details}>
                        <FormControlLabel
                            control={<Checkbox checked={allowTime} color="primary" onChange={() => setAllowTime(!allowTime)} name="gilad" />}
                            label="Allow members to set their own time zone and date formate"
                        />
                        <p className={styles.timeZoneHelper}>Your Time Zone as set in My Preferences (UTC-800) Pacific Time (USA&Canada)</p>
                    </div>
                </div>
            </div>
            <div className={styles.emailSection}>
                <h4>Default Time Zone for the Account</h4>
                <div className={styles.emailContainer}>
                    <FormControl variant="outlined">
                        <Select
                            native
                            inputProps={{
                                id: `outlined-carrier-native-simple`,
                            }}
                            onChange={(e) => setTimeZone(e.target.value)}
                            value={timeZone}
                        >
                            <option value="">-- Select --</option>
                            {
                                TimeZones.map(item => <option value={item.value} key={item.value}>{item.text}</option>)
                            }

                        </Select>
                    </FormControl>
                </div>
                <div className={styles.emailVerificationContainer}>
                    <Button variant='outlined' style={{
                        marginRight: '16px',
                        color: 'rgba(0,0,0,.87)',
                        border: '1px solid rgba(0,0,0,.5)'
                    }} color='primary'>
                        Cancel
          </Button>
                    <Button variant='outlined' color='primary'>
                        Save
          </Button>
                </div>
            </div>
        </div>

    </div>);
}

export default Organizations;