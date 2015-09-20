import Cookie from 'react-cookie';
import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Modal from 'react-bootstrap/lib/Modal';

export default class SignUp extends React.Component {

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
    // Set login as developer
    Cookie.save('userId', 'majaja');

    let userId = this.refs.uesrname.getValue();
    let password = this.refs.password.getValue();
    let accountInfo = {
      userId: userId,
      password: password
    };

    fetch(`api/signin`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(accountInfo)
    }).then(res => {
      if (res.ok) {
        this.setState({
          showModal: false
        });
      }
    });
  }

  render() {
    let style = {
      info: {
        padding: '3% 4% 3% 4%'
      },
      dialogContent: {
        textAlign: 'center'
      }
    };

    return (
      <Modal bsSize='small' show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogContent}>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          <div>
            <Input
              ref='userId'
              type='text'
              addonBefore={<Glyphicon glyph='user' />}
              placeholder='Email address' />
            <Input
              ref='password'
              type='password'
              addonBefore={<Glyphicon glyph='lock' />}
              placeholder='Password' />
            <Input
              ref='remember'
              type='checkbox'
              label='Remember me'/>
          </div>
        </Modal.Body>
        <Modal.Footer style={style.dialogContent}>
          <Button
            bsStyle='danger'
            href='/'
            block
            onClick={this.submit}>
              Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
