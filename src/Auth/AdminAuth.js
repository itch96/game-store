import history from '../history';
import axios from 'axios';

export default class AdminAuth {
  constructor() {
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication(url, state, callback) {
    let data = {};
    axios.get(url)
    .then((response) => {
      data = response.data[0];
      if(state.username === data.username && state.password === data.password) {
        localStorage.setItem('admin_token', 'blah_blah');
      }
      callback(null, true)
    }).catch(err => {console.log(err); callback(err, null)});
  }

  logout() {
    localStorage.removeItem('admin_token');
    // navigate to the admin route
    history.replace('/admin');
  }

  isAuthenticated() {
    return localStorage.getItem('admin_token') ? true : false
  }
}
