var express = require('express')
var router = express.Router()

var ratsDb = require('../db/rats')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  ratsDb.getRats(db)
    .then(rats => {
      res.json(rats)
    })
})

module.exports = router
