var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.post('/flights', ticketsCtrl.create);
router.delete('/flights/:id', ticketsCtrl.delete);

module.exports = router;