const express = require('express');
const router = express.Router();

const Employee = require('../Model/Hotel_employee.model');

//Get
router.get('/', async(req, res, next) => {
    try {
        const result = await Employee.find({}, {__v: 0});
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Post
router.post('/', async(req, res, next) => {
    try {
        const employee = new Employee(req.body);
        const result = await employee.save();
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
        const result = await Employee.findByIdAndUpdate(id, update);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Delete
router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Employee.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;