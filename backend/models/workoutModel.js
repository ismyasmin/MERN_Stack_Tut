const mongoose = require('mongoose'); // mongoose allows to create models & schemas

const Schema = mongoose.Schema; // function to create a new schema

const workoutSchema = new Schema({ // creates a new schema, first argu: passing an object where we define this schema
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true}); // second argu: automatically generates time stamp properties when a workout is created or updated

// models apply that schema to a partical mdoel then use that model to interact with a collection of that name
module.exports = mongoose.model('Workout', workoutSchema);
