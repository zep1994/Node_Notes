const express = require('express')

module.exports = function(options={}) { //Router Factory
  const router = express.Router()

  //Get Controller
  const {service} = options

  router.get('/greet', (req, res, next) => {
    res.end(service.createGreeting(req.query.name || 'Stranger')
    )
  })
  return router
}
