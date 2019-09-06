const Ticket = require('../models/ticket');

module.exports = {
    newTicket,
    addTicket  
}

function newTicket (req, res){
    flightId = req.params.id;
    Ticket.find({}, (e,tickets)=> {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets,
            flightId
        });
    });
}

function addTicket(req,res) {
    let id = req.params.id;
    req.body.flight = id;
    
    let ticket = new Ticket(req.body);
    ticket.save(err => {
        if (err) return; 
        res.redirect(`/flights/${id}`);
    });
}