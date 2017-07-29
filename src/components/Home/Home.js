import React from 'react';
import { Image, Col } from 'react-bootstrap';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import pacman from '../../assets/pacman.svg';
import pacman_ghost from '../../assets/pacman-ghost.svg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation auth={this.props.auth} {...this.props}/>

        <div className="home">
          <Image src={pacman} className="home-pacman" responsive/>
          <Col xs={12} md={3} className="home-section">
            <Image src={pacman_ghost} className="home-pacman-ghost" responsive/>
            <h4 className="home-step">
              Select Your Platform [ XBoX | PS4 ]
            </h4>
          </Col>
          <Col xs={12} md={3} className="home-section">
            <Image src={pacman_ghost} className="home-pacman-ghost" responsive/>
            <h4 className="home-step">
              Search a Game.
            </h4>
          </Col>
          <Col xs={12} md={3} className="home-section">
            <Image src={pacman_ghost} className="home-pacman-ghost" responsive/>
            <h4 className="home-step">
              Enjoy the Game at your house.
            </h4>
          </Col>
          <Col xs={12} md={3} className="home-section">
            <Image src={pacman_ghost} className="home-pacman-ghost" responsive/>
            <h4 className="home-step">
              Return us back after playing.
            </h4>
          </Col>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;