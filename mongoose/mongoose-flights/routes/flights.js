var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


router.get('/', flightsCtrl.index);
// /* GET /flights/new */
router.get('/new', flightsCtrl.newFlight);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.delete('/:id', flightsCtrl.deleteFlight);


module.exports = router;
