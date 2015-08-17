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
  }

  _handleOrder() {
    this.refs.order.open();
  }

  _handleCreateEvent() {
    this.refs.createEvent.open();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={4}>
            <Panel header={'已訂過的'} bsStyle='success'>
              <ListGroup fill>
                <ListGroupItem
                  href="#"
                  header="08/06 (星期四) Mon. 丁媽 虱目魚店"
                  onClick={this._handleOrder}>
                    香煎魚肚飯<br />
                    數量：1 售價：$100
                </ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col md={4}>
            <Panel header={'進行中的訂單'} bsStyle='info'>
              <ListGroup fill>
                <ListGroupItem
                  href="#"
                  header="08/09 (星期一) Mon. 漢堡王"
                  onClick={this._handleOrder}>
                    中午供餐<br />
                    還有 33 小時 25 分鐘截止
                </ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col md={4}>
            <Panel header={'推薦店家'} bsStyle='warning'>
              <ListGroup fill>
                <ListGroupItem
                  href="#"
                  header="麥當勞 信義店"
                  onClick={this._handleCreateEvent}>
                    (02) 2641-1332<br />
                    24 小時內皆可訂購
                </ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
        </Row>

        <Order ref="order" />
        <CreateEvent ref="createEvent" />
      </Grid>
    );
  }

}
