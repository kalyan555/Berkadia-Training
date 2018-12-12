
## Application-level middleware
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
## Router-level middleware
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
## Error-handling middleware
Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
## Built-in middleware
Starting with version 4.x, Express no longer depends on Connect. The middleware functions that were previously included with Express are now in separate modules; see the list of middleware functions.
Express has the following built-in middleware functions:
* express.static serves static assets such as HTML files, images, and so on.
* express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
* express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+
## Third-party middleware
Use third-party middleware to add functionality to Express apps.
