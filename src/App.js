import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from "./context/RootContext";
import Campaigns from "./containers/Campaigns";
import CampaignDetail from './containers/CampaignDetail';

const App = () => {
  return (
    <RootContext>
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Campaigns />
          </Layout>
        </Route>
        <Route exact path='/CompaignDetail'>
          <Layout>
            <CampaignDetail />
          </Layout>
        </Route>
      </Switch>
    </HashRouter>
    </RootContext>
  );
};

export default App;
