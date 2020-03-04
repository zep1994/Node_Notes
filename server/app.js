const http = require('http')  //Loads HTTP Module

const host = '127.0.0.1'
const port = 3000

function index (req, res) {
  res.writeHead(200)
  res.end('Hello, World')
}

//Create HTTP server
const server = http.createServer((req, res, next) => {

  if (req.url === '/') {
    return index(req, res)
  }

  res.writeHead(404)
  res.end(http>STATUS_CODES[404])

  // //Tell browser everthing is okay and data is in plain text
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain'
  // })

  // //Write Hello to the page
  // res.write("hello")

  //Tell the server all of the response headers and body have sent
  res.end()
})

server.listen(port) //Tells which port to listen on
