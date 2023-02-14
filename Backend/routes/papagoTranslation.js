
var express = require('express');
var router = express.Router();
var kounosoft_log = require('./dbConnection');
var client_id = ""
var client_secret = ""
router.get('/', function (req, res) { 
   var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
   var query = req.query.text;
   var request = require('request');
   var options = {
       url: api_url,
       form: {'source':'en', 'target':'ko', 'text':query},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    kounosoft_log.collection.insertOne({
      message: req.query.message,
      type: req.query.type,
      timestamp: req.query.time
    })
   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {

        body = JSON.parse(body);
        const translatedText = body.message.result.translatedText;
        res.send(translatedText);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
module.exports = router;