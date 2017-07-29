import React from 'react';
import axios from 'axios';
import { Form, FormControl, FormGroup, ControlLabel, Col, Button } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './UserSettings.css';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    let data = {};
    axios({
      method: 'get',
      url: 'https://itch96.auth0.com/userinfo',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    }).then((response) => {
      data = response.data;
      this.setState({data});
      console.log(data);
    });
  }

  render() {
    return (
      <div className="settings">
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>Your Account Settings</h2>
        <img src={this.state.data.picture} alt={this.state.data.name}/>
        <h4>Email: {this.state.data.name}</h4>

        <Form horizontal>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} xs={10} xsOffset={2} md={2} mdOffset={0}>
              Full Name
            </Col>
            <Col xs={9} xsOffset={2} md={8} mdOffset={0}>
              <FormControl type="text" placeholder="Captain America" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalContact">
            <Col componentClass={ControlLabel} xs={10} xsOffset={2} md={2} mdOffset={0}>
              Contact Number
            </Col>
            <Col xs={9} xsOffset={2} md={8} mdOffset={0}>
              <FormControl type="number" placeholder="10 digit number without prefixes" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPincode">
            <Col componentClass={ControlLabel} xs={10} xsOffset={2} md={2} mdOffset={0}>
              Pincode
            </Col>
            <Col xs={9} xsOffset={2} md={8} mdOffset={0}>
              <FormControl type="number" placeholder="6 digits [0-9] pincode" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalAddress">
            <Col componentClass={ControlLabel} xs={10} xsOffset={2} md={2} mdOffset={0}>
              Street Address
            </Col>
            <Col xs={9} xsOffset={2} md={8} mdOffset={0}>
              <FormControl type="text" placeholder="Flat / House No. / Floor / Building" />
              <FormControl type="text" placeholder="Colony / Street / Locality" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalLandmark">
            <Col componentClass={ControlLabel} xs={10} xsOffset={2} md={2} mdOffset={0}>
              Landmark
            </Col>
            <Col xs={9} xsOffset={2} md={8} mdOffset={0}>
              <FormControl type="text" placeholder="E.g. Near AIIMS Flyover, Behind Regal Cinema, etc." />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalCity">
            <Col componentClass={ControlLabel} xs={10} xsOffset={2} md={2} mdOffset={0}>
              City
            </Col>
            <Col xs={9} xsOffset={2} md={8} mdOffset={0}>
              <FormControl type="text" placeholder="Delhi" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalState">
            <Col componentClass={ControlLabel} xs={10} xsOffset={2} md={2} mdOffset={0}>
              State
            </Col>
            <Col xs={9} xsOffset={2} md={8} mdOffset={0}>
              <FormControl type="text" placeholder="West Bengal" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs={12}>
              <Button type="submit">
                Save Changes
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <Footer/>
      </div>
    )
  } 
}
 
export default UserSettings;