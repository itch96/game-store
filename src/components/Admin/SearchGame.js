import React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import NewGameForm from './NewGameForm';
import DeleteGameForm from './DeleteGameForm';

export default class SearchGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      display: '',
      games: [],
      game: {},
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;
    this.setState({id: value, display: ''});
  }
  handleSearch(event) {
    event.preventDefault();
    let myGame = this.state.games.filter((game) => game._id == this.state.id);
    myGame.length === 1 ?
      this.setState({display: this.props.display, game: myGame}) :
      myGame.length === 0 ? 
        this.setState({message: "Game with this ID doesn't exist."}) :
        myGame.length > 1 ?
          this.setState({message: "Shit! There's more than one game with that ID. Contact Developer!"}) :
          this.setState({message: "Something's wrong with the filtering. Contact Developer!"});
  }
  componentDidMount() {
    axios.get(this.props.url)
      .then((response) => {
        this.setState({games: response.data});
      })
      .catch((err) => {console.log(err);});
  }
  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalTitle">
            <Col componentClass={ControlLabel} sm={2}>
              ID
            </Col>
            <Col xs={12} sm={6}>
              <FormControl type="text" placeholder="5970afcae9e7c081a6b88e09" onChange={this.handleChange} value={this.state.id}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} xs={12} sm={8}>
              <Button type="submit" bsStyle='primary' onClick={this.handleSearch}>
                Search
              </Button>
            </Col>
          </FormGroup>

        </Form>
        {
          this.state.display === 'update' ? <NewGameForm url={this.props.url} type="update" id={this.state.id} game={this.state.game[0]}/> : 
            this.state.display === 'delete' ? <DeleteGameForm url={this.props.url} type="delete" id={this.state.id} game={this.state.game[0]}/> : ''
        }
        {
          this.state.message
        }
      </div>
    )
  }
}