//Import the top-level function of express
const express = require('express')
const greetMiddleWare = require('./greet.js')

//Creates an Express application using the top-level function
const app = express()

//Define port number as 3000
const port = 3000


//Create Greeting Class
class GreetingService {
  constructor(greeting = 'Hello') {
    this.greeting = greeting
  }

  //create greeting call
  createGreeting(name) {
    return `${this.greeting}, ${name}`
  }
}

express()
  .use('/api/v1/service1', greetMiddleWare({
    service: new GreetingService('Hello'),
  }))
  .use('/api/v1/service2', greetMiddleWare({
    service: new GreetingService('Hi')
  })).listen(8000)

//Routes the HTTP GET requests to specified path '/' with the specified callback function
app.get('/', (req, res, next) => {
  res.send('Hello World')
})

//Make it listen on port 3000
app.listen(port, function() {
  console.log(`Server is listening on localhost:${port}`)
})
