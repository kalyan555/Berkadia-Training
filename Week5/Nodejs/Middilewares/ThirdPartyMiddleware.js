// $ npm install cookie-parser
// Install and use, here we are using cookie parser
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
app.listen(3000, () => console.log("listenning"));