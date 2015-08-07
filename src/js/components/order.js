import React from 'react';
import { Styles } from 'material-ui';

let ThemeManager = new Styles.ThemeManager();

export default class Order extends React.Component {

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
      accent1Color: Styles.Colors.pink500
    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}

Order.childContextTypes = {
  muiTheme: React.PropTypes.object
};
