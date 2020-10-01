import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import Dashboard from './container/DashBoard';

const App = () => {

    return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" >
                        <Layout>
                            <Dashboard />
                        </Layout>
                    </Route>
                    <Route exact path="/Setting" >
                        <Layout>
                            <div>
                                Settings
                    </div>
                      </Layout>
                    </Route>
                </Switch>
            </HashRouter>
    );
};

export default App;

