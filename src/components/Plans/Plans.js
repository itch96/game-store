import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Plans.css';

class Plans extends React.Component {
  render() {
    return (
      <div>
      <Navigation auth={this.props.auth} {...this.props}/>
      <h1 className="plan-title">Plans for Heavy Gamers</h1>
      <Grid>
        <Row>
          <Col xs={12} md={4} className="plan">
              <h2 className="plan-heading">Plan 1</h2>
              <div className="plan-body">
                <p>Incentive</p>
                <p>Incentive</p>
                <p>Incentive</p>
                <p>Incentive</p>
              <p>
                <Button className="plan-button">Button</Button>
              </p>
              </div>
          </Col>
          <Col xs={12} md={4} className="plan">
              <h2 className="plan-heading">Plan 2</h2>
              <div className="plan-body">
                <p>Incentive</p>
                <p>Incentive</p>
                <p>Incentive</p>
                <p>Incentive</p>
              <p>
                <Button className="plan-button">Button</Button>
              </p>
              </div>
          </Col>
          <Col xs={12} md={4} className="plan">
              <h2 className="plan-heading">Plan 3</h2>
              <div className="plan-body">
                <p>Incentive</p>
                <p>Incentive</p>
                <p>Incentive</p>
                <p>Incentive</p>
              <p>
                <Button className="plan-button">Button</Button>
              </p>
              </div>
          </Col>
        </Row>
      </Grid>
      <Footer/>
      </div>
    )
  }
}

export default Plans;