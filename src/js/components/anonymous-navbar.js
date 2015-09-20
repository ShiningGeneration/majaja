import Cookie from 'react-cookie';
import React from 'react';

import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import SignIn from './sign-in';
import SignUp from './sign-up';

export default class AnonymousNavbar extends React.Component {

  constructor(props) {
    super(props);

    this._signIn = this._signIn.bind(this);
    this._signUp = this._signUp.bind(this);
  }

  _setLoginCookie() {
    Cookie.save('userId', 'majaja');
  }

  _signIn() {
    this.refs.signIn.open();
  }

  _signUp() {
    this.refs.signUp.open();
  }

  render() {
    let style ={
      navbar: {
        opacity: '0.8'
      }
    };

    return (
      <div>
        <CollapsibleNav>
          <Nav navbar right>
            <NavItem eventKey={1} onClick={this._signUp}>
              <Glyphicon glyph='edit' /> Sign Up
            </NavItem>
            <NavItem eventKey={2} onClick={this._signIn}>
              <Glyphicon glyph='log-in' /> Sign In
            </NavItem>
          </Nav>
        </CollapsibleNav>
        <SignIn ref='signIn' />
        <SignUp ref='signUp' />
      </div>
    );
  }

}
