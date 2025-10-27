const Workout = require('../models/workoutModel'); // workout model - to interact with the database 
const mongoose = require('mongoose');
// get all workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}); // in desecnding order;  newest ones at the top

    res.status(200).json(workouts);
}


// get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params; // getting id by destructuring, all route parameters are stored in a params property

    if(!mongoose.Types.ObjectId.isValid(id)) { //sees if id is not valid
        return res.status(404).json({error: 'No such workout'});
    }

    const workout = await Workout.findById(id);

    if(!workout) {
        return res.status(404).json({error: 'No such workout'});
    }

    res.status(200).json(workout);
}

// create a workout 
const createWorkout = async (req,res) =>{
    const {title, reps, load} = req.body; // grabbing the properties from the request body
    
    // add document to db
    try {
        // represents document created
        const workout = await Workout.create({title, reps, load}); // asynchronous - create a new workout
        res.status(200).json(workout); // json sent back is the workout document
    }catch (err){
        res.status(400).json({error: err.message});
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params; // getting id by destructuring, all route parameters are stored in a params property

    if(!mongoose.Types.ObjectId.isValid(id)) { //sees if id is not valid
        return res.status(404).json({error: 'No such workout'});
    }

    // find document & delete it where the _id is equal to id then returns a response which is the document that was deleted
    const workout = await Workout.findOneAndDelete({i_id: id}) /// in mongoDB the property name _id 

    if(!workout) {
        return res.status(404).json({error: 'Workout not found'});
    }

    res.status(200).json(workout);
}


// update a workout

const updatedWorkout = async (req,res) => {
    const {id} = req.params; // getting id by destructuring, all route parameters are stored in a params property

    if(!mongoose.Types.ObjectId.isValid(id)) { //sees if id is not valid
        return res.status(404).json({error: 'No such workout'});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
          // represents the id that will be updated - get the properties that is sent on the body is using the request.body 
          // since req is an object, need to spread the properties of that object, it would be spread onto this new object {..req.body}
          // whatever properties are on the body will be outputted in this update object {..req.body} & update those on that particular document
        ...req.body
    })

    if(!workout) {
        return res.status(404).json({error: 'No such workout'});
    }

    res.status(200).json(workout);

}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updatedWorkout
}