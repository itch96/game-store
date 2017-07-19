import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">game-store</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/browsexbox">
                <Link to="/browsexbox">XBoX</Link>
              </NavItem>
              <NavItem eventKey={2} href="/browseps4">
                <Link to="/browseps4">PS4</Link>                
              </NavItem>
            </Nav>
            <Nav pullRight>
              {
                isAuthenticated() ? 
                  (
                    <NavDropdown eventKey={1} title="Account" id="basic-nav-dropdown">
                      <MenuItem eventKey={1.1}>
                        <Link to="/purchases">Purchases</Link>
                      </MenuItem>
                      <MenuItem eventKey={1.2}>
                        <Link to="/settings">Settings</Link>
                      </MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={1.3} onClick={this.logout.bind(this)}>Logout</MenuItem>
                    </NavDropdown>
                  )
                  :
                  (
                    <NavItem eventKey={1} href="#" onClick={this.login.bind(this)}>
                      Log In
                    </NavItem>
                  )
              }
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
