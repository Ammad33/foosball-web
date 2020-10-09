import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <div>DashBoard</div>
          </Layout>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
