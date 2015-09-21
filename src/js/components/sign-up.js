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
    let username = this.refs.uesrname.getValue();
    let email = this.refs.email.getValue();
    let password = this.refs.password.getValue();
    let accountInfo = {
      username: username,
      email: email,
      password: password
    };

    fetch(`api/signup`, {
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
      dialogTitle: {
        textAlign: 'center'
      }
    };

    return (
      <Modal bsSize='small' show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title style={style.dialogTitle}>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.info}>
          <Input
            refs='username'
            type='text'
            placeholder='Username'
            addonBefore={<Glyphicon glyph='user' />}/>
          <Input
            refs='email'
            type='text'
            placeholder='Email address'
            addonBefore={<Glyphicon glyph='send' />}/>
          <Input
            refs='password'
            type='password'
            placeholder='Password'
            addonBefore={<Glyphicon glyph='lock' />}/>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle='danger'
            href={location.pathname}
            block
            onClick={this.submit}>Sign up</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
