import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
// import axios from 'axios';
import history from '../../history';
import AdminAuth from '../../Auth/AdminAuth';

const adminAuth = new AdminAuth();

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: '',
      access: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    if(event.target.type === 'text') {
      this.setState({username: event.target.value});
    } else {
      this.setState({password: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    adminAuth.handleAuthentication(this.props.url, this.state, (err, response) => {
      if(err) {
        console.log(err);
      }
      if(response) {
        if(adminAuth.isAuthenticated()) {
          this.setState({access: true});
          history.replace('/adminpanel');
        } else {
          this.setState({access: false});
        }
      }
    });
  }

  render() {
    return (
      <div className="admin-login-form">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} xs={11} xsOffset={1} sm={1} smOffset={2} className="admin-login-label">
              UserName
            </Col>
            <Col xs={10} xsOffset={1} sm={6} smOffset={0} className="admin-login-input">
              <FormControl type="text" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} xs={11} xsOffset={1} sm={1} smOffset={2} className="admin-login-label">
              Password
            </Col>
            <Col xs={10} xsOffset={1} sm={6} smOffset={0} className="admin-login-input">
              <FormControl type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs={12} className="admin-login-button">
              <Button type="submit" onClick={this.handleSubmit} className="admin-login-button">
                Log In
              </Button>
            </Col>
          </FormGroup>
        </Form>
        {
          (this.state.access === true) ?
            <Alert bsStyle="success" className="admin-login-alert">Welcome Admin</Alert> :
            (this.state.access === false) ?
              <Alert bsStyle="danger" className="admin-login-alert">Wrong Username or password</Alert> :
              ''
        }
      </div>
    )
  }
}

export default AdminLogin;