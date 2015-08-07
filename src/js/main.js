import 'babel-core/polyfill';
import '../css/main.css';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app.js';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

React.render(
  <App />,
  document.getElementById('root')
);
