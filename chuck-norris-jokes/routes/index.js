var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {

  request("https://api.chucknorris.io/jokes/categories", function(err, response, body) {

    res.render('index', { 
      title: 'Express', 
      joke: '',
    categories: JSON.parse(body)
    });
  });
});

router.get('get-joke', function (req, res) {
  request("https://api.chucknorris.io/jokes/random", 
  function(err, response, body) {

    let joke = JSON.parse(body);

    res.render('index', {
      title: 'Express',
      joke
    });
  });
});

module.exports = router;
