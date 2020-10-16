
import React, {useState} from 'react';
import {TextField,Button} from '@material-ui/core';
import styles from './Login.module.scss';
import Auth from 'aws-amplify';



const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignin = async ()=>{
        try{
          const user = await Auth.signIn('suleman','opexaDev123');
          console.log('signed in user ',user);
      
        }catch(e){}
      }

    return (
    <div className={styles.signinContainer}>
        <TextField id="outlined-basic" label="Username" variant="outlined" type="text" />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
        <Button onClick={onSignin()} variant="contained" color="primary">Signin</Button>
    </div>
    )

}

export default Login;