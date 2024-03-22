const express = require('express');
const router = express.Router();

const Reservation = require('../Model/Hotel_reservation.model');

//Get
router.get('/', async(req, res, next) => {
    try {
        const result = await Reservation.find({}, {__v: 0});
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Post
router.post('/', async(req, res, next) => {
    try {
        const reserve = new Reservation(req.body);
        const result = await reserve.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Patch
router.patch('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const result = await Reservation.findByIdAndUpdate(id, update);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Delete
router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Reservation.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;