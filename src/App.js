import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from "./context/RootContext";
import Campaigns from "./containers/Campaigns";
import CampaignDetail from './containers/CampaignDetail';
import Signin from './containers/Login';
import ProctedRoute from './hoc/ProctedRoute';
import ProtectedRoute from './hoc/ProctedRoute';

const App = () => {
  return (
    <RootContext>
    <HashRouter>
      <Switch>
        <ProtectedRoute exact path='/campaigns'>
          <Layout>
            <Campaigns />
          </Layout>
        </ProtectedRoute>
        <ProctedRoute exact path='/compaignDetail'>
          <Layout>
            <CampaignDetail />
          </Layout>
        </ProctedRoute>
        <Route exact path='/signin'>
            <Signin />
        </Route>
        <Redirect from='/' to="/campaigns" />
      </Switch>
    </HashRouter>
    </RootContext>
  );
};
// export default withAuthenticator(App);


export default App;
