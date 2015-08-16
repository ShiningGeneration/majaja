import React from 'react';
import Router from 'react-router';
import AppRouter from './app-router';

import App from './app';
import Dashboard from './dashboard';
import Store from './store';
import Preference from './preference';
import CreateOrder from './create-order';
import CreateStore from './create-store';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

export default (
  <Route name="root" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name="dashboard" handler={Dashboard} />
    <Route name="store" handler={Store} />
    <Route name="preference" handler={Preference} />
    <Route name="create-order" handler={CreateOrder} />
    <Route name="create-store" handler={CreateStore} />
  </Route>
);
