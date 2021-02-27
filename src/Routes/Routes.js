import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

import Dashboard from '../Screens/Dashboard/Dashboard';
import AddProperty from '../Screens/AddProperty/AddProperty';
import Property from '../Screens/Property/Property';
import AddSociety from '../Screens/AddSociety/AddSociety';
import Society from '../Screens/Society/Society';

const routes = () => {

    return (
        <Switch>
            <Route
                exact
                path='/'
                render={props => (
                    <Dashboard {...props} />
                )}
            />
            <Route
                exact
                path='/add-property'
                render={props => (
                    <AddProperty {...props} />
                )}
            />
            <Route
                exact
                path='/property'
                render={props => (
                    <Property {...props} />
                )}
            />

            <Route
                exact
                path='/societies'
                render={props => (
                    <Society {...props} />
                )}
            />
            <Route
                exact
                path='/add-society'
                render={props => (
                    <AddSociety {...props} />
                )}
            />
        </Switch>
    );
}
export default withRouter(routes);