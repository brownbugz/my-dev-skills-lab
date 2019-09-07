const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    newTicket,
    addTicket  
}

function newTicket(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        Ticket.find({}, (err, tickets) => {
            res.render('tickets/new', {
                flight, 
                tickets
            })
        })
    })
}

function addTicket(req, res, next) {
    req.body.flight = req.params.id;
    var ticket = new Ticket(req.body);
    ticket.save((err) => {
        if (err) return res.render('flights'); 
            return next()
    });
}

