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

import NumberInput from './number-input';

export default class Order extends React.Component {

  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);
    this._fetchProducts = this._fetchProducts.bind(this);

    this.state = {
      open: false,
      order: {},
      products: []
    };
  }

  open(order) {
    this.setState({
      open: true,
      order: order
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  submit() {

  }

  _fetchProducts() {
    fetch(`api/products2.json`).then(res => {
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
        'padding': '3% 4% 3% 4%'
      },
      announce: {
        'height': '100px'
      },
      tags: {
        'margin': '3px 0 10px 0'
      },
      dialogTitle: {
        'textAlign': 'center'
      },
      toolbar: {
        display: 'inline-block',
        float: 'right'
      },
      input: {
        float: 'left',
        display: 'inline-block'
      },
      listItem: {
        overflow: 'hidden'
      }
    };

    let categories = {};
    let order = this.state.order || {};
    let orderProducts = order.products || [];
    let panels = [];

    this.state.products.forEach(product => {
      categories[product.category] = categories[product.category] || [];
      categories[product.category].push(product);
    });

    for (let key in categories) {
      let products = categories[key];
      let amount = 0;
      let panelItems = products.map(product => {
        orderProducts.forEach(prod => {
          amount = (prod.id === product.id) ? prod.amount : 0;
        });

        return (
          <tr key={product.id}>
            <td style={{width: '30%'}}>{product.name}</td>
            <td style={{width: '10%'}}>{product.option}</td>
            <td style={{width: '10%'}}>$ {product.price}</td>
            <td style={{width: '15%'}}>
              <NumberInput value={amount} />
            </td>
            <td style={{width: '35%'}}>
              <Input type='text' bsSize='small' placeholder='備註' />
            </td>
          </tr>
        );
      });

      panels.push(
        <Panel key={products[0].category} header={products[0].category}>
          <Table fill responsive>
            <tbody>
              {panelItems}
            </tbody>
          </Table>
        </Panel>
      );
    }

    return (
      <Modal bsSize='large' show={this.state.open} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>
            {this.state.order.storeName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          {panels}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>取消</Button>
          <Button bsStyle='info' onClick={this.submit}>送出</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

