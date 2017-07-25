import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ghost from '../../assets/ghost.svg';
import './NoMatch.css';

class NoMatch extends React.Component {
  render() {
    return (
      <div className="no-match">
        <Navigation auth={this.props.auth} {...this.props}/>
        <img src={ghost} alt="cuddling ghost"></img>
        <h2><strong>Error 404.</strong></h2>
        <br/>
        <h4> You have entered a world where ghosts are cuddly and cute.<br/>Apparently, such a world doesn't exist.<br/>Just like this page.</h4>
        <Footer/>
      </div>
    )
  }
}

export default NoMatch;