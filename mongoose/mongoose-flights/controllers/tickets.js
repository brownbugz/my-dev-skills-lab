const Ticket = require('../models/ticket');

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

function addTicket(req,res) {
    Flight.findById(req.params.id, (err, flight) => {
        var ticket = new Ticket(req.body);
            ticket.save((err) => {
            if (err) return; 
            res.redirect(`/flights/${flight._id}`);
        });
    });
}