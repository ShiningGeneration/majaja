import React from 'react';
import Mui from 'material-ui';
import Dashboard from './dashboard.js';
import Store from './store.js';
import Preference from './preference.js';
import Logout from './logout.js';

let {
  Paper,
  Styles,
  Tabs,
  Tab
} = Mui;

let ThemeManager = new Styles.ThemeManager();

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Styles.Colors.pink400
    });
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Dashboard">
            <Paper zDepth={1}>
              <Dashboard />
            </Paper>
          </Tab>
          <Tab label="Store">
            <Paper zDepth={1}>
              <Store />
            </Paper>
          </Tab>
          <Tab label="Preference">
            <Preference />
          </Tab>
          <Tab label="Logout">
            <Logout />
          </Tab>
        </Tabs>
      </div>
    );
  }

}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
