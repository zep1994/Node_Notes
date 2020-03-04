const http = require('http')  //Loads HTTP Module

const host = '127.0.0.1'
const port = 3000

//Store Routes and create them for later use in a callback
let routes = {

  //INDEX ROUTE
  '/': function index(req, res) {
        res.writeHead(200)
        res.end('Hello, World!')
  },
  //FOO ROUTE
  '/foo': function foo (req, res) {
    res.writeHead(200)
    res.end('You are now viewing foo')
  }
}

//Create HTTP server
const server = http.createServer((req, res, next) => {

  if (req.url in routes) {
    return routes[req.url](req, res)
  }

  res.writeHead(404)
  res.end(http>STATUS_CODES[404])

  //Tell the server all of the response headers and body have sent
  res.end()
})

server.listen(process.env.PORT || port) //Tells which port to listen on
