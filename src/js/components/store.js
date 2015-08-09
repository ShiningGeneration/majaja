import React from 'react';
import Mui from 'material-ui';
import CreateStore from './create-store';
import CreateOrder from './create-order';

let {
  FlatButton,
  Paper,
  RaisedButton,
  Table,
  TextField
} = Mui;

export default class Store extends React.Component {

  constructor(props) {
    super(props);

    let rowData = [
      {name: {content: '楊董燒肉便當店'}, brief: {content: '燒肉，雞腿王，排骨'}, phone: {content: '02-29060925'}},
      {name: {content: '太師傅便當專賣店(興中店)'}, brief: {content: '營養便當'}, phone: {content: '07-3345252'}},
      {name: {content: '臺灣雞腿王-青海店'}, brief: {content: '主廚推薦：雞腿便當'}, phone: {content: '04-23140169'}},
      {name: {content: '池上飯包'}, brief: {content: '滿200元外送'}, phone: {content: '04-6563616'}},
      {name: {content: '呆妹の點心舖'}, brief: {content: '多種口味的點心酥/鳳梨酥/蛋黃酥'}, phone: {content: '02-22175266'}},
      {name: {content: '富記港式茶餐廳(內科洲子店)'}, brief: {content: '便宜好吃'}, phone: {content: '02-87973006'}},
      {name: {content: '一焗兩得'}, brief: {content: '400元外送'}, phone: {content: '02-86671107'}},
      {name: {content: '味珍點心坊'}, brief: {content: '各類點心'}, phone: {content: '02-23976086'}}
    ];

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      canSelectAll: false,
      deselectOnClickaway: true,
      height: '65%',
      rowData: rowData
    };

    this._handleCreateStore = this._handleCreateStore.bind(this);
    this._handleCreateOrder = this._handleCreateOrder.bind(this);
    this._handleAddFavorite = this._handleAddFavorite.bind(this);
  }

  _handleCreateStore() {
    this.refs.createStore.show();
  }

  _handleCreateOrder() {
    this.refs.createOrder.show();
  }

  _handleAddFavorite() {

  }

  render() {
    // Column configuration
    let headerCols = {
      name: {
        content: '店家',
        tooltip: '店家名稱 / 分店名稱'
      },
      brief: {
        content: '簡介',
        tooltip: '店家簡介 / 優惠訊息'
      },
      phone: {
        content: '電話',
        tooltip: '聯絡電話 / 店家手機'
      }
    };
    let colOrder = ['name', 'brief', 'phone'];

    return (
      <div className="container">
        <div className="store">
          <div className="store-page">
            <Paper zDepth={1}>
              <div className="content">
                <div className="searchbar">
                  <TextField hintText="輸入店家名稱" />
                  <FlatButton secondary={true} label="Search"></FlatButton>
                </div>
                <br />
                <Table
                  headerColumns={headerCols}
                  columnOrder={colOrder}
                  rowData={this.state.rowData}
                  height={this.state.height}
                  fixedHeader={this.state.fixedHeader}
                  fixedFooter={this.state.fixedFooter}
                  stripedRows={this.state.stripedRows}
                  showRowHover={this.state.showRowHover}
                  selectable={this.state.selectable}
                  multiSelectable={this.state.multiSelectable}
                  canSelectAll={this.state.canSelectAll}
                  deselectOnClickaway={this.state.deselectOnClickaway}
                  onRowSelection={this._onRowSelection} />
                <div className="store-tool">
                  <RaisedButton
                    label="新增店家"
                    onTouchTap={this._handleCreateStore} />
                  <RaisedButton
                    label="新增訂單"
                    secondary={true}
                    onTouchTap={this._handleCreateOrder} />
                  <RaisedButton
                    label="加入我的最愛"
                    secondary={true}
                    onTouchTap={this._handleAddFavorite} />
                  <CreateStore ref="createStore" />
                  <CreateOrder ref="createOrder" />
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }

}
