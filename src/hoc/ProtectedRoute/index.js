import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '../../context/RootContext';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

/**protected routes redirects to login page if not logged in */
const ProtectedRoute = ({ children, ...routeProps }) => {
  const { currentUser, setCurrentUser } = useContext(RootContext);



  //Token refresh code

  useEffect(() => {
    if (currentUser && currentUser !== null && new Date() > new Date(currentUser.signInUserSession.accessToken.payload.exp * 1000)) {
      getAuth();
    }
  }, []);


  // Refresh Token for user 

  const getAuth = async () => {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = await Auth.currentSession();
      cognitoUser.refreshSession(currentSession.refreshToken, (err, session) => {
        let currentUserAWS = { ...currentUser };
        currentUserAWS.signInUserSession = session;
        setCurrentUser(currentUserAWS);

      });
    } catch (e) {
      console.log('Unable to refresh Token', e);
    }
  }


  return (
    <Route
      {...routeProps}
      render={() => {
        if (
          currentUser &&
          currentUser !== null &&
          currentUser.signInUserSession &&
          currentUser.signInUserSession !== null &&
          currentUser.signInUserSession.accessToken.jwtToken
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
