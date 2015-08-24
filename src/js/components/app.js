import React from 'react';
import RouteHandler from 'react-router/lib/components/RouteHandler';
import 'bootstrap/dist/css/bootstrap.css';

import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const SERVER_URL = 'http://localhost:8080';

export default class App extends React.Component {

  render() {
    let style = {
      container: {
        padding: '3%'
      }
    };

    return (
      <div>
        <Navbar brand='Majaja' toggleNavKey={0}>
          <CollapsibleNav eventKey={0}>
            <Nav navbar>
              <NavItem eventKey={1} href='#dashboard'>Dashboard</NavItem>
              <NavItem eventKey={2} href='#store'>Store</NavItem>
              <NavItem eventKey={3} href='#preference'>Preference</NavItem>
            </Nav>
            <Nav navbar right>
              <NavItem eventKey={1} href='#logout'>Logout</NavItem>
              <NavItem eventKey={2} href='#login'>Login</NavItem>
            </Nav>
          </CollapsibleNav>
        </Navbar>

        <div style={style.container}>
          <RouteHandler url={SERVER_URL} />
        </div>
      </div>
    );
  }

}
