import Cookie from 'react-cookie';
import React from 'react';

import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class UserNavbar extends React.Component {

  constructor(props) {
    super(props);

    this._signOut = this._signOut.bind(this);
  }

  _signOut() {
    Cookie.remove('userId');
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
          <NavItem eventKey={1} href='#dashboard'>
            <Glyphicon glyph='inbox' /> Dashboard
          </NavItem>
          <NavItem eventKey={2} href='#store'>
            <Glyphicon glyph='shopping-cart' /> Store
          </NavItem>
          <NavDropdown title={<Glyphicon glyph='user' />}>
            <MenuItem eventKey='1' href='#preference'>Preference</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='2'
              href={location.pathname}
              onSelect={this._signOut}>
              Sign Out
            </MenuItem>
          </NavDropdown>
        </Nav>
      </CollapsibleNav>
    );
  }

}
