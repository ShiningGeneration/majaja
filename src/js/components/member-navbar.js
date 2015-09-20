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

export default class UserNavbar extends React.Component {

  _setLogoutCookie() {
    Cookie.remove('userId');
  }

  render() {
    let style ={
      navbar: {
        opacity: '0.8'
      }
    };

    return (
      <CollapsibleNav eventKey={0}>
        <Nav navbar right>
          <NavItem eventKey={0} href='/' onClick={this._setLogoutCookie}>
            <Glyphicon glyph='minus-sign' /> Remove Login Cookie
          </NavItem>
          <NavItem eventKey={1} href='#dashboard'>
            <Glyphicon glyph='inbox' /> Dashboard
          </NavItem>
          <NavItem eventKey={2} href='#store'>
            <Glyphicon glyph='shopping-cart' /> Store
          </NavItem>
          <NavDropdown eventKey={1} title={<Glyphicon glyph='user' />}>
            <MenuItem eventKey='1'>Profile</MenuItem>
            <MenuItem eventKey='2'>Preference</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='3'>Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
      </CollapsibleNav>
    );
  }

}
