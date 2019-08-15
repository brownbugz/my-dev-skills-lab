var Flight = require('../models/flight');

module.exports = {
    newFlight,
    index,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'flights#new'});
}

function create(req, res) {
    var flight = new Flight(req.body);
    
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights/new');
    });
}