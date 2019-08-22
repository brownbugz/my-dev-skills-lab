var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);