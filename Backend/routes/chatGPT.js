const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '', // OpenAI API Key
});
const openai = new OpenAIApi(configuration);
var client_id = "" // NAVER Application Client ID
var client_secret = "" // NAVER Application Client Secret
var kounosoft_log = require('./dbConnection');
var express = require('express'); 
var router = express.Router();
var request = require('request');
const axios = require('axios');
const qs = require('querystring');

const TRANSLATE_METHODS = {
    nmt: 'nmt',
    smt: 'smt',
};

class Papago {
    constructor(config) {
        this.config = config;
    }

    async lookup(term, { method }) {
        if (this.config == null) {
            throw new Error('Papago instance should be initialized with config first');
        } if (term == null) {
            throw new Error('Search term should be provided as lookup arguments');
        }

        const url = method === TRANSLATE_METHODS.smt ?
            'language/translate' : 'papago/n2mt';

        const params1 = qs.stringify({
            source: 'ko',
            target: 'en',
            text: term,
        });
      
        const params2 = qs.stringify({
          source: 'en',
          target: 'ko',
          text: term,
      });

        const config = {
            baseURL: 'https://openapi.naver.com/v1/',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'x-naver-client-id': client_id,
                'x-naver-client-secret': client_secret,
            },
        };
        if (this.config.LANGUAGE === 'ko'){
          const response = await axios.post(url, params1, config);
          return response.data.message.result.translatedText;
        }else{
          const response = await axios.post(url, params2, config);
          return response.data.message.result.translatedText;
        }
        

    }
}

router.get('/', async (req, res) => {
  const papago1 = new Papago({
      NAVER_CLIENT_ID: client_id,
      NAVER_CLIENT_SECRET: client_secret,
      LANGUAGE: 'ko',
  });
  const papago2 = new Papago({
    NAVER_CLIENT_ID: client_id,
    NAVER_CLIENT_SECRET: client_secret,
    LANGUAGE: 'en',
});
  
  const nmtResult = await papago1.lookup(req.query.message , { method: 'nmt' });
  const completion = await openai.createCompletion({
      model: "text-curie-001",
      prompt: nmtResult,
      max_tokens : 200
    });
  const nmtResult2 = await papago2.lookup(completion.data.choices[0].text , { method: 'nmt' });
  kounosoft_log.collection.insertOne(req.query)
  kounosoft_log.collection.insertOne({
    message: nmtResult2,
    type: 'chatbot',
    timestamp: new Date()
  })
  res.send(nmtResult2);
  
});
module.exports = router;

