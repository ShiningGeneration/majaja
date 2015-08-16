import React from 'react';
import Router from 'react-router';

let { RouteHandler } = Router;

export default class App extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Majaja</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#dashboard">Dashboard<span className="sr-only">(current)</span></a>
                </li>
                <li>
                  <a href="#store">Store</a>
                </li>
                <li>
                  <a href="#preference">Preference</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><button type="button" className="btn btn-default navbar-btn">Logout</button></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="well-lg">
          <RouteHandler />
        </div>
      </div>
    );
  }

}
