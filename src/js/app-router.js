import React from 'react';
import Router from 'react-router';
import AppRouter from './app-router';

import App from './components/app';
import Dashboard from './components/dashboard';
import Store from './components/store';
import Preference from './components/preference';
import Login from './components/login';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

export default (
  <Route name='root' path='/' handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name='dashboard' handler={Dashboard} />
    <Route name='store' handler={Store} />
    <Route name='preference' handler={Preference} />
    <Route name='login' handler={Login} />
  </Route>
);
