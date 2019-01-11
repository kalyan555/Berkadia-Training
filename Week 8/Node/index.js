'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var foodtrucksRoute = require('./routes/foodtrucks');
var usersRoute = require('./routes/users');
var bookingsRoute = require('./routes/bookings');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRoute);
app.use('/foodtrucks', foodtrucksRoute);
app.use('/bookings', bookingsRoute);

app.listen(PORT, function() {
  console.log('Contacts server listening on port %s.', PORT);
});