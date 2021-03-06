let express = require("express");
let app = express();
app.get('/', (req, res, next) => {
    res.end("Hello World");
    console.log("\n\nexpression.urlencoded() function: \n"+express.urlencoded());
});
app.listen(3000, () => console.log("listenning"));


/*
Output
-------
> node app.js 
function urlencodedParser (req, res, next) {
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
    // assert charset
    var charset = getCharset(req) || 'utf-8'
    if (charset !== 'utf-8') {
      debug('invalid charset')
      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
        charset: charset,
        type: 'charset.unsupported'
      }))
      return
    }
    // read
    read(req, res, next, parse, debug, {
      debug: debug,
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
*/
