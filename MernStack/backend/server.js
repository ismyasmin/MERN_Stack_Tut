// entry file for backend application 
require('dotenv').config(); // invoke config() - going to attach those envir vars to the process object
// register the express app
const express = require('express');

const workoutRoutes = require('./routes/workouts');
 
// starts up express app 
const app = express(); //  invoke function

//middleware
app.use(express.json()); // any request that comes in, it looks if it has some body to the request, some data that's sending to the server
                        // if it does, it passes it & attaches it to the request object so it can be accessed in the request handler
app.use((req,res,next) =>{ // logs out the requests coming in
    console.log("req path: " + req.path + " req method:" + req.method);
    next();
}) // have to run function next in order to move onto the next middleware (e.g ap..get('/'))

// routes
app.use('/api/workouts', workoutRoutes); //  when this reuqest is fired, use routes in workoutRoutes

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('PORT from .env:', process.env.PORT);
    console.log('listening on port 4000');
});

process.env