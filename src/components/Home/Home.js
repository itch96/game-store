import React from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>It will contain the SVG of how it works</h2>
        <Footer/>
      </div>
    )
  }
}

export default Home;