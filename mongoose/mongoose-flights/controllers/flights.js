var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    newFlight,
    index,
    show,
    create,
    deleteFlight,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) console.log(err);
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function show(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show',{flight, tickets})
            });
        });
    }


function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${flight._id}`);
    });
}

function deleteFlight(req, res) {
    Flight.deleteOne({_id: req.params.id}, function(err) {
        res.redirect('/flights');
    });
}


