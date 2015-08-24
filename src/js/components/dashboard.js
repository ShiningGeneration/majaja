import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

import Order from './order';
import CreateEvent from './create-event';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this._handleOrder = this._handleOrder.bind(this);
    this._handleCreateEvent = this._handleCreateEvent.bind(this);

    this.state = {
      ordereds: [],
      orderings: [],
      stores: []
    };
  }

  _fetchOrdereds() {
    fetch(`/api/ordereds.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        ordereds: res
      });
    });
  }

  _fetchOrderings() {
    fetch(`/api/orderings.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        orderings: res
      });
    });
  }

  _fetchStores() {
    fetch(`/api/my-stores.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        stores: res
      });
    });
  }

  _handleOrder() {
    this.refs.order.open();
  }

  _handleCreateEvent(storeId) {
    let store = this.state.stores.find(store => {
      return store.id === storeId;
    });
    this.refs.createEvent.open(store);
  }

  componentDidMount() {
    this._fetchOrdereds();
    this._fetchOrderings();
    this._fetchStores();
  }

  render() {
    let orderedItems = this.state.ordereds.map(item => {
      let products = item.products.map(product => {
        return (
          <span key={product.id}>
            {product.name}
            <br />
            {`數量：${product.amount} 售價：${product.price}`}
          </span>
        );
      });

      return (
        <ListGroupItem
          key={item.id}
          header={item.title}
          onClick={this._handleOrder.bind(this, item.id)}>
            {products}
        </ListGroupItem>
      );
    });

    let orderingItems = this.state.orderings.map(item => {
      return (
        <ListGroupItem
          key={item.id}
          header={item.title}
          onClick={this._handleOrder.bind(this, item.id)}>
            <span>
              {item.content}
              <br />
              {item.remain}
            </span>
        </ListGroupItem>
      );
    });

    let recommendStores = this.state.stores.map(store => {
      return (
        <ListGroupItem
          key={store.id}
          header={store.name}
          onClick={this._handleCreateEvent.bind(this, store.id)}>
            <span>
              {store.phone}
              <br />
              {store.note}
            </span>
        </ListGroupItem>
      );
    });

    return (
      <Grid>
        <Row>
          <Col md={4}>
            <Panel header={'已訂過的'} bsStyle='success'>
              <ListGroup fill>
                {orderedItems}
              </ListGroup>
            </Panel>
          </Col>
          <Col md={4}>
            <Panel header={'進行中的訂單'} bsStyle='info'>
              <ListGroup fill>
                {orderingItems}
              </ListGroup>
            </Panel>
          </Col>
          <Col md={4}>
            <Panel header={'推薦店家'} bsStyle='warning'>
              <ListGroup fill>
                {recommendStores}
              </ListGroup>
            </Panel>
          </Col>
        </Row>

        <Order ref='order' />
        <CreateEvent ref='createEvent' />
      </Grid>
    );
  }

}
