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

    this.state = {
      searchText: '',
      stores: [],
      user: {}
    };

    this._handleSearch = this._handleSearch.bind(this);
    this._handleSearchTextChange = this._handleSearchTextChange.bind(this);
    this._handleCreateStore = this._handleCreateStore.bind(this);
    this._handleCreateEvent = this._handleCreateEvent.bind(this);
    this._handleAddFavorite = this._handleAddFavorite.bind(this);
  }

  _fetchStores() {
    fetch(`api/stores.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        stores: res
      });
    });
  }

  _fetchUser() {
    fetch(`api/user.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        user: res
      });
    });
  }

  _handleSearch() {
    let searchText = this.state.searchText;
    if (searchText === '') return;

    fetch(`api/search-stores.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        stores: res
      });
    });
  }

  _handleSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    });
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

  _handleAddFavorite(storeId) {
    fetch(`api/userAddFavorite`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: 'user-token',
        storeId: storeId
      })
    }).then(res => {
      // TODO: update new user data from server
      if (res.ok) {
        this.setState({
          user: res
        });
      }
    });
  }

  componentDidMount() {
    this._fetchStores();
    this._fetchUser();
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
    let favorites = this.state.user.favoriteStores || [];

    let stores = this.state.stores.map(store => {
      let star = favorites.indexOf(store.id) !== -1 ? 'star' : 'star-empty';

      return (
        <tr key={store.id}>
          <td>
            <Button
              style={style.tableButton}
              bsSize='small'
              onClick={this._handleAddFavorite.bind(this, store.id)}>
                <Glyphicon glyph={star} />
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
          <Input
            type='text'
            value={this.state.searchText}
            onChange={this._handleSearchTextChange}
            buttonAfter={
              <Button
                bsStyle='info'
                placeholder='請輸入店家名稱'
                onClick={this._handleSearch}>
                  搜尋
              </Button>
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
