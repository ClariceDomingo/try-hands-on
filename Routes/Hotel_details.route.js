const express = require('express');
const router = express.Router();

const Details = require('../Model/Hotel_details.model');

//Get
router.get('/', async(req, res, next) => {
    try {
        const result = await Details.find({}, {__v: 0});
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Post
router.post('/', async(req, res, next) => {
    try {
        const details = new Details(req.body);
        const result = await details.save();
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
        const result = await Details.findByIdAndUpdate(id, update);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Delete
router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Details.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;