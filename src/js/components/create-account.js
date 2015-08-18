import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';

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
      dialogTitle: {
        textAlign: 'center'
      }
    };

    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>Create Personal Account</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          <Panel header="Account Information">
            <Input type='text' label='Username' placeholder='Username' />
            <Input type='text' label='Email Address' placeholder='Email Address' />
            <Input type='Password' label='Password' placeholder='Password' />
            <Input type='Password' label='Confirm your Password' placeholder='Confirm Your Password' />
          </Panel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Cancel</Button>
          <Button bsStyle="info" onClick={this.submit}>Create</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
