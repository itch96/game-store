import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class Purchases extends React.Component {
  render() {
    return (
      <div className="purchases">
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>Purchases</h2>
        <Footer/>
      </div>
    )
  }
}

export default Purchases;