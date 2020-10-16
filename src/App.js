import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import RootContext from "./context/RootContext";
import Campaigns from "./containers/Campaigns";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// const App = () => (
//   <div>
//     <AmplifySignOut />
//     My App
//   </div>
// );

const App = () => {
  return (
    <RootContext>
    <HashRouter>
      <Switch>
        <Route exact path='/'>

          <Layout>
     {/* <AmplifySignOut /> */}
            <Campaigns />
          </Layout>
        </Route>
      </Switch>
    </HashRouter>
    </RootContext>
  );
};
// export default withAuthenticator(App);


export default App;
