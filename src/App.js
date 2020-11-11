import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from './context/RootContext';
import Campaigns from './containers/Campaigns';
import CampaignDetail from './containers/CampaignDetail';
import AddCampaign from './containers/AddCampaign';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import Onboarding from './containers/Onboarding';
import ProtectedRoute from './hoc/ProtectedRoute';
import Settings from './containers/Settings';
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
          <ProtectedRoute exact path='/campaignDetail'>
            <Layout>
              <CampaignDetail />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/addCampaign'>
            <AddCampaign />
          </ProtectedRoute>
          <ProtectedRoute exact path='/settings'>
            <Layout>
              <Settings />
            </Layout>
          </ProtectedRoute>
          <Route exact path='/login'>
            <Auth>
              <Login />
            </Auth>
          </Route>
          <Route exact path='/signup'>
            <Auth>
              <Signup />
            </Auth>
          </Route>
          <Route exact path='/forgot-password'>
            <Auth>
              <ForgotPassword />
            </Auth>
          </Route>
          <Route exact path='/forgot-password'>
            <Auth>
              <ForgotPassword />
            </Auth>
          </Route>
          <Route exact path='/reset-password'>
            <Auth>
              <ResetPassword />
            </Auth>
          </Route>
          <Route exact path='/onboarding'>
            {/* <Auth> */}
            <Onboarding />
            {/* </Auth> */}
          </Route>
          <Redirect exact from='/' to='/campaigns' />
        </Switch>
      </HashRouter>
    </RootContext>
  );
};
// export default withAuthenticator(App);

export default App;
