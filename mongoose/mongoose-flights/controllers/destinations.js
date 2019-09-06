const Destination = require('../models/flight');

module.exports = {
    create
}

function create(req,res) {
    Destination.findById(req.params.id, function (err, destination) {
        for (let key in req.body){
            if(req.body[key] === '') delete req.body[key];
        };
       destination.destinations.push(req.body);
        destination.save((err)=> {
            res.redirect(`/flights/${destination._id}`);
        })
    });
}