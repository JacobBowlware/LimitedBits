const winston = require('winston');
const express = require('express');
const app = express();

/*
TODO:
- Implement the JWT authentication - send the token in the header upon login or registration - DONE
- Implement Login API - DONE
- Implement the authorization - check if the user is authorized to perform certain actions - This will be a 
middleware function that will be called before the route handler - DONE
- Implement Winston for propper error logging - DONE
- Implement the error middleware function - DONE
- Implement routes for users Bit's:
    * Creating Bits (Posting a new Bit) - DONE
    * Deleting Bits - DONE
    * Retrieving all of users Bits - DONE
    * Retrieving last 50 posted Bits for Feed - DONE
*/

// Call our startup functions
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

app.use((err, req, res, next) => {
    // Log the error using Winston
    winston.error(err.message, err);

    // Respond to the client with an appropriate error message
    res.status(500).send('Something failed.');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    winston.info("Server is running on port " + port + "...");
})