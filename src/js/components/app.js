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

import AnonymousNavbar from './anonymous-navbar';
import MemberNavbar from './member-navbar';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: Cookie.load('userId')
    };
  }

  render() {
    let style = {
      navbar: {
        opacity: '0.8'
      }
    };

    let navbar;

    if (!this.state.userId) {
      navbar = <AnonymousNavbar />;
    } else {
      navbar = <MemberNavbar />;
    }

    return (
      <div>
        <Navbar
          brand={<a href='#home'><Glyphicon glyph='cutlery' /> MAJAJA</a>}
          toggleNavKey={0}
          style={style.navbar}
          fixedTop>
          {navbar}
        </Navbar>

        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }

}
