const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req,res) {
    Flight.findById(req.params.id, function (err, flight) {
        for (let key in req.body){
            if(req.body[key] === '') delete req.body[key];
        };
       flight.destinations.push(req.body);
        flight.save((err)=> {
            res.redirect(`/flights/${flight._id}`);
        })
    });
}