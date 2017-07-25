import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import axios from 'axios';

export default class DeleteGameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      message: ''
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    axios.delete(`${this.props.url}/${this.props.id}`)
      .then((response) => {this.setState({message: "The Game is successfully deleted!"});})
      .catch((err) => {console.log(err); this.setState({message: "Couldn't delete Game. Check console for error!"});});
  }
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={this.props.game.poster} alt={this.props.game.title}>
                <h3>{this.props.game.title}</h3>
                <p>Quantity: {this.props.game.quantity}</p>
                <p>MRP: {this.props.game.mrp}</p>
                <p>Rent Price: {this.props.game.rentPrice}</p>
                <p>Category: {this.props.game.category}</p>
                <p>Genres: {this.props.game.genres.join(', ')}</p>
                <h5>Are you sure you want to delete it?</h5>
                <p>
                  <Button bsStyle="danger" onClick={this.handleDelete}>Yea Delete!</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
        {
          this.state.message 
        }
      </div>
    )
  }
}