import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import wiz from '../../assets/wizard.svg';
import './NoAccess.css';

class NoAccess extends React.Component {
  render() {
    return (
      <div className="no-access">
        <Navigation auth={this.props.auth} {...this.props}/>
        <img src={wiz} alt="gandalf"></img>
        <h2>You shall NOT Pass!!<br/> Try <strong>Logging in</strong> and Try Again.</h2>
        <Footer/>
      </div>
    )
  }
}

export default NoAccess;