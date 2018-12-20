let express = require("express");
let app = express();
app.get('/', (req, res, next) => {
    res.end("Hello World");
    console.log("expression.json() function: \n"+express.json());
});
app.listen(3000, () => console.log("listenning"));

/*
The detailed output of the json function in given which hold the values in the form of key value pair
Output:
--------
node app.js
listenning
expression.json() function:
function jsonParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }
    req.body = req.body || {}
    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }
    debug('content-type %j', req.headers['content-type'])
    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }
    // assert charset per RFC 7159 sec 8.1
    var charset = getCharset(req) || 'utf-8'
    if (charset.substr(0, 4) !== 'utf-') {
      debug('invalid charset')
      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
        charset: charset,
        type: 'charset.unsupported'
      }))
      return
    }
    // read
    read(req, res, next, parse, debug, {
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
*/
