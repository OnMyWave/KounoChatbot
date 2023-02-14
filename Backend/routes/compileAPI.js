const fs = require('fs');
const cmd = require('node-cmd');
var express = require('express'); 
var router = express.Router();

router.get('/', async (req, res) => {
    const code = req.query['0'];
    fs.writeFile('./text/text.ino', code, 'utf8', function(error){});
    cmd.run(
        'arduino-cli compile -b arduino:avr:uno /Users/onmywave/Desktop/Github/Kounosoft/Backend/text',
        function(err, data, stderr){
            res.send(data)
    }
);
});

module.exports = router; 