import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import AccountProfile from './container/AccountProfile';
import Dashboard from './container/DashBoard';
import RegionalSettings from './container/RegionalSettings';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
        <Route exact path='/account-profile'>
          <Layout>
            <AccountProfile />
          </Layout>
        </Route>
        <Route exact path='/campaigns'>
          <Layout>
            <div>Campaigns</div>
          </Layout>
        </Route>
        <Route exact path='/products'>
          <Layout>
            <div>Products</div>
          </Layout>
        </Route>
        <Route exact path='/users'>
          <Layout>
            <div>Users</div>
          </Layout>
        </Route>
        <Route exact path='/regional-settings'>
          <Layout>
            <RegionalSettings />
          </Layout>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
