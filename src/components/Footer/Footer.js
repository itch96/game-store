import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <h3>Contact Us</h3>
              <p>Address</p>
              <p>PhoneNo</p>
            </Col>
            <Col xs={12} md={4}>
              <h3>Reach Us</h3>
              <p>Links to social media</p>
            </Col>
            <Col xs={12} md={4}>
              <h3>About Us</h3>
              <p>The Team</p>
              <p>Admin Panel</p>
              <p>Copyright</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Footer;