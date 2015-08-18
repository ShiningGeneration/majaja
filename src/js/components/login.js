import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Input from 'react-bootstrap/lib/Input';
import CreateAccount from './create-account';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this._handleCreateAccount = this._handleCreateAccount.bind(this);
    this._handleSignIn = this._handleSignIn.bind(this);
  }

  _handleCreateAccount() {
    this.refs.createAccount.open();
  }

  _handleSignIn() {
    // this.refs.signIn.open();
    var user = document.getElementById('login-user').value;
    var pw = document.getElementById('login-password').value;
    var accountInfo;
    if (user.value === '') {
      alert('Username or Email cannot be empty!');
      return;
    }
    if (pw == '') {
      alert('Password cannot be empty!');
      return;
    }

    if (user.includes('@')) {
      accountInfo = {
        'email': user,
        'password': pw
      };
    } else {
      accountInfo = {
        'username': user,
        'password': pw
      };
    }

    var url = 'http://0.0.0.0:3000/api/Users/login';
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
          alert('Sign in successfully!');
        } else {
          alert(JSON.parse(request.responseText).error.message);
        }
      }
    };
    request.send(postData);
  }

  render() {
    let style = {
      container: {
        padding: '3%',
        maxWidth: 400,
        margin: '0 auto 10px'
      },
      bg: {
        backgroundImage: 'url("../images/eat.jpg")',
        backgroundSize: 'cover',
        width: '100%',
        height: '80%'
      }
    };

    return (
      <div style={style.bg}>
        <div style={style.container}>
          <Input type='text' id='login-user' placeholder='Username or Email' />
          <Input type='password' id='login-password' placeholder='Password' />
          <Button bsStyle='primary' bsSize='large' block onClick={this._handleSignIn}>Sign in</Button>
          <Button bsStyle="primary" bsSize='large' block onClick={this._handleCreateAccount}>Create account</Button>
        </div>
        <CreateAccount ref='createAccount' />
      </div>
    );
  }

}