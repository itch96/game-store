import React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';

class NewGameForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      titleState: '',
      poster: '',
      posterState: '',
      quantity: '',
      quantityState: '',
      mrp: '',
      mrpState: '',
      rentPrice: '',
      rentPriceState: '',
      category: 'Category',
      categoryState: '',
      genres: '',
      genresState: '',
      game: {},
      exist: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fieldsOk = this.fieldsOk.bind(this);
    this.senddata = this.senddata.bind(this);
  }

  handleChange(event, label) {
    let value = event.target.value;
    if(label === 'title') {
      this.setState({title: value});
    } else if(label === 'poster') {
      this.setState({poster: value});
    } else if(label === 'quantity') {
      this.setState({quantity: value});
    } else if(label === 'mrp') {
      this.setState({mrp: value});
    } else if(label === 'rentPrice') {
      this.setState({rentPrice: value});
    } else if(label === 'genres') {
      this.setState({genres: value});
    }
  }

  handleClick(event, category) {
    this.setState({category: category});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.fieldsOk()) {this.senddata();}
  }

  fieldsOk() {
    if(this.state.title === '') {this.setState({titleState: false})}
    else {this.setState({titleState: true})}

    if(this.state.poster === '') {this.setState({posterState: false})}
    else {this.setState({posterState: true})}

    if(this.state.quantity === '') {this.setState({quantityState: false})}
    else {this.setState({quantityState: true})}

    if(this.state.mrp === '') {this.setState({mrpState: false})}
    else {this.setState({mrpState: true})}

    if(this.state.rentPrice === '') {this.setState({rentPriceState: false})}
    else {this.setState({rentPriceState: true})}

    if(this.state.category === 'XBoX' || this.state.category === 'PS4') {this.setState({categoryState: true})}
    else {this.setState({categoryState: false})}

    if(this.state.genres === '') {this.setState({genresState: false})}
    else {this.setState({genresState: true})}

    if(this.state.titleState && this.state.posterState && this.state.quantityState && this.state.mrpState && this.state.rentPriceState && this.state.categoryState && this.state.genresState) {return true;}
    else {return false;}
  }

  senddata() {
    let url = this.props.url;
    let tempGenres = this.state.genres.split(',');
    let genres = [];

    for(let i = 0; i < tempGenres.length; i ++) {
      genres.push(tempGenres[i].trim());
    }

    let data = {
      title: this.state.title.trim(),
      poster: this.state.poster.trim(),
      quantity: this.state.quantity.trim(),
      mrp: this.state.mrp,
      rentPrice: this.state.rentPrice,
      category: this.state.category.trim(),
      genres: genres
    }

    if(this.props.type === 'update') {
      axios.put(`${url}/${this.props.id}`, data)
        .then((response) => {this.setState({message: "Data Updated"});})
        .catch((err) => {console.log(err); this.setState({message: "Data not updated! Check console for error."});})
    } else if(this.props.type === 'delete') {

    } else {
      axios.post(url, data)
        .then((response) => {this.setState({message: "Data sent"})})
        .catch((err) => {console.log(err); this.setState({message: "Data not sent. Check console for error"});});
    }
  }

  componentDidMount() {
    if(this.props.type === 'update') {
      this.setState({
        title: this.props.game.title,
        poster: this.props.game.poster,
        quantity: this.props.game.quantity,
        mrp: this.props.game.mrp,
        rentPrice: this.props.game.rentPrice,
        category: this.props.game.category,
        genres: this.props.game.genres.join(", ")
      });
    }
  }
  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalTitle" validationState={this.state.titleState === '' ? null : this.state.titleState ? 'success' : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>
              Title
            </Col>
            <Col xs={12} sm={8}>
              <FormControl type="text" placeholder={this.state.title === '' ? "Call of Duty : Modern Warfare" : ''} value={this.state.title} onChange={(event) => this.handleChange(event, 'title')}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPoster" validationState={this.state.posterState === '' ? null : this.state.posterState ? 'success' : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>
              Poster
            </Col>
            <Col xs={12} sm={8}>
              <FormControl type="text" placeholder={this.state.poster === '' ? "https://images-na.ssl-images-amazon.com/images/I/81gs1G2P%2BFL._SL1500_.jpg" : ''} value={this.state.poster} onChange={(event) => this.handleChange(event, 'poster')}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalQuantity" validationState={this.state.quantityState === '' ? null : this.state.quantityState ? 'success' : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>
              Quantity
            </Col>
            <Col xs={12} sm={8}>
              <FormControl type="text" placeholder={this.state.quantity === '' ? '3' : ''} value={this.state.quantity} onChange={(event) => this.handleChange(event, 'quantity')}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalMRP" validationState={this.state.mrpState === '' ? null : this.state.mrpState ? 'success' : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>
              MRP
            </Col>
            <Col xs={12} sm={8}>
              <FormControl type="text" placeholder={this.state.quantity === '' ? '5000' : ''} value={this.state.mrp} onChange={(event) => this.handleChange(event, 'mrp')}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalRentPrice" validationState={this.state.rentPriceState === '' ? null : this.state.rentPriceState ? 'success' : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>
              Rent Price
            </Col>
            <Col xs={12} sm={8}>
              <FormControl type="text" placeholder={this.state.quantity === '' ? '1500' : ''} value={this.state.rentPrice} onChange={(event) => this.handleChange(event, 'rentPrice')}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalCategory" validationState={this.state.categoryState === '' ? null : this.state.categoryState ? 'success' : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>
              Category
            </Col>
            <Col xs={12} sm={8}>
              <DropdownButton title={this.state.category} id="bg-nested-dropdown">
                <MenuItem eventKey="1" onClick={(event) => this.handleClick(event, 'XBoX')}>XBoX</MenuItem>
                <MenuItem eventKey="2" onClick={(event) => this.handleClick(event, 'PS4')}>PS4</MenuItem>
              </DropdownButton>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalGenres" validationState={this.state.genresState === '' ? null : this.state.genresState ? 'success' : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>
              Genres (comma seperated)
            </Col>
            <Col xs={12} sm={8}>
              <FormControl type="text" placeholder={this.state.quantity === '' ? 'war, guns' : ''} value={this.state.genres} onChange={(event) => this.handleChange(event, 'genres')}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} xs={12} sm={8}>
              <Button type="submit" bsStyle='primary' onClick={this.handleSubmit}>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
        {
          this.state.message
        }
      </div>
    )
  }
}

export default NewGameForm;