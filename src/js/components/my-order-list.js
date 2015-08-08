import React from 'react';
import Mui from 'material-ui';
import MobileTearSheet from './mobile-tear-sheet';
import Cake from 'material-ui/lib/svg-icons/social/cake';

let {
  Avatar,
  List,
  ListDivider,
  ListItem,
  MoreVertIcon,
  Styles
} = Mui;

let { Colors } = Styles;

export default class MyOrderList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MobileTearSheet>
          <List subheader="My ordered">
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="08/06 (星期四) Mon. 丁媽 虱目魚店"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>香煎魚肚飯</span><br/>
                  數量：1 售價：$100
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
                  數量：1 售價：$80
                </p>
              }
              secondaryTextLines={2} />
          </List>
        </MobileTearSheet>
      </div>
    );
  }

}
