import React from 'react';
import axios from 'axios';
import { Grid, Col, Image, Button, Label } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Game.css';
import xbox from '../../assets/xbox-logo.svg';
import playstation from '../../assets/playstation-logo.svg';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      games: [],
      category: '',
      game: null
    };
    this.getData = this.getData.bind(this);
    this.updateDOM = this.updateDOM.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let url = this.props.url;
    axios.get(url)
      .then((response) => {this.setState({games: response.data}); console.log(this.state.games); this.updateDOM();})
      .catch((err) => {console.log(err);});
  }
  updateDOM() {
    let id = this.props.id;
    let game = this.state.games.filter(game => game._id === id);
    
    this.setState({category: game[0].category});
    
    game = game.map(game => 
        <Grid>
          <Col xs={0} sm={4}>
            <Image src={game.poster} className="game-game-poster" rounded responsive/>
          </Col>
          <Col xs={12} sm={8}>
            <h1 className="game-game-title">{game.title} <small className="game-type">[{game.category === 'XBoX' ? <img src={xbox} alt="xbox"/> : <img src={playstation} alt="playstation"></img>}]</small></h1>
            <br/>
            <div className="game-game-genre-list">
              {game.genres.map(genre => <Label className="game-game-genre-listItem">{genre}</Label>)}
            </div>
            <br/>
            <h4 className="game-game-price">Price: <span className="mrp">{game.mrp}</span> {game.rentPrice} for 15 Days </h4>
            <br/>
            <Button className="game-game-button">Rent Now</Button>
          </Col>
        </Grid>   
      );

    this.setState({ game });
  }
  render() {
    return (
      <div>
        <Navigation auth={this.props.auth} {...this.props}/>
        {
          !this.state.game ? 
            <div className="game-game-loading"><i className="fa fa-spin fa-spinner"></i></div> :
            <div className={this.state.category === 'XBoX' ? "game game-game-xbox" : "game game-game-ps4"}>{this.state.game}</div>
        }
        <Footer/>
      </div>
    )
  }
}

export default Game;