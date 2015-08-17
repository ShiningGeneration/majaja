import React from 'react';
import Router from 'react-router';
import AppRouter from './app-router';

import App from './components/app';
import Dashboard from './components/dashboard';
import Store from './components/store';
import Preference from './components/preference';
import CreateOrder from './components/create-order';
import CreateStore from './components/create-store';

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
