import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Browse.css';

class BrowsePs4 extends React.Component {
  render() {
    return (
      <div className="browse">
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>PS4 Games</h2>
        <Footer/>
      </div>
    )
  }
}

export default BrowsePs4;