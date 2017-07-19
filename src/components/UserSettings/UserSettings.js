import React from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './UserSettings.css';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    let data = {};
    axios({
      method: 'get',
      url: 'https://itch96.auth0.com/userinfo',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    }).then((response) => {
      data = response.data;
      this.setState({data});
      console.log(data);
    });
  }

  render() {
    return (
      <div className="settings">
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>User Settings</h2>
        <img src={this.state.data.picture} alt={this.state.data.name}/>
        <p>{this.state.data.name}</p>
        <Footer/>
      </div>
    )
  }
}

export default UserSettings;