import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import Members from './container/Members';
import Company from './container/Company';
import Applications from './container/Applications';
import Datasets from './container/Datasets';
import Organizations from './container/Organizations';
import Teams from './container/Teams';
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
        <Route exact path='/campaigns'>
          <Layout>
            <div>Campaigns</div>
          </Layout>
        </Route>
        <Route exact path='/organizations'>
          <Layout>
            <Organizations />
          </Layout>
        </Route>
        <Route exact path='/regional-settings'>
          <Layout>
            <RegionalSettings />
          </Layout>
        </Route>
        {/* <Route exact path='/companies'>
          <Layout>
            <RegionalSettings />
          </Layout>
        </Route> */}
        {/* <Route exact path='/teams'>
          <Layout>
            <Teams />
          </Layout>
        </Route> */}
        <Route exact path='/members'>
          <Layout>
            <Members />
          </Layout>
        </Route>
        <Route exact path='/datasets'>
          <Layout>
            <Datasets />
          </Layout>
        </Route>
        {/* <Route exact path='/apps'>
          <Layout>
            <Applications />
          </Layout>
        </Route> */}
      </Switch>
    </HashRouter>
  );
};

export default App;
