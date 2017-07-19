import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Browse.css';

class BrowseXbox extends React.Component {
  render() {
    return (
      <div className="browse">
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>XBoX Games</h2>
        <Footer/>
      </div>
    )
  }
}

export default BrowseXbox;