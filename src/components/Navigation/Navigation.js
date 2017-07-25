import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

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
      <div className="navigation">
        <Navbar className="navigation-navbar" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">game-store</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navigation-links">
              <NavItem eventKey={1} href="/browsexbox">
                <Link to="/browsexbox"  className="navigation-links">XBoX</Link>
              </NavItem>
              <NavItem eventKey={2} href="/browseps4">
                <Link to="/browseps4" className="navigation-links">PS4</Link>                
              </NavItem>
            </Nav>
            <Nav pullRight>
              {
                isAuthenticated() ? 
                  (
                    <Dropdown eventKey={1} id="basic-nav-dropdown" className="navigation-dropdown">
                      <Dropdown.Toggle className="navigation-dropdown-title">Account</Dropdown.Toggle>
                      <Dropdown.Menu className="navigation-dropdown-menu">
                        <Link to="/purchases">
                          <MenuItem eventKey={1.1} className="navigation-dropdown-links" href="/purchases">Purchases</MenuItem>
                        </Link>
                        <Link to="/settings">
                          <MenuItem eventKey={1.2} className="navigation-dropdown-links" href="/settings">Settings</MenuItem>
                        </Link>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3} className="navigation-dropdown-links" onClick={this.logout.bind(this)}>Logout</MenuItem>
                      </Dropdown.Menu>
                    </Dropdown>
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
