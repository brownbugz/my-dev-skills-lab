var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    }
});

var Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
