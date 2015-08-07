import React from 'react';
import {
  Styles,
  Paper,
  List,
  ListItem,
  ListDivider,
  Avatar,
  IconMenu,
  IconButton,
  MoreVertIcon,
  MenuItem
} from 'material-ui';
import Cake from 'material-ui/lib/svg-icons/social/cake';

let Colors = Styles.Colors;
let ThemeManager = new Styles.ThemeManager();

export default class Dashboard extends React.Component {

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
      accent1Color: Colors.pink500
    });
  }

  render() {
    return (
      <div>
        <Paper zDepth={1}>
          <List subheader="Today">
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="08/06 (星期四) Mon. 丁媽 虱目魚店"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>香煎魚肚飯</span><br/>
                  數量: 1 售價：$100
                </p>
              }
              secondaryTextLines={2} />
            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="08/04 (星期二) Thu. 好鄉"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>鮭魚飯</span><br/>
                  數量: 1 售價：$80
                </p>
              }
              secondaryTextLines={2} />
          </List>
        </Paper>
      </div>
    );
  }

}

Dashboard.childContextTypes = {
  muiTheme: React.PropTypes.object
};
