import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from './context/RootContext';
import Campaigns from './containers/Campaigns';
import CampaignDetail from './containers/CampaignDetail';
import AddCampaign from './containers/AddCampaign';
import Collections from './containers/Collections';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import Onboarding from './containers/Onboarding';
import Performance from './containers/Performance';
import ProtectedRoute from './hoc/ProtectedRoute';
import Settings from './containers/Settings';
import UnProtectedRoute from './hoc/UnProtectedRoute';
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
          <ProtectedRoute exact path='/collections'>
            <Layout>
              <Collections />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/performance'>
            <Layout>
              <Performance />
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
          <UnProtectedRoute exact path='/login'>
            <Auth>
              <Login />
            </Auth>
          </UnProtectedRoute>
          <UnProtectedRoute exact path='/signup'>
            <Auth>
              <Signup />
            </Auth>
          </UnProtectedRoute>
          <UnProtectedRoute exact path='/forgot-password'>
            <Auth>
              <ForgotPassword />
            </Auth>
          </UnProtectedRoute>
          <UnProtectedRoute exact path='/forgot-password'>
            <Auth>
              <ForgotPassword />
            </Auth>
          </UnProtectedRoute>
          <UnProtectedRoute exact path='/reset-password'>
            <Auth>
              <ResetPassword />
            </Auth>
          </UnProtectedRoute>
          <UnProtectedRoute exact path='/onboarding'>
            <Onboarding />
          </UnProtectedRoute>
          <Redirect exact from='/' to='/campaigns' />
        </Switch>
      </HashRouter>
    </RootContext>
  );
};

export default App;
