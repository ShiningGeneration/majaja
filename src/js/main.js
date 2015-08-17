import 'babel-core/polyfill';
import React from 'react';
import Router from 'react-router';
import AppRouter from './app-router';

Router.create({
  routes: AppRouter,
  scrollBehavior: Router.ScrollToTopBehavior
})
.run(function(App) {
  React.render(<App/>, document.getElementById('root'));
});
