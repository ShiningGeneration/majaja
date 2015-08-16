import 'babel-core/polyfill';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.css';
import React from 'react';
import Router from 'react-router';
import AppRouter from './components/app-router';

Router.create({
  routes: AppRouter,
  scrollBehavior: Router.ScrollToTopBehavior
})
.run(function(App) {
  React.render(<App/>, document.getElementById('root'));
});
