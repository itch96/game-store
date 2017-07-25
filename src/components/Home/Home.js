import React from 'react';
import { Image } from 'react-bootstrap';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navigation auth={this.props.auth} {...this.props}/>
        <Image className="home-image" src="" responsive/>
        <Footer/>
      </div>
    )
  }
}

export default Home;