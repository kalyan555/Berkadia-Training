# Request
The main properties and methods are:

## Properties
The properties are mentioned below:
#### app
This property holds a reference to the instance of the Express application that is using the middleware.
#### baseUrl
The URL path on which a router instance was mounted.
#### body
Contains key-value pairs of data submitted in the request body
#### cookies
When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, it defaults to {}.
#### fresh
Indicates whether the request is “fresh"
#### hostname
Contains the hostname derived from the Host HTTP header.
#### ip
Contains the remote IP address of the request.
#### ips
When the trust proxy setting does not evaluate to false, this property contains an array of IP addresses specified in the X-Forwarded-For request header. Otherwise, it contains an empty array
#### method
Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.
#### originalUrl
This property is much like req.url; however, it retains the original request URL, allowing you to rewrite req.url freely for internal routing purposes
#### params
This property is an object containing properties mapped to the named route “parameters”
#### path
Contains the path part of the request URL.
#### protocol
Contains the request protocol string: either http or (for TLS requests) https.
#### query
This property is an object containing a property for each query string parameter in the route. If there is no query string, it is the empty object, {}.
#### route
Contains the currently-matched route, a string
#### secure
A Boolean property that is true if a TLS connection is established.
#### signedCookies
When using cookie-parser middleware, this property contains signed cookies sent by the request, unsigned and ready for use
#### stale
When using cookie-parser middleware, this property contains signed cookies sent by the request, unsigned and ready for use
#### subdomains
An array of subdomains in the domain name of the request.
#### xhr
A Boolean property that is true if the request’s X-Requested-With header field is “XMLHttpRequest”, indicating that the request was issued by a client library such as jQuery


