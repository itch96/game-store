import React from 'react';
import AdminLogin from './AdminLogin';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Admin.css';

class Admin extends React.Component {
  render() {
    return (
      <div className="admin">
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>Hello admin</h2>
        <AdminLogin className="admin-login" url={this.props.url}/>
        <Footer/>
      </div>
    )
  }
}

export default Admin;