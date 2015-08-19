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

export default class Order extends React.Component {

  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      showModal: false
    };
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  submit() {

  }

  render() {
    let orderName = '';
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
        display: "inline-block",
        float: "right"
      },
      input: {
        float: "left",
        display: "inline-block"
      },
      listItem: {
        overflow: "hidden"
      }
    };

    var data = [{
      name: "找好茶",
      id: 0,
      content: [{
        id: 0,
        name: "茉莉綠茶",
        option: ['M'],
        price: [20]
      }, {
        id: 1,
        name: "阿薩姆奶茶",
        option: ['M', 'L'],
        price: [15, 20]
      }, {
        id: 2,
        name: "四季春茶",
        option: ['M', 'L'],
        price: [15, 20]
    }]}, {
      name: "找奶茶",
      id: 1,
      content: [{
        id: 0,
        name: "奶茶",
        option: ['M', 'L'],
        price: [30, 45]
      }, {
        id: 1,
        name: "焦糖奶茶",
        option: ['M', 'L'],
        price: [35, 50]
      }, {
        id: 2,
        name: "紅茶拿鐵",
        option: ['M', 'L'],
        price: [40, 55]
    }]}, {
      name: "找口感",
      id: 2,
      content: [{
        id: 0,
        name: "珍珠紅茶",
        option: ['M', 'L'],
        price: [25, 35]
      }, {
        id: 1,
        name: "珍珠奶茶",
        option: ['M', 'L'],
        price: [30, 45]
      }, {
        id: 2,
        name: "波霸紅茶拿鐵",
        option: ['M', 'L'],
        price: [40, 55]
    }]}, {
      name: "找新鮮",
      id: 3,
      content: [{
        id: 0,
        name: "檸檬汁",
        option: ['M', 'L'],
        price: [40, 55]
      }, {
        id: 1,
        name: "金桔檸檬",
        option: ['M', 'L'],
        price: [40, 55]
      }, {
        id: 2,
        name: "8 冰茶",
        option: ['M', 'L'],
        price: [30, 45]
    }]}];

    let genMenuItem = function (item) {
      var style = {
        Button: {
          margin: "0 5px",
          float: "left"
        },
        td: {
          "vertical-align": "middle"
        }
      };

      if (item.name === "") {
        style.td["border-top"] = "0";
      }

      return (
        <tr>
          <td style={style.td}><h4>{item.name}</h4></td>
          <td style={style.td}><h5>{item.option}</h5></td>
          <td style={style.td}><h5>{item.price}</h5></td>
          <td style={style.td}>
            <Button style={style.Button} bsStyle='primary' bsSize='small'>-</Button>
            <Col style={{width: "50%", float: "left"}}>
              <Input type="number" defaultValue="0" bsSize="small"/>
            </Col>
            <Button style={style.Button} bsStyle='primary' bsSize='small'>+</Button>
          </td>
          <td style={style.td}>
            <Input type="text" placeholder="備註" />
          </td>
        </tr>
      );
    }

    let menuResult = data.map(menu => {
      let content = menu.content;
      let itemList = new Array();

      for (let i = 0; i < content.length; ++i) {
        for (let j = 0; j < content[i].option.length; ++j) {
          itemList.push({
            name: !j ? content[i].name : "",
            option: content[i].option[j],
            price: content[i].price[j]
          });
        }

        if (content[i].option.length == 0) {
          itemList.push({
            name: content[i].name,
            option: "",
            price: content[i].price[j]
          });
        }
      }
      return (
        <Panel header={menu.name}>
          <Table fill responsive>
            <col style={{width: "25%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "10%"}} />
            <col style={{width: "25%"}} />
            <col style={{width: "25%"}} />
            <tbody>
              {itemList.map(genMenuItem)}
            </tbody>
          </Table>
        </Panel>
      );
    });

    return (
      <Modal bsSize="large" show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>
            訂購 {orderName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          {menuResult}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>取消</Button>
          <Button bsStyle='info' onClick={this.submit}>送出</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

