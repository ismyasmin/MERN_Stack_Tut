const express = require('express');

const router = express.Router(); // creates an instance of the router

// attach handler to the router

// GET all workouts
router.get('/', (req, res) =>{
    res.json({mssg: 'GET all workouts'});
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'});

}) // : represents a route parameter whereby this can change

// POST a new workout to create one
router.post('/', (req, res) =>{
    res.json({mssg: 'POST a new workout'});
})

// DELETE a workout
router.delete('/:id', (req, res) =>{ // id of what's to be deleted
    res.json({mssg: 'DELETE a new workout'});
})

// UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'PATCH a new workout'});
})

// after creating routes, export to be used externally, then require all routes attached to it in server.js
module.exports = router
