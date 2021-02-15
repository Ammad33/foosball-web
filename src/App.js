import React from 'react';
import {
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from './context/RootContext';
import Campaigns from './containers/Campaigns';
import Influencer from './containers/Influencer';
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
import Posts from './containers/Posts';
import Messages from './containers/Messages';
import Reports from './containers/Reports';
import Auth from './hoc/Auth';
import Logout from '../src/containers/Logout';
import Contacts from './containers/Contacts';
import Profile from './containers/Profile';
import InfluencerProfile from './containers/Profile/InfluencerProfile';
import BrandProfile from './containers/Profile/BrandProfile';
import Team from './containers/Team';
import Loader from './containers/Loader';
import Toastr from './components/Toastr';
import AccountHistory from './containers/AccountHistory';

const App = () => {
  return (
    <RootContext>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path='/campaigns'>
            <Layout>
              <Campaigns />
            </Layout>
          </ProtectedRoute>
          {/* <ProtectedRoute exact path='/campaigns/:brandId'>
            <Layout>
              <Campaigns />
            </Layout>
          </ProtectedRoute> */}
          <ProtectedRoute exact path='/campaignDetail/:campaignId'>
            <Layout>
              <CampaignDetail />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/collections/:id'>
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
          <ProtectedRoute exact path='/team'>
            <Layout>
              <Team />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/settings'>
            <Layout>
              <Settings />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/profile'>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/influencerProfile'>
            <Layout>
              <InfluencerProfile />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/brandProfile'>
            <Layout>
              <BrandProfile />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/reports'>
            <Layout>
              <Reports />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/relationships'>
            <Layout>
              <Contacts />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/billing'>
            <Layout>
              <AccountHistory />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/posts'>
            <Layout>
              <Posts />
            </Layout>
          </ProtectedRoute>
          {/* <ProtectedRoute exact path='/review-brand-microsite'>
            <Layout>
              <ReviewBrandMicrosite />
            </Layout>
          </ProtectedRoute> */}
          <ProtectedRoute exact path='/onboarding'>
            <Onboarding />
          </ProtectedRoute>
          <ProtectedRoute exact path='/messages'>
            <Layout>
              <Messages />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path='/onboarding'>
            <Onboarding />
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
          <UnProtectedRoute exact path='/reset-password'>
            <Auth>
              <ResetPassword />
            </Auth>
          </UnProtectedRoute>
          <ProtectedRoute exact path='/Influencer'>
            <Layout>
              <Influencer />
            </Layout>
          </ProtectedRoute>
          <Redirect exact from='/' to='/campaigns' />
        </Switch>
      </BrowserRouter>
      <Toastr />
      <Loader />
    </RootContext>
  );
};

export default App;
