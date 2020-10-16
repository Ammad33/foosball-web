
import React, {useState, useContext} from 'react';
import {TextField,Button} from '@material-ui/core';
import styles from './Login.module.scss';
import { RootContext } from '../../context/RootContext';
import Auth from 'aws-amplify';



const Login = ()=>{
    const {setCurrentUser} = useContext(RootContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignin = async ()=>{
      console.log('signed in user ');
        try{
          const user = await Auth.signIn(username,password);
          console.log('signed in user ',user);
          setCurrentUser(user);
        }catch(e){
          console.log(e);
        }
      }

    return (
    <div className={styles.signinContainer}>
        <TextField id="outlined-basic" onChange={(e)=> setUsername(e.target.value)} label="Username" variant="outlined" type="text" />
        <TextField id="outlined-basic" onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined" type="password"/>
        <Button onClick={onSignin} variant="contained" color="primary">Signin</Button>
    </div>
    )

}

export default Login;