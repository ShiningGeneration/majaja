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

export default class RecommendStores extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MobileTearSheet>
        <Paper zDepth={1}>
          <List subheader="Recommend stores">
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="麥當勞 信義店"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>(02) 2641-1332</span><br/>
                  24 小時內皆可訂購
                </p>
              }
              secondaryTextLines={2} />
            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="黃媽媽私房雞肉"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>0952-156-156</span><br/>
                  營業時間：11:00 - 20:00
                </p>
              }
              secondaryTextLines={2} />
            <ListItem
              leftAvatar={<Avatar icon={<Cake />} />}
              primaryText="八方雲集 新莊區公園路"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>(02) 2299-5353</span><br/>
                  10:30 前訂購
                </p>
              }
              secondaryTextLines={2} />
          </List>
        </Paper>
      </MobileTearSheet>
    );
  }

}
