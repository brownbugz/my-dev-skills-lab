var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


router.get('/', flightsCtrl.index);
// /* GET /flights/new */
router.get('/new', flightsCtrl.newFlight);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.show);


module.exports = router;
