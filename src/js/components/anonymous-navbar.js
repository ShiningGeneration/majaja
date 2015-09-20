import Cookie from 'react-cookie';
import React from 'react';
import RouteHandler from 'react-router/lib/components/RouteHandler';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/main.css'

import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class AnonymousNavbar extends React.Component {

  _setLoginCookie() {
    Cookie.save('userId', 'majaja');
  }

  render() {
    let style ={
      navbar: {
        opacity: '0.8'
      }
    };

    return (
      <CollapsibleNav>
        <Nav navbar right>
          <NavItem eventKey={0} href='/' onClick={this._setLoginCookie}>
            <Glyphicon glyph='plus-sign' /> Set Login Cookie
          </NavItem>
          <NavItem eventKey={1} href='#signup'>
            <Glyphicon glyph='edit' /> Sign Up</NavItem>
          <NavItem eventKey={2} href='#signin'>
            <Glyphicon glyph='log-in' /> Sign In</NavItem>
        </Nav>
      </CollapsibleNav>
    );
  }

}
