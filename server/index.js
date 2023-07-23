const express = require('express');
const app = express();

/*
TODO:
- Implement the JWT authentication - send the token in the header upon login or registration.
- Implement the authorization - check if the user is authorized to perform certain actions - This will be a 
middleware function that will be called before the route handler.
- Implement Winston for propper error logging.
- Implement the error middleware function.
*/

// Call our startup functions
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on port " + port + "...");
})