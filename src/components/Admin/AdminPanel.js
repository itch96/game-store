import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AdminAuth from '../../Auth/AdminAuth';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import NewGameForm from './NewGameForm';
import SearchGame from './SearchGame';
import DeleteGameForm from './DeleteGameForm';

const adminAuth = new AdminAuth();

export default class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      newGame: false,
      updateGame: false,
      deleteGame: false
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleUpdateGame = this.handleUpdateGame.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleLogout() {
    adminAuth.logout();
  }
  handleNewGame() {
    this.setState({
      newGame: true,
      updateGame: false,
      deleteGame: false
    });
  }
  handleUpdateGame() {
    this.setState({
      newGame: false,
      updateGame: true,
      deleteGame: false
    })
  }
  handleDelete() {
    this.setState({
      newGame: false,
      updateGame: false,
      deleteGame: true
    });
  }
  render() {
    return (
      <div>
        <Navigation auth={this.props.auth} {...this.props}/>
        <h2>Admin Panel</h2>
        <ButtonToolbar>
          <Button onClick={this.handleLogout}>Logout</Button>
          <Button bsStyle="primary" onClick={this.handleNewGame} className={this.state.newGame ? 'active' : ''}>New Game</Button>
          <Button bsStyle="primary" onClick={this.handleUpdateGame} className={this.state.updateGame ? 'active' : ''}>Update Game</Button>
          <Button bsStyle="danger" onClick={this.handleDelete} className={this.state.deleteGame ? 'active' : ''}>Delete Game</Button>
        </ButtonToolbar>
        <br/>
        {
          this.state.newGame ? <div><h4>Enter New Game</h4><NewGameForm url={this.props.url}/></div> :
            this.state.updateGame ? <div><h4>Update Game</h4><SearchGame url={this.props.url} display="update"/></div> :
              this.state.deleteGame ? <div><h4>Delete Game</h4><SearchGame url={this.props.url} display="delete"/></div> : ''
        }
        <Footer/>
      </div>
    )
  }
}