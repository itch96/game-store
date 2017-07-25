import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col xs={12} md={4} className="footer-section">
              <h3 className="footer-heading">Contact Us</h3>
              <p className="footer-address">
                <i className="fa fa-map-marker" ariaHidden="true"></i>
                Address
              </p>
              <p className="footer-phone">
                <i className="fa fa-phone" ariaHidden="true"></i>
                PhoneNo
              </p>
              <p className="footer-mail">
                <i className="fa fa-envelope" ariaHidden="true"></i>
                email
              </p>
            </Col>
            <Col xs={12} md={4} className="footer-section">
              <h3 className="footer-heading">Reach Us</h3>
              <Col xs={4}>
                <p className="footer-media-link">
                  <i className="fa fa-facebook" ariaHidden="true"></i>
                </p>
              </Col>
              <Col xs={4}>
                <p className="footer-media-link">
                  <i className="fa fa-twitter" ariaHidden="true"></i>
                </p>
              </Col>
              <Col xs={4}>
                <p className="footer-media-link">
                  <i className="fa fa-instagram" ariaHidden="true"></i>
                </p>
              </Col>
            </Col>
            <Col xs={12} md={4} className="footer-section">
              <h3 className="footer-heading">About Us</h3>
              <Link to="/team">
                <p className="footer-link">
                  <i className="fa fa-users" ariaHidden="true"></i>
                  The Team
                </p>
              </Link>
              <Link to="/admin">
                <p className="footer-link">
                  <i className="fa fa-lock" ariaHidden="true"></i>
                  Admin Panel
                </p>
              </Link>
              <p className="footer-copyright">
                <i className="fa fa-copyright" ariaHidden="true"></i>
                Copyright
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Footer; 