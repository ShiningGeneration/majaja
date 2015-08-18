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
  }

  _handleCreateAccount() {
    this.refs.createAccount.open();
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
          <Input type='text' placeholder='Username or Email' />
          <Input type='password' placeholder='Password' />
          <Button bsStyle='primary' bsSize='large' block>Sign in</Button>
          <Button bsStyle="primary" bsSize='large' block onClick={this._handleCreateAccount}>Create account</Button>
        </div>
        <CreateAccount ref="createAccount" />
      </div>
    );
  }

}