import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, ...routeProps }) => {
  const { currentUser } = useContext(RootContext);

  return (
    <Route
      {...routeProps}
      render={() => {
        if (
          currentUser &&
          currentUser !== null &&
          currentUser.signInUserSession.idToken.jwtToken
        ) {
          // if (true) {
          return children;
        } else {
          return <Redirect to={'/login'} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
