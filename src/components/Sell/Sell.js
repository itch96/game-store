import React from 'react';
import { Grid, Form, FormGroup, ControlLabel, Col, FormControl, DropdownButton, MenuItem, InputGroup, Button } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Sell.css';

class Sell extends React.Component {
  render() {
    return (
      <div className="sell">
        <Navigation auth={this.props.auth} {...this.props}/>
        
        <h1>Sell Your Game</h1>
        <h4>Games are meant to be Played not Gather Dust</h4>
        
        <Grid>
          <Form>
            <FormGroup controlId="formHorizontalEmail" className="sell-form-group">
              <Col componentClass={ControlLabel} xs={12} md={2} className="sell-label">
                Title
              </Col>
              <Col xs={12} md={10} className="sell-input">
                <FormControl type="text" placeholder="Battlefield 2" />
              </Col>
            </FormGroup>


            <FormGroup controlId="formHorizontalPassword" className="sell-form-group">
              <Col xs={12} md={2} className="sell-label">
                Category
              </Col>
              <Col xs={12} md={10}>
                <DropdownButton title="Category" id="bg-nested-dropdown" className="sell-dropdown">
                  <MenuItem eventKey="1" className="sell-dropdown-link">XBoX</MenuItem>
                  <MenuItem eventKey="2" className="sell-dropdown-link">PS4</MenuItem>
                </DropdownButton>
              </Col>
            </FormGroup>

            <FormGroup className="sell-form-group">
              <Col xs={12} className="sell-button">
                <Button type="submit">
                  Check Price
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Grid>

        <Footer/>
      </div>
    )
  }
}

export default Sell;