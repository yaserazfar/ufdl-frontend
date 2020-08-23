import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Dashboard from './dashboard';
import Annotate from './annotate';

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/annotate" component={Annotate} />
        </Switch>
    </BrowserRouter>

)

export default Main;