// A simple micro service where in for every page visit we are maintaining a counter and displaying the number of time the user has visited the page as a microservice
const { send } = require('micro')
const url = require('url')

const visits = {}

module.exports = function (request, response) {
  const { pathname } = url.parse(request.url)

  if (visits[pathname]) {
    visits[pathname] = visits[pathname] + 1
  } else {
    visits[pathname] = 1
  }

  send(response, 200, `This page has ${visits[pathname]} visits!`)
}