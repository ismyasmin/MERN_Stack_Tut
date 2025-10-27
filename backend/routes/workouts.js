const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updatedWorkout
} = require('../controllers/workoutController');

const router = express.Router(); // creates an instance of the router

// attach handler to the router

// GET all workouts 
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout) // : represents a route parameter whereby this can change

// POST a new workout to create one
router.post('/', createWorkout);  


// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updatedWorkout);

// after creating routes, export to be used externally, then require all routes attached to it in server.js
module.exports = router;
