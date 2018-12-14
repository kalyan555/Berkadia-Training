var http = require('http');
var express = require('express');
var app = express();
var app = express()
function myFunction(req, res, next) {
  console.log('Time:', Date.now())
  next()
}
app.get('/',myFunction,function(req,res){
  console.log("main");
})
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(3000);