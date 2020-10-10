import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from "./context/RootContext";
import Campaigns from "./containers/Campaigns";

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
      </Switch>
    </HashRouter>
    </RootContext>
  );
};

export default App;
