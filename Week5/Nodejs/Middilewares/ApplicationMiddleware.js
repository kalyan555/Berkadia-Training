let express = require("express");
let app = express();
var myLogger = function (req, res, next) {
    console.log("Inner Function");
    next();
 }

// app.use(myLogger)
app.get('/', myLogger, (req, res, next) => {

    res.send("Hello World");
});
app.listen(3000, () => console.log("listenning"));