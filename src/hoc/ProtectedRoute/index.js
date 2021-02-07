import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '../../context/RootContext';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
// import AWSAppSyncClient from 'aws-appsync';
// import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';
// import config from '../../config';


/**protected routes redirects to login page if not logged in */
const ProtectedRoute = ({ children, ...routeProps }) => {
  const { currentUser, setCurrentUser } = useContext(RootContext);

  useEffect(() => {
    if (new Date() > new Date(currentUser.accessToken.payload.exp * 1000)) {
      getAuth();
    }
  }, []);

  // const setAppSyncClient = () => {

  //   const appSyncClient = new AWSAppSyncClient({
  //     url: config.aws_appsync_graphqlEndpoint,
  //     region: config.aws_appsync_region,
  //     auth: {
  //       type: config.aws_appsync_authenticationType,
  //       credentials: () => Auth.currentCredentials()
  //     }
  //   });
  //   console.log(appSyncClient);
  // }


  const getAuth = async () => {
    let response = await Auth.currentSession();
    setCurrentUser(response);
  }


  return (
    <Route
      {...routeProps}
      render={() => {
        if (
          currentUser &&
          currentUser !== null &&
          currentUser.accessToken.jwtToken
        ) {
          return children;
        } else {
          return <Redirect to={'/login'} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
