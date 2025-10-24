// entry file for backend application 
require('dotenv').config(); // invoke config() - going to attach those envir vars to the process object
// register the express app
const express = require('express');
 
// starts up express app 
const app = express(); //  invoke function

//middleware
app.use((req,res,next) =>{ // logs out the requests coming in
    console.log("req path: " + req.path + " req method:" + req.method);
    next();
}) // have to run function next in order to move onto the next middleware (e.g ap..get('/'))

// routes
// react to requests - set up a route handler
app.get('/', (req,res) => {
    console.log('GET / request received');
    res.json({mssg: 'Welcome to the app'}) // sends json string, property called mssg
}) // once it goes into domain, then fire a function which is gonna handle that request

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('PORT from .env:', process.env.PORT);
    console.log('listening on port 4000');
});

process.env