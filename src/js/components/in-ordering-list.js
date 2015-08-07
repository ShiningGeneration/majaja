import React from 'react';
import Mui from 'material-ui';
import MobileTearSheet from './mobile-tear-sheet';
import Cake from 'material-ui/lib/svg-icons/social/cake';

let {
  Avatar,
  IconButton,
  IconMenu,
  List,
  ListDivider,
  ListItem,
  MenuItem,
  MoreVertIcon,
  Paper,
  Styles
} = Mui;

let { Colors } = Styles;

export default class InOrdingList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MobileTearSheet>
        <Paper zDepth={1}>
          <List subheader="In ordering">
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="08/09 (星期一) Mon. 漢堡王"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>中午供餐</span><br/>
                  還有 33 小時 25 分鐘截止
                </p>
              }
              secondaryTextLines={2} />
            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="08/08 (星期日) Sun. 繼光香香雞"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>大哥請客</span><br/>
                  還有 10 小時 40 分鐘截止
                </p>
              }
              secondaryTextLines={2} />
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="08/11 (星期三) Wed. 茶湯會"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>周年慶</span><br/>
                  還有 78 小時 40 分鐘截止
                </p>
              }
              secondaryTextLines={2} />
          </List>
        </Paper>
      </MobileTearSheet>
    );
  }

}
