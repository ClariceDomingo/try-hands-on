const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hotel_employeeSchema = new Schema({
    employee: {
        fname: {
            type: String,
            required: true
        },
        mname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        employee_number: {
            type: Number,
            required: true
        },
    }
});

const Hotelemployee = mongoose.model('Hotel_employee', Hotel_employeeSchema);
module.exports = Hotelemployee;