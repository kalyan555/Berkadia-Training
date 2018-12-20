let express = require("express");
let app = express();
app.get('/', (req, res, next) => {
    res.end("Hello World");
    console.log("\n\nexpression.static() function: \n"+express.static("public"));
});
app.listen(3000, () => console.log("listenning"));


/*
OUTPUT:
-------
node app.js
expression.static() function:
function serveStatic (req, res, next) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (fallthrough) {
        return next()
      }
      // method not allowed
      res.statusCode = 405
      res.setHeader('Allow', 'GET, HEAD')
      res.setHeader('Content-Length', '0')
      res.end()
      return
    }
    var forwardError = !fallthrough
    var originalUrl = parseUrl.original(req)
    var path = parseUrl(req).pathname
    // make sure redirect occurs at mount
    if (path === '/' && originalUrl.pathname.substr(-1) !== '/') {
      path = ''
    }
    // create send stream
    var stream = send(req, path, opts)
    // add directory handler
    stream.on('directory', onDirectory)
    // add headers listener
    if (setHeaders) {
      stream.on('headers', setHeaders)
    }
    // add file listener for fallthrough
    if (fallthrough) {
      stream.on('file', function onFile () {
        // once file is determined, always forward error
        forwardError = true
      })
    }
    // forward errors
    stream.on('error', function error (err) {
      if (forwardError || !(err.statusCode < 500)) {
        next(err)
        return
      }
      next()
    })
    // pipe
    stream.pipe(res)
  }
*/
