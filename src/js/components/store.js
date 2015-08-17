import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';

import CreateEvent from './create-event';
import CreateStore from './create-store';

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
      rowData: rowData,
      selectedIndex: undefined
    };

    this._handleCreateStore = this._handleCreateStore.bind(this);
    this._handleCreateEvent = this._handleCreateEvent.bind(this);
    this._handleAddFavorite = this._handleAddFavorite.bind(this);
  }

  _handleCreateEvent() {
    this.refs.createEvent.open();
  }

  _handleCreateStore() {
    this.refs.createStore.open();
  }

  _handleAddFavorite() {

  }

  render() {
    let storeName = this.state.selectedIndex ?
      this.state.rowData[this.state.selectedIndex].name.content : '';

    let searchButton = (
      <Button bsStyle='info' placeholder="請輸入店家名稱">搜尋</Button>
    );

    let style = {
      container: {
        padding: '5% 0 5% 0'
      },
      table: {
        margin: '2% 0 5% 0'
      },
      tableButton: {
        border: '0',
        solid: true,
        transparent: true
      }
    };

    return (
      <Row>
        <Col md={4} mdOffset={4}>
          <Input type='text' buttonAfter={searchButton} />
        </Col>
        <div style={style.container}>
          <Col md={10} mdOffset={1}>
            <Table hover responsive style={style.table}>
              <thead>
                <tr>
                  <th>收藏</th>
                  <th>訂購</th>
                  <th>店家</th>
                  <th>簡介</th>
                  <th>電話</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Button bsSize="small" style={style.tableButton}>
                      <Glyphicon glyph="star-empty" />
                    </Button>
                  </td>
                  <td>
                    <Button
                      bsSize="small"
                      style={style.tableButton}
                      onClick={this._handleCreateEvent}>
                        <Glyphicon glyph="shopping-cart" />
                    </Button>
                  </td>
                  <td>楊董燒肉便當店</td>
                  <td>燒肉，雞腿王，排骨</td>
                  <td>02-29060925</td>
                </tr>
                <tr>
                  <td>
                    <Button bsSize="small" style={style.tableButton}>
                      <Glyphicon glyph="star" />
                    </Button>
                  </td>
                  <td>
                    <Button
                      bsSize="small"
                      style={style.tableButton}
                      onClick={this._handleCreateEvent}>
                        <Glyphicon glyph="shopping-cart" />
                    </Button>
                  </td>
                  <td>太師傅便當專賣店</td>
                  <td>營養便當</td>
                  <td>07-3345252</td>
                </tr>
              </tbody>
            </Table>
            <Col md={2} mdOffset={5}>
              <Button
                block
                bsStyle="info"
                onClick={this._handleCreateStore}>
                  新增店家
              </Button>
            </Col>
          </Col>
        </div>

        <CreateEvent ref="createEvent" />
        <CreateStore ref="createStore" />
      </Row>
    );
  }

}
