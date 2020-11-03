import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from './context/RootContext';
import Campaigns from './containers/Campaigns';
import CampaignDetail from './containers/CampaignDetail';
import AddCampaign from './containers/AddCampaign';
import Login from './containers/Login';
import ProctedRoute from './hoc/ProctedRoute';
import ProtectedRoute from './hoc/ProctedRoute';
import Auth from './hoc/Auth';

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
          <ProctedRoute exact path='/campaignDetail'>
            <Layout>
              <CampaignDetail />
            </Layout>
          </ProctedRoute>
          <ProctedRoute exact path='/addCampaign'>
            <AddCampaign />
          </ProctedRoute>
          <Route exact path='/login'>
            <Auth>
              <Login />
            </Auth>
          </Route>
          <Redirect exact from='/' to='/campaigns' />
        </Switch>
      </HashRouter>
    </RootContext>
  );
};
// export default withAuthenticator(App);

export default App;
