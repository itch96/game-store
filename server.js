//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Game = require('./model/games.js');
var Admin = require('./model/admin.js');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;
// db config
mongoose.connect("mongodb://itch96:root@ds147872.mlab.com:47872/game-store");
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent games
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});
// adding the /admin route to our /api router
router.route('/admin')
  // retrieve admin from database
  .get((req, res) => {
    Admin.find((err, admin) => {
      if(err) {res.send(err);}
      else {res.json(admin);}
    })
  });
//adding the /games route to our /api router
router.route('/games')
  //retrieve all games from the database
  .get(function(req, res) {
  //looks at our Game Schema
    Game.find(function(err, games) {
      if (err) {res.send(err);}
      //responds with a json object of our database comments.
      else {res.json(games);}
    });
  })
  //add new game to the database
  .post(function(req, res) {
    var game = new Game();
    //body parser lets us use the req.body
    game.title = req.body.title;
    game.poster = req.body.poster;
    game.quantity = req.body.quantity;
    game.mrp = req.body.mrp;
    game.rentPrice = req.body.rentPrice;
    game.category = req.body.category;
    game.genres = req.body.genres;
    game.save(function(err) {
      if (err) {res.send(err);}
      else {res.json({ message: 'Game successfully added!'});}
    });
  });

  router.route('/games/:game_id')
    .put(function(req, res) {
      Game.findById(req.params.game_id, function(err, game) {
        if (err) {res.send(err);}
        (req.body.title) ? game.title = req.body.title : null;
        (req.body.poster) ? game.poster = req.body.poster : null;
        (req.body.quantity) ? game.quantity = req.body.quantity : null;
        (req.body.mrp) ? game.mrp = req.body.mrp : null;
        (req.body.rentPrice) ? game.rentPrice = req.body.rentPrice : null;
        (req.body.category) ? game.category = req.body.category : null;
        (req.body.genres) ? game.genres = req.body.genres : null;
        //save game
        game.save(function(err) {
          if (err) {res.send(err);}
          else {res.json({ message: 'Game has been updated' });}
        });
      });
    })
    // delete existing game 
    .delete(function(req, res) {
      Game.remove({ _id: req.params.game_id }, function(err, game) {
      if (err) {res.send(err);}
      else {res.json({ message: 'Game has been deleted' });}
      });
    });

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, () => {
 console.log(`api running on port ${port}`);
});