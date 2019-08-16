var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

//path
router.post('/movies/:id/reviews', reviewsCtrl.create);

module.exports = router;