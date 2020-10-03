import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import Dashboard from './container/DashBoard';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
        <Route exact path='/organizations'>
          <Layout>
            <div>Organizations</div>
          </Layout>
        </Route>
        <Route exact path='/companies'>
          <Layout>
            <div>Companies</div>
          </Layout>
        </Route>
        <Route exact path='/teams'>
          <Layout>
            <div>Teams</div>
          </Layout>
        </Route>
        <Route exact path='/members'>
          <Layout>
            <div>Members</div>
          </Layout>
        </Route>
        <Route exact path='/datasets'>
          <Layout>
            <div>Datasets</div>
          </Layout>
        </Route>
        <Route exact path='/apps'>
          <Layout>
            <div>Apps</div>
          </Layout>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
