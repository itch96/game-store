import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
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
    adminAuth.handleAuthentication(this.props.url, this.state);
    if(adminAuth.isAuthenticated()) {
      this.setState({access: true});
      history.replace('/adminpanel');
    } else {
      this.setState({access: false});
    }
  }

  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} xs={12} sm={2}>
              UserName
            </Col>
            <Col xs={10} sm={8}>
              <FormControl type="text" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} xs={12} sm={2}>
              Password
            </Col>
            <Col xs={10} sm={8}>
              <FormControl type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs={12}>
              <Button type="submit" onClick={this.handleSubmit}>
                Log In
              </Button>
            </Col>
          </FormGroup>
        </Form>
        {
          (this.state.access === true) ?
            <p>Welcome admin</p> :
            (this.state.access === false) ?
              <p>Wrong Username or password</p> :
              ''
        }
      </div>
    )
  }
}

export default AdminLogin;