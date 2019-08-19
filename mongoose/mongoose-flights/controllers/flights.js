var Flight = require('../models/flight');

module.exports = {
    newFlight,
    index,
    show,
    create,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) console.log(err);
        console.log(flights);
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Detail', flight});
    });
}

function create(req, res) {
    var flight = new Flight(req.body);
    console.log(flight);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

