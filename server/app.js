const http = require('http')  //Loads HTTP Module

const HOST = '127.0.0.1'
const PORT = 3000

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

//Tell the Server to Listen
server.listen(PORT, HOST, ()=> {
  console.log(`I am listening on ${HOST}:${PORT}`) //Tells which port to listen on
})


//Display end of Transmission
server.on('end', () => {
  console.log('EOT (End of Transmission')
})

//When error occurs destroy it
server.on('error', () => {
  console.log(err)

  //Close connection after error
  server.destroy
})
