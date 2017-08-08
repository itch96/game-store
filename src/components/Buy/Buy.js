import React from 'react';
import { Grid, Col, Thumbnail, Button, FormGroup, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import XBoX from '../../assets/xbox-logo.svg';
import PS4 from '../../assets/playstation-logo.svg';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Buy.css';

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <Navigation auth={this.props.auth} {...this.props} />
        
        <div className="buy-filter">
          <Grid>
            <Col xs={12} md={6}>
              <div className="buy-filter-XBoX">
                <FormGroup>
                  <Col xs={12}>
                    <Checkbox className="buy-filter-XBoX-checkbox"><img src={XBoX} alt="XBoX" /></Checkbox>
                  </Col>
                </FormGroup>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="buy-filter-PS4">
                <FormGroup>
                  <Col xs={12}>
                    <Checkbox><img src={PS4} alt="PS4" /></Checkbox>
                  </Col>
                </FormGroup>
              </div>
            </Col>
          </Grid>
        </div>

        <div className="buy">
        <Grid>
          <Col xs={12} md={3} className="buy-game-card">
            <Thumbnail src="https://s-media-cache-ak0.pinimg.com/736x/8b/34/01/8b3401d6647107b30d5e9ae59718fb48--batman-arkham-knight-ps-ps-games.jpg" alt="Batman" className="buy-poster">
              <h3 className="buy-title">Batman Arkham Knight</h3>
              <p>
                <Link to={`/buy/1`}>
                  <Button className="buy-button">Buy Game</Button>
                </Link>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={3} className="buy-game-card">
            <Thumbnail src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcB7WVDn.f4Uli2dyqvJAR1iMrHLquSMr6CthfgctOtrsyBnC_Zv7eq4lChNPm3qxR33Lgrxz_OKuNIamR55zuk1T3S7eijaPWjhPD17gypzf67BKzxlcZcyOS5jy8FHejUvn0dC_gMzLOR9pOvfNfQ2BvOFWqhskBQ6BqgGiZ4OA-" alt="Battlefield 1" className="buy-poster">
              <h3 className="buy-title">Battlefield 1</h3>
              <p>
                <Link to={`/buy/1`}>
                  <Button className="buy-button">Buy Game</Button>
                </Link>
              </p>
            </Thumbnail>
          </Col>
        </Grid>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Buy;