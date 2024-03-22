const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('test');
});

const url = "mongodb://localhost:27017/hotels"

const Hoteldetails = require('./Routes/Hotel_details.route');
app.use('/details', Hoteldetails);

const Hotelreservation = require('./Routes/Hotel_reservation.route');
app.use('/reservation', Hotelreservation);

const Hotelemployee = require('./Routes/Hotel_employee.route');
app.use('/employee', Hotelemployee); 



mongoose.connect(url, {})
.then(result => console.log('Database is Connected'))
.catch(err => console.log(err));

app.listen(3000, () => console.log('Listening to port 3000......'));