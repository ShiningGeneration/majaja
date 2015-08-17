import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

export default class CreateOrder extends React.Component {

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
    let style = {
      info: {
        padding: '3% 4% 3% 4%'
      },
      detials: {
        height: '140px'
      },
      productFormat: {
        height: '260px'
      },
      dialogTitle: {
        textAlign: 'center'
      }
    };
    let productFormat =
`魯肉飯, 40
叉燒飯, 60
雞排飯, 70
{麵食}
牛肉麵, 意麵 80, 手工麵 90
陽春麵, 普通 40, 加蛋 50
{飲料冰品}
奶茶, S 20, M 30, L 40
冰咖啡, 中杯 40, 大杯 50
{下午茶系列}
香辣雞排, 40, img:1
甜甜圈, 大 40, 小 30, img:13`;

    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>新增店家</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          <Panel header='基本資料'>
            <Input type='text' label='名稱' placeholder='店家名稱' />
            <Input type='text' label='簡介' placeholder='店家簡介' />
            <Input type='text' label='電話' placeholder='店家電話' />
            <Input type='text' label='地址' placeholder='店家地址' />
            <Input type='text' label='網址' placeholder='店家網站或專屬粉絲頁網址' />
            <Input type='textarea' label='訂購說明' placeholder='訂購規則說明'
              style={style.detials} />
          </Panel>
          
          <Panel header='產品資料'>
            <Row>
              <Col md={6}>
                <Input type='textarea' label='產品' style={style.productFormat}/>
              </Col>
              <Col md={6}>
                <Input type='textarea' label='參考格式' disabled
                  value={productFormat} style={style.productFormat} />
              </Col>
            </Row>
          </Panel>

          <Panel header='產品圖片上傳'>
            <Col xs={6} xsOffset={3} md={6} mdOffset={3}>
              <Input type='file'/>
            </Col>
          </Panel>

          <Panel header='服務種類'>
            <Row>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='便當' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='麵食' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='素食' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='飲料' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='冰品' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='小吃' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='中式' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='日式' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='西式' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='南洋' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='餅類' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='蛋糕' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='麵包' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='早點' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='禮品' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='甜點' />
              </Col>
              <Col md={2} xs={3}>
                <Input type='checkbox' label='其他' />
              </Col>
            </Row>
          </Panel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>取消</Button>
          <Button bsStyle='info' onClick={this.submit}>送出</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
