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

export default class OrderDetails extends React.Component {

  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      open: false
    };
  }

  open(order) {
    this.setState({
      open: true
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  submit() {

  }

  componentDidMount() {

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

    return (
      <Modal bsSize='large' show={this.state.open} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>
            {}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          {}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>好</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

