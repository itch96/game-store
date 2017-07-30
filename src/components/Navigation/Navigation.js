import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, Dropdown } from 'react-bootstrap';
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
              
              <Dropdown eventKey={1} id="basic-nav-dropdown" className="navigation-dropdown">
                <Dropdown.Toggle className="navigation-dropdown-title">Buy & Sell</Dropdown.Toggle>
                <Dropdown.Menu className="navigation-dropdown-menu">
                  <Link to="/buy"> 
                    <MenuItem eventKey={1.1} className="navigation-dropdown-links" href="/buy">Buy Game</MenuItem>
                  </Link>
                  <Link to="/sell">
                    <MenuItem eventKey={1.2} className="navigation-dropdown-links" href="/sell">Sell Game</MenuItem>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown eventKey={2} id="basic-nav-dropdown" className="navigation-dropdown">
                <Dropdown.Toggle className="navigation-dropdown-title">Rent</Dropdown.Toggle>
                <Dropdown.Menu className="navigation-dropdown-menu">
                  <Link to="/browsexbox"> 
                    <MenuItem eventKey={2.1} className="navigation-dropdown-links" href="/buy">XBoX</MenuItem>
                  </Link>
                  <Link to="/browseps4">
                    <MenuItem eventKey={2.2} className="navigation-dropdown-links" href="/sell">PS4</MenuItem>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>

              <NavItem eventKey={3} href="/plan">
                <Link to="/plans"  className="navigation-links">Plans</Link>
              </NavItem>

            </Nav>
            <Nav pullRight>
              {
                isAuthenticated() ? 
                  (
                    <Dropdown eventKey={1} id="basic-nav-dropdown" className="navigation-dropdown">
                      <Dropdown.Toggle className="navigation-dropdown-title-account">Account</Dropdown.Toggle>
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
