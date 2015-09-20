import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';

export default class CreateEvent extends React.Component {

  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);
    this._fetchProducts = this._fetchProducts.bind(this);

    this.state = {
      open: false,
      store: {},
      products: []
    };
  }

  open(store) {
    this.setState({
      open: true,
      store: store
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  submit() {
    let data = {
      groups: this.refs.groups.getValue(),
      endDate: this.refs.endDate.getValue(),
      endTime: this.refs.endTime.getValue(),
      limitAmount: this.refs.limitAmount.getValue(),
      limitPrice: this.refs.limitPrice.getValue(),
      announce: this.refs.announce.getValue()
    };

    fetch(`api/createEvent`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: 'user-token',
        data: data
      })
    }).then(res => {
      if (res.ok) {
        // TODO: Notify update successfully
      }
    });
  }

  _fetchProducts() {
    fetch(`api/products.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        products: res
      });
    });
  }

  componentDidMount() {
    this._fetchProducts();
  }

  render() {
    let style = {
      info: {
        padding: '3% 4% 3% 4%'
      },
      announce: {
        height: '100px'
      },
      tags: {
        margin: '3px 0 10px 0'
      },
      dialogTitle: {
        textAlign: 'center'
      }
    };
    let store = this.state.store;
    let products = this.state.products.map(prod => {
      return (
        <tr key={prod.id}><td>{prod.name}</td><td>{prod.price}</td></tr>
      );
    });

    return (
      <Modal show={this.state.open} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>
            發起訂購 {store.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          <PanelGroup defaultActiveKey='3' accordion>
            <Panel header='店家資訊' eventKey='1'>
              <Table hover>
                <thead>
                  <tr><th>項目</th><th>內容</th></tr>
                </thead>
                <tbody>
                  <tr><td>店名</td><td>{store.name}</td></tr>
                  <tr><td>簡介</td><td>{store.brief}</td></tr>
                  <tr><td>電話</td><td>{store.phone}</td></tr>
                  <tr><td>地址</td><td>{store.address}</td></tr>
                  <tr><td>網址</td><td>{store.site}</td></tr>
                  <tr><td>訂購說明</td><td>{store.comment}</td></tr>
                </tbody>
              </Table>
            </Panel>
            <Panel header='產品資訊' eventKey='2'>
              <Table hover>
                <thead>
                  <tr><th>產品</th><th>價格</th></tr>
                </thead>
                <tbody>
                  {products}
                </tbody>
              </Table>
            </Panel>
            <Panel header='訂購資料' eventKey='3'>
              <label>發布群組</label>
              <div style={style.tags}>
                <Label bsStyle='success'>自己</Label>
                <Label bsStyle='info'>公司-部門</Label>
              </div>
              <Input
                ref='groups'
                type='text'
                placeholder='請輸入群組名稱' />
              <Input
                ref='endDate'
                type='text'
                label='截止日期'
                placeholder='yyyy/mm/dd' />
              <Input
                ref='endTime'
                type='text'
                label='截止時間'
                placeholder='hh:mm' />
              <Row>
                <Col md={6}>
                  <Input
                    ref='limitAmount'
                    type='text'
                    label='數量截止'
                    placeholder='10' />
                </Col>
                <Col md={6}>
                <Input
                  ref='limitPrice'
                  type='text'
                  label='金額截止'
                  placeholder='5000' />
                </Col>
              </Row>
              <Input
               ref='announce'
               type='textarea'
               label='公告事項'
               style={style.announce} />
            </Panel>
          </PanelGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>取消</Button>
          <Button bsStyle='info' onClick={this.submit}>送出</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
