let express = require("express");
let app = express();
//Create a middle ware aplication which can be used with next() method 
var myLogger = function (req, res, next) {
    console.log("Inner Function");
    next();
 }

// next method call the continuation of the program after that function in the below app.get()
app.get('/', myLogger, (req, res, next) => {

    res.send("Hello World");
});
app.listen(3000, () => console.log("listenning"));