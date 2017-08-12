import React from 'react';
import axios from 'axios';
import { Image, Form, FormControl, FormGroup, InputGroup, ControlLabel, Grid, Col, Button, Alert } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './UserSettings.css';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      editMode: {
        name: false,
        phone: false,
        address: false,
        city: false
      },
      message: {
        title: null,
        type: null
      }
    };

    this.handleNameEdit = this.handleNameEdit.bind(this);
    this.handlePhoneEdit = this.handlePhoneEdit.bind(this);
    this.handleAddressEdit = this.handleAddressEdit.bind(this);
    this.handleCityEdit = this.handleCityEdit.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleAddress1Change = this.handleAddress1Change.bind(this);
    this.handleAddress2Change = this.handleAddress2Change.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    
    this.handleNameSave = this.handleNameSave.bind(this);
    this.handlePhoneSave = this.handlePhoneSave.bind(this);
    this.handleAddressSave = this.handleAddressSave.bind(this);
    this.handleCitySave = this.handleCitySave.bind(this);
  }

  handleNameEdit() {
    this.setState({
      editMode: {
        name: true
      },
      message: null
    });
  }

  handlePhoneEdit() {
    // bring a textbox with the content of this.state.currentUser.phone and an ability to edit
    this.setState({
      editMode: {
        phone: true
      },
      message: null
    });
  }

  handleAddressEdit() {
    this.setState({
      editMode: {
        address: true
      },
      message: null
    });
  }

  handleCityEdit() {
    this.setState({
      editMode: {
        city: true
      },
      message: null
    });
  }

  handleNameChange(event) {
    let value = event.target.value;
    let user = this.state.currentUser;
    user.name = value;
    this.setState({
      currentUser: user
    });
  }

  handlePhoneChange(event) {
    // set the state of currentUser.phone
    let value = event.target.value;
    let user = this.state.currentUser;
    user.phone = value;
    this.setState({
      currentUser: user
    });
  }

  handleAddress1Change(event) {
    let value = event.target.value;
    let user = this.state.currentUser;
    let address = user.address ?
      {
        address1: value,
        address2: user.address.address2 ? user.address.address2 : '',
        city: user.address.city ? user.address.city : ''
      }
      :
      {
        address1: value,
        address2: '',
        city: ''
      }
    user.address = address;
    this.setState({
      currentUser: user
    });
  }

  handleAddress2Change(event) {
    let value = event.target.value;
    let user = this.state.currentUser;
    let address = user.address ?
      {
        address1: user.address.address1 ? user.address.address1 : '',
        address2: value,
        city: user.address.city ? user.address.city : ''
      }
      :
      {
        address1: '',
        address2: value,
        city: ''
      }
    user.address = address;
    this.setState({
      currentUser: user
    });
  }

  handleCityChange(event) {
    let value = event.target.value;
    let user = this.state.currentUser;
    let address = user.address ?
      {
        address1: user.address.address1 ? user.address.address1 : '',
        address2: user.address.address2 ? user.address.address2 : '',
        city: value
      }
      :
      {
        address1: '',
        address2: '',
        city: value
      }
    user.address = address;
    this.setState({
      currentUser: user
    });
  } 

  handleNameSave() {
    axios.put(`${this.props.url}/${this.state.currentUser._id}`, {name: this.state.currentUser.name})
      .then((response) => {
        this.setState({
          message: {
            title: "Data Updated",
            type: "success"
          }
        });
      })
      .catch((err) => {
        this.setState({
          message: {
            title: "Data not updated! Check console for error.",
            type: "danger"
          }
        });
        console.log(err);
      });

      this.setState({
        editMode: {
          name: false
        }
      });
  }

  handlePhoneSave() {
    // update the phone number of the user using axios.put
    axios.put(`${this.props.url}/${this.state.currentUser._id}`, {phone: this.state.currentUser.phone})
      .then((response) => {
        this.setState({
          message: {
            title: "Data Updated",
            type: "success"
          }
        });
      })
      .catch((err) => {
        this.setState({
          message: {
            title: "Data not updated! Check console for error.",
            type: "danger"
          }
        }); 
        console.log(err);
      });
    
    this.setState({
      editMode: {
        phone: false
      }
    });
  }

  handleAddressSave() {
    let address = {
      address1: this.state.currentUser.address.address1,
      address2: this.state.currentUser.address.address2
    }
    axios.put(`${this.props.url}/${this.state.currentUser._id}`, {address})
      .then((response) => {
        this.setState({
          message: {
            title: "Data Updated",
            type: "success"
          }
        });
      })
      .catch((err) => {
        this.setState({
          message: {
            title: "Data not updated! Check console for error.",
            type: "danger"
          }
        });
        console.log(err);
      });

    this.setState({
      editMode: {
        address: false
      }
    });
  }

  handleCitySave() {
    let address = {
      city: this.state.currentUser.address.city
    }
    axios.put(`${this.props.url}/${this.state.currentUser._id}`, {address})
      .then((response) => {
        this.setState({
          message: {
            title: "Data Updated",
            type: "success"
          }
        });
      })
      .catch((err) => {
        this.setState({
          message: {
            title: "Data not updated! Check console for error.",
            type: "danger"
          }
        });
        console.log(err);
      });

    this.setState({
      editMode: {
        city: false
      }
    });
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
      axios.get(this.props.url)
      .then((response) => {
        let userinfo = response.data; 
        let currentUser = userinfo.filter(user => user.email === data.name);
        
        currentUser[0].avatar = data.picture;

        this.setState({currentUser: currentUser[0]});
      })
      .catch((err) => {console.log(err);})

    });
  }

  render() {
    return (
      <div className="settings">
        <Navigation auth={this.props.auth} {...this.props}/>
        <div className="settings-body">
          <h2>Your Account Settings</h2>

          <Grid>
            <Col xs={12} className="settings-userHead-info">
              <Col xs={4} className="settings-avatar">
                {this.state.currentUser.avatar ? 
                  <Image src={this.state.currentUser.avatar} alt={this.state.currentUser.email} responsive /> :
                  <i className="fa fa-spin fa-circle-o-notch"></i>
                }
                <h5>{this.state.currentUser.email ? this.state.currentUser.email : <i className="fa fa-circle-o-notch fa-spin"></i>}</h5>
              </Col>
              <Col xs={8} className="settings-user">
                {
                  this.state.editMode.name ?
                  <div>
                    <form>
                      <FormGroup>
                        <Col xs={10}>
                          <InputGroup className="settings-name-input">
                            <FormControl type="text" value={this.state.currentUser.name ? this.state.currentUser.name : ''} onChange={this.handleNameChange}/>
                          </InputGroup>
                        </Col>
                        <Col xs={2} className="settings-name-button">
                          <Button onClick={this.handleNameSave}>Save</Button>
                        </Col>
                      </FormGroup>
                    </form>  
                  </div> 
                  :
                  <div>
                    <Col xs={10} className="settings-name-info">
                      <h3>{this.state.currentUser.name ? this.state.currentUser.name : "Add Name"}</h3>
                    </Col>
                    <Col xs={2} className="settings-name-button">
                      <Button onClick={this.handleNameEdit}><i className="fa fa-pencil"></i> Edit</Button>
                    </Col>
                  </div>
                }
                {
                  this.state.editMode.phone ? 
                  <div>
                    <form>
                      <FormGroup>
                        <Col xs={10}> 
                          <InputGroup className="settings-phone-input">
                            <InputGroup.Addon>+91</InputGroup.Addon>
                            <FormControl type="text" value={this.state.currentUser.phone ? this.state.currentUser.phone : ''} onChange={this.handlePhoneChange}/>
                          </InputGroup>
                        </Col>
                        <Col xs={2} className="settings-phone-button">
                          <Button onClick={this.handlePhoneSave}>Save</Button>
                        </Col>
                      </FormGroup>
                    </form>
                  </div>
                  :
                  <div>
                    <Col xs={10} className="settings-phone-info">
                      {this.state.currentUser.phone ? this.state.currentUser.phone : "Add Phone Number"} 
                    </Col>
                    <Col xs={2} className="settings-phone-button">
                      {
                        //<Button onClick={this.handlePhoneEdit}><i className="fa fa-pencil"></i> Edit</Button>
                      }
                      &nbsp;
                    </Col>
                  </div>
                }
                
                <br/>
                {
                  this.state.editMode.address ? 
                  <div>
                    <form>
                      <FormGroup>
                        <Col xs={10}> 
                          <InputGroup className="settings-address-input">
                            <FormControl type="text" value={this.state.currentUser.address && this.state.currentUser.address.address1 ? this.state.currentUser.address.address1 : ''} onChange={this.handleAddress1Change} placeholder={this.state.currentUser.address && this.state.currentUser.address.address1 ? '' : 'Flat / House No. / Floor / Building'}/>
                            <FormControl type="text" value={this.state.currentUser.address && this.state.currentUser.address.address2 ? this.state.currentUser.address.address2 : ''} onChange={this.handleAddress2Change} placeholder={this.state.currentUser.address && this.state.currentUser.address.address2 ? '' : 'Colony / Street / Locality'}/>
                          </InputGroup>
                        </Col>
                        <Col xs={2} className="settings-address-button">
                          <Button onClick={this.handleAddressSave}>Save</Button>
                        </Col>
                      </FormGroup>
                    </form>
                  </div>
                  :
                  <div>
                    <Col xs={10} className="settings-address-info">
                      {this.state.currentUser.address ? <div><p>{this.state.currentUser.address.address1}</p><p>{this.state.currentUser.address.address2}</p></div> : "Add Address"} 
                    </Col>
                    <Col xs={2} className="settings-address-button">
                      <Button onClick={this.handleAddressEdit}><i className="fa fa-pencil"></i> Edit</Button>
                    </Col>
                  </div>
                }
              </Col>
            </Col>

            <Col xs={12} className="settings-userCity-info">
                <Col xs={4} className="settings-sub-title">Base City</Col>
                <Col xs={8}>
                  {
                    this.state.editMode.city ?
                    <div>
                      <form>
                        <FormGroup>
                          <Col xs={10}>
                            <InputGroup className="settings-city-input">
                              <FormControl type="text" value={this.state.currentUser.address && this.state.currentUser.address.city ? this.state.currentUser.address.city : ''} onChange={this.handleCityChange}/>
                            </InputGroup>
                          </Col>
                          <Col xs={2} className="settings-city-button"> 
                            <Button onClick={this.handleCitySave}>Save</Button>
                          </Col>
                        </FormGroup>
                      </form>
                    </div> 
                    : 
                    <div>
                      <Col xs={10} className="settings-city-info">
                        {this.state.currentUser.address && this.state.currentUser.address.city ? this.state.currentUser.address.city : 'Add your City'}
                      </Col>
                      <Col xs={2} className="settings-city-button">
                        <Button onClick={this.handleCityEdit}><i className="fa fa-pencil"></i> Edit</Button>
                      </Col>
                    </div>
                  }
                </Col>
            </Col>
          </Grid>
          {
            this.state.message ?
              <Alert bsStyle={this.state.message.type} className="settings-message">
                <h4>{this.state.message.title}</h4>
              </Alert> : ''
          }
        </div>
        <Footer/>
      </div>
    )
  } 
}
 
export default UserSettings;