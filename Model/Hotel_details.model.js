const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hotel_detailsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    time: {
        open: {
            type: String,
            required: true
        },
        close: {
            type: String,
            required: true
        }
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

const Hoteldetails = mongoose.model('Hotel_details', Hotel_detailsSchema);
module.exports = Hoteldetails;