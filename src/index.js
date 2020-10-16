import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MuiTheme from './hoc/Theme';
import './index.module.scss';

import { Amplify } from 'aws-amplify';
import config from './config';

// import from 'aws-amplify';

Amplify.configure({
  Auth: {
    // mandatorySignIn: true,
    region: config.COGNITO.REGION,
    userPoolId: config.COGNITO.USER_POOL_ID,
    identityPoolId: config.COGNITO.IDENTITY_POOL_ID,
    userPoolWebClientId: config.COGNITO.APP_CLIENT_ID,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiTheme>
      <App />
    </MuiTheme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
