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
    let storeName = '';
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

    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>
            發起訂購 {storeName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          <PanelGroup defaultActiveKey='3' accordion>
            <Panel header="店家資訊" eventKey='1'>
              <Table hover>
                <tbody>
                  <tr><th>店名</th><th>旺旺燒臘便當(安居街總店)</th></tr>
                  <tr><th>簡介</th><th>高熱量便當</th></tr>
                  <tr><th>電話</th><th>02-2736-9061</th></tr>
                  <tr><th>地址</th><th>台北市和平東路三段安居街2號</th></tr>
                  <tr><th>網址</th><th>無</th></tr>
                  <tr><th>訂購說明</th><th>6個以上外送</th></tr>
                </tbody>
              </Table>
            </Panel>
            <Panel header="產品資訊" eventKey='2'>
              <Table hover>
                <thead>
                  <tr><th>產品</th><th>價格</th></tr>
                </thead>
                <tbody>
                  <tr><th>焢肉飯</th><th>75</th></tr>
                  <tr><th>燒肉飯</th><th>80</th></tr>
                  <tr><th>油雞飯</th><th>80</th></tr>
                  <tr><th>蜜汁香腸飯</th><th>80</th></tr>
                  <tr><th>糖醋排骨飯</th><th>85</th></tr>
                  <tr><th>燒鴨飯</th><th>90</th></tr>
                </tbody>
              </Table>
            </Panel>
            <Panel header="訂購資料" eventKey='3'>
              <label>發起人</label>
              <p>林小明</p>
              <label>發布群組</label>
              <div style={style.tags}>
                <Label bsStyle="success">自己</Label>
                <Label bsStyle="info">公司-部門</Label>
              </div>
              <Input type='text' placeholder='請輸入群組名稱' />
              <Input type='text' label='截止日期' placeholder='yyyy/mm/dd' />
              <Input type='text' label='截止時間' placeholder='hh:mm' />
              <Row>
                <Col md={6}>
                  <Input type='text' label='數量截止' placeholder='10' />
                </Col>
                <Col md={6}>
                <Input type='text' label='金額截止' placeholder='5000' />
                </Col>
              </Row>
              <Input type='textarea' label='公告事項' style={style.announce} />
            </Panel>
          </PanelGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>取消</Button>
          <Button bsStyle="info" onClick={this.submit}>送出</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
