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

export default class App extends React.Component {

  render() {
    let style ={
      navbar: {
        opacity: '0.8'
      }
    };

    return (
      <div>
        <Navbar
          brand={<div><Glyphicon glyph='cutlery' /> Majaja</div>}
          toggleNavKey={0}
          style={style.navbar}
          fixedTop>
          <CollapsibleNav eventKey={0}>
            <Nav navbar right>
              <NavItem eventKey={1} href='#dashboard'>Dashboard</NavItem>
              <NavItem eventKey={2} href='#store'>Store</NavItem>
              <NavItem eventKey={3} href='#user'>User</NavItem>
              <NavDropdown eventKey={1} title='User'>
                <MenuItem eventKey='1'>Profile</MenuItem>
                <MenuItem eventKey='2'>Preference</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey='3'>Sign Out</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href='#signup'>Sign Up</NavItem>
              <NavItem eventKey={5} href='#signin'>Sign In</NavItem>
            </Nav>
          </CollapsibleNav>
        </Navbar>

        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }

}
