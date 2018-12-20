let express = require("express");
let app = express();
//Create a middle ware aplication which can be used with next() method 


// next method call the continuation of the program after that function in the below app.get()
app.get('/:id', (req, res, next) => {
    res.end("Hello World");

    console.log("req.app:\n");
    console.log(req.app);

    console.log("\n\nreq.baseUrl:\n");
    console.log(req.baseUrl);

    console.log("\n\nreq.body:\n");
    console.log(req.body);

    console.log("\n\nreq.cookies:\n");
    console.log(req.cookies);

    console.log("\n\nreq.fresh:\n");
    console.log(req.fresh);

    console.log("\n\nreq.hostname:\n");
    console.log(req.hostname);

    console.log("\n\nreq.ip:\n");
    console.log(req.ip);

    console.log("\n\nreq.ips:\n");
    console.log(req.ips);

    console.log("\n\nreq.method:\n");
    console.log(req.method);

    console.log("\n\nreq.originalUrl:\n");
    console.log(req.originalUrl);

    console.log("\n\nreq.params:\n");
    console.log(req.params);

    console.log("\n\nreq.path:\n");
    console.log(req.path);

    console.log("\n\nreq.protocol:\n");
    console.log(req.protocol);

    console.log("\n\nreq.query:\n");
    console.log(req.query);

    console.log("\n\nreq.route:\n");
    console.log(req.route);

    console.log("\n\nreq.secure:\n");
    console.log(req.secure);

    console.log("\n\nreq.signedCookies:\n");
    console.log(req.signedCookies);

    console.log("\n\nreq.stale:\n");
    console.log(req.stale);

    console.log("\n\nreq.subdomains:\n");
    console.log(req.subdomains);

    console.log("\n\nreq.xhr:\n");
    console.log(req.xhr);
});
app.listen(3000, () => console.log("listenning"));


/*
Output
-------
For url localhost:3030/1
> node Request.js
listenning
req.app:
{ [EventEmitter: app]
  _events: { mount: [Function: onmount] },
  _eventsCount: 1,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames],
  init: [Function: init],
  defaultConfiguration: [Function: defaultConfiguration],
  lazyrouter: [Function: lazyrouter],
  handle: [Function: handle],
  use: [Function: use],
  route: [Function: route],
  engine: [Function: engine],
  param: [Function: param],
  set: [Function: set],
  path: [Function: path],
  enabled: [Function: enabled],
  disabled: [Function: disabled],
  enable: [Function: enable],
  disable: [Function: disable],
  acl: [Function],
  bind: [Function],
  checkout: [Function],
  connect: [Function],
  copy: [Function],
  delete: [Function],
  get: [Function],
  head: [Function],
  link: [Function],
  lock: [Function],
  'm-search': [Function],
  merge: [Function],
  mkactivity: [Function],
  mkcalendar: [Function],
  mkcol: [Function],
  move: [Function],
  notify: [Function],
  options: [Function],
  patch: [Function],
  post: [Function],
  propfind: [Function],
  proppatch: [Function],
  purge: [Function],
  put: [Function],
  rebind: [Function],
  report: [Function],
  search: [Function],
  source: [Function],
  subscribe: [Function],
  trace: [Function],
  unbind: [Function],
  unlink: [Function],
  unlock: [Function],
  unsubscribe: [Function],
  all: [Function: all],
  del: [Function],
  render: [Function: render],
  listen: [Function: listen],
  request: IncomingMessage { app: [Circular] },
  response: ServerResponse { app: [Circular] },
  cache: {},
  engines: {},
  settings:
   { 'x-powered-by': true,
     etag: 'weak',
     'etag fn': [Function: generateETag],
     env: 'development',
     'query parser': 'extended',
     'query parser fn': [Function: parseExtendedQueryString],
     'subdomain offset': 2,
     'trust proxy': false,
     'trust proxy fn': [Function: trustNone],
     view: [Function: View],
     views: 'C:\\Users\\vmallidi\\Desktop\\Berkadia\\week 5\\views',
     'jsonp callback name': 'callback' },
  locals:
   { settings:
      { 'x-powered-by': true,
        etag: 'weak',
        'etag fn': [Function: generateETag],
        env: 'development',
        'query parser': 'extended',
        'query parser fn': [Function: parseExtendedQueryString],
        'subdomain offset': 2,
        'trust proxy': false,
        'trust proxy fn': [Function: trustNone],
        view: [Function: View],
        views: 'C:\\Users\\vmallidi\\Desktop\\Berkadia\\week 5\\views',
        'jsonp callback name': 'callback' } },
  mountpath: '/',
  _router:
   { [Function: router]
     params: {},
     _params: [],
     caseSensitive: false,
     mergeParams: undefined,
     strict: false,
     stack: [ [Layer], [Layer], [Layer] ] } }
req.baseUrl:
req.body:
undefined
req.cookies:
undefined
req.fresh:
false
req.hostname:
localhost
req.ip:
::1
req.ips:
[]
req.method:
GET
req.originalUrl:
/1
req.params:
{ id: '1' }
req.path:
/1
req.protocol:
http
req.query:
{}
req.route:
Route {
  path: '/:id',
  stack:
   [ Layer {
       handle: [Function],
       name: '<anonymous>',
       params: undefined,
       path: undefined,
       keys: [],
       regexp: /^\/?$/i,
       method: 'get' } ],
  methods: { get: true } }
req.secure:
false
req.signedCookies:
undefined
req.stale:
true
req.subdomains:
[]
req.xhr:
false
*/
