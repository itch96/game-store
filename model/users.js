'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var UserSchema = new Schema({
  name: String,
  phone: String,
  address: {
    address1: String,
    address2: String,
    landmark: String,
    pincode: String,
    city: String,
    state: String
  },
  bankDetails: {
    pan: String,
    bankAccountNumber: String,
    ifsc: String,
    name: String
  }
});
//export our module to use in server.js
module.exports = mongoose.model('User', UserSchema);
