import React from 'react';
import { Col, Thumbnail, Button, Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import axios from 'axios'
import './Browse.css';
import playstation from '../../assets/playstation-logo.svg';

class BrowsePs4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      err: '',
      games: null
    }
    this.getData = this.getData.bind(this);
    this.updateDOM = this.updateDOM.bind(this);
  }

  getData() {
    let url = this.props.url;
    axios.get(url)
      .then((response) => {this.setState({response: response.data}); console.log(response.data); this.updateDOM();})
      .catch((err) => {this.setState({err}); console.log(err);});
  }
  
  updateDOM() {
    let data = this.state.response;
    let games = data.map(game => {
      if(game.category === 'PS4') {
        return (
          <Col xs={12} md={3} className="browse-game-card">
            <Thumbnail src={game.poster} alt={game.title} className="browse-poster">
              <h3 className="browse-title">{game.title}</h3>
              <p>
                <Link to={`/browseps4/${game._id}`}>
                  <Button className="browse-button">Details</Button>
                </Link>
              </p>
            </Thumbnail>
          </Col>
        );
      } else { return '';}
    });
    this.setState({games: games});
  }
  
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="browse-ps4">
        <Navigation auth={this.props.auth} {...this.props}/>
        <img src={playstation} alt="playstation" className="browse-heading"></img>
        {
          !this.state.games ? 
            <div className="browse-loading">
              <i className="fa fa-spin fa-spinner"></i>
            </div> :
            <Grid>
              {this.state.games}
            </Grid>
        }
        <Footer/>
      </div>
    )
  }
}

export default BrowsePs4;