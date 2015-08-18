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
    var user = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pw = document.getElementById('password').value;
    var pw2 = document.getElementById('password2').value;
    if (user.value === '') {
      alert('Username cannot be empty!');
      return;
    }
    if (email.value === '') {
      alert('Email cannot be empty!');
      return;
    }
    if (pw != pw2) {
      alert('Password confirmation fail!');
      pw.value = pw2.value = '';
      return;
    }

    var accountInfo = {
      'username': user,
      'email': email,
      'password': pw
    };
    var url = 'http://0.0.0.0:3000/api/Users';
    var method = 'POST';
    var postData = JSON.stringify(accountInfo);
    var async = true;
    var request = new XMLHttpRequest();

    request.open(method, url, async);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.onreadystatechange = function()
    {
      if (request.readyState == 4 ) {
        if (request.status == 200) {
          alert('Create account successfully!');
          this.close();
        } else {
          alert(JSON.parse(request.responseText).error.message);
        }
      }
    }.bind(this);
    request.send(postData);
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
          <Panel header='Account Information'>
            <Input type='text' id='username' label='Username' placeholder='Username' />
            <Input type='text' id='email' label='Email Address' placeholder='Email Address' />
            <Input type='Password' id='password' label='Password' placeholder='Password' />
            <Input type='Password' id='password2' label='Confirm Your Password' placeholder='Confirm Your Password' />
          </Panel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Cancel</Button>
          <Button bsStyle='info' onClick={this.submit}>Create</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
