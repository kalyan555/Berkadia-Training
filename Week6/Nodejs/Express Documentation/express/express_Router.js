let express = require("express");
let app = express();
app.get('/', (req, res, next) => {
    res.end("Hello World");
    console.log("\n\nexpression.Router() function: \n"+express.Router());
});
app.listen(3000, () => console.log("listenning"));

/*
Output
-------
function router(req, res, next) {
    router.handle(req, res, next);
  }
body-parser deprecated undefined extended: provide extended option json.js:12:68
*/
