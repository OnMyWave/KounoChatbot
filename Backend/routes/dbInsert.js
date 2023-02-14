var log = require('./dbConnection');
var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
  console.log(res);
  log.collection.insertOne({
    text: req.query.text,
    type: req.query.type,
    timestamp: req.query.timestamp
  })
  });
    

module.exports = router;