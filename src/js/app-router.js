import React from 'react';
import Router from 'react-router';
import AppRouter from './app-router';

import App from './components/app';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Store from './components/store';
import Preference from './components/preference';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

export default (
  <Route name='root' path='/' handler={App}>
    <DefaultRoute handler={Home} />
    <Route name='home' handler={Home} />
    <Route name='dashboard' handler={Dashboard} />
    <Route name='store' handler={Store} />
    <Route name='user' handler={Preference} />
  </Route>
);
