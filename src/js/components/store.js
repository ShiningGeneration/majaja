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

    let stores = [
      {
        id: 1,
        name: '楊董燒肉便當店',
        brief: '燒肉，雞腿王，排骨',
        phone: '02-29060925'
      },
      {
        id: 2,
        name: '太師傅便當專賣店(興中店)',
        brief: '營養便當',
        phone: '07-3345252'
      },
      {
        id: 3,
        name: '臺灣雞腿王-青海店',
        brief: '主廚推薦：雞腿便當',
        phone: '04-23140169'
      },
      {
        id: 4,
        name: '池上飯包',
        brief: '滿200元外送',
        phone: '04-6563616'
      },
      {
        id: 5,
        name: '呆妹の點心舖',
        brief: '多種口味的點心酥/鳳梨酥/蛋黃酥',
        phone: '02-22175266'
      },
      {
        id: 6,
        name: '富記港式茶餐廳(內科洲子店)',
        brief: '便宜好吃',
        phone: '02-87973006'
      },
      {
        id: 7,
        name: '一焗兩得',
        brief: '400元外送',
        phone: '02-86671107'
      }
    ];

    this.state = {
      stores: stores,
      selectedIndex: undefined
    };

    this._handleCreateStore = this._handleCreateStore.bind(this);
    this._handleCreateEvent = this._handleCreateEvent.bind(this);
    this._handleAddFavorite = this._handleAddFavorite.bind(this);
  }

  _handleCreateEvent(storeId) {
    let store = this.state.stores.find(store => {
      return store.id === storeId;
    });
    this.refs.createEvent.open(store);
  }

  _handleCreateStore() {
    this.refs.createStore.open();
  }

  _handleAddFavorite() {

  }

  render() {
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

    let stores = this.state.stores.map(store => {
      return (
        <tr key={store.id}>
          <td>
            <Button bsSize='small' style={style.tableButton}>
              <Glyphicon glyph='star-empty' />
            </Button>
          </td>
          <td>
            <Button
              bsSize='small'
              style={style.tableButton}
              onClick={this._handleCreateEvent.bind(this, store.id)}>
                <Glyphicon glyph='shopping-cart' />
            </Button>
          </td>
          <td>{store.name}</td>
          <td>{store.brief}</td>
          <td>{store.phone}</td>
        </tr>
      );
    });

    return (
      <Row>
        <Col md={4} mdOffset={4}>
          <Input type='text' buttonAfter={
            <Button bsStyle='info' placeholder='請輸入店家名稱'>搜尋</Button>
          } />
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
                {stores}
              </tbody>
            </Table>
            <Col md={2} mdOffset={5}>
              <Button
                block
                bsStyle='info'
                onClick={this._handleCreateStore}>
                  新增店家
              </Button>
            </Col>
          </Col>
        </div>

        <CreateEvent ref='createEvent' />
        <CreateStore ref='createStore' />
      </Row>
    );
  }

}
