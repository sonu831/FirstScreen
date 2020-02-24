var express = require('express');
var cors = require('cors');
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  users = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');

// const uri = "mongodb+srv://firstscreen:first@123@cluster0-m5740.mongodb.net/test?retryWrites=true&w=majority";

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// //mongoose.connect('mongodb://localhost/Tododb'); 
// mongoose.connect(uri); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);