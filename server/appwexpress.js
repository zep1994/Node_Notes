//Import the top-level function of express
const express = require('express')
const greetMiddleWare = require('./greet.js')

//Creates an Express application using the top-level function
const app = express()

//Define port number as 3000
const PORT = 3000
const HOST = '127.0.0.1'

//Set Templating Engine
app.set('view engine', 'ejs')
app.set('views', 'src/views')

//Routes the HTTP GET requests to specified path '/' with the specified callback function
app.get('/', (req, res, next) => {
  res.render('index', {title: "Title",
                       supplies: [
                         1,2,4,5,6,434,24,435,435,43,45
                       ]})
})

//Make it listen on port 3000
app.listen(PORT, function(err) {
  if (!err) {
      console.log(`Server is listening on localhost:${PORT}`)
  } else {
    console.log(JSON.stringify(err))
  }
})
