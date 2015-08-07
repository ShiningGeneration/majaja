import React from 'react';
import { Styles, Tabs, Tab } from 'material-ui';
import Dashboard from './dashboard.js';
import Order from './order.js';
import Store from './store.js';
import Preference from './preference.js';
import Logout from './logout.js';

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
        <Tabs onChange={this._onChange}> 
          <Tab label="Dashboard"> 
            <Dashboard />
          </Tab>
          <Tab label="Order"> 
            <Order />
          </Tab>
          <Tab label="Store"> 
            <Store />
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
