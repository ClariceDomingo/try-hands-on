const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const Hotel_reservationSchema = new Schema ({
    date: {
        type: Date,
        required: true,
    },
    occasion: {
        type: String,
        required: true,
    },
    numberofGuest: {
        type: Number,
        required : true,
    },
    time: {
        arrival: {
            type: String,
            required:true,
        },
        departure: {
            type: String,
            require:true,
        }
    },

    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

const Hotelreservation = mongoose.model('hotel_reservation', Hotel_reservationSchema);
module.exports = Hotelreservation;