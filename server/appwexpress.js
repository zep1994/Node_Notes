//Import the top-level function of express
const express = require('express')
const cors = require('cors') //Use cors for cross-origin sharing

//Creates an Express application using the top-level function
const app = express()

//Define port number as 3000
const PORT = process.env.PORT || 3000
const HOST = '127.0.0.1'

//Set Templating Engine
app.set('view engine', 'ejs')
app.set('views', 'src/views')

//Setup to use STATIC FILES
app.use(express.static(__dirname + '/public'))


//make use of cors
app.use(cors())

//INDEX ROUTE
app.get('/', (req, res, next) => {
  let info = {
    'string_value': 'Stack Overflow',
    'num': 1
  }
  res.json(info)
})

//The 404 ROUTE
app.get('*', function(req, res){
  res.render('error', {message: 'Page not found'});
});

//Make it listen on port 3000
app.listen(PORT, function(err) {
  if (!err) {
      console.log(`Server is listening on localhost:${PORT}`)
  } else {
    console.log(JSON.stringify(err))
  }
})
