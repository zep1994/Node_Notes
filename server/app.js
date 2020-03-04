const http = require('http')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res, next) => {
  res.write("hello")
})

server.listen(port)
