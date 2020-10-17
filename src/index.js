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
  aws_appsync_graphqlEndpoint: config.aws_appsync_graphqlEndpoint,
  aws_appsync_region: config.aws_appsync_region,
  aws_appsync_authenticationType: config.aws_appsync_authenticationType,
  aws_appsync_apiKey: config.aws_appsync_apiKey,
  Auth: {
    region: config.COGNITO.REGION,
    userPoolId: config.COGNITO.USER_POOL_ID,
    identityPoolId: config.COGNITO.IDENTITY_POOL_ID,
    userPoolWebClientId: config.COGNITO.APP_CLIENT_ID,
  },
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
