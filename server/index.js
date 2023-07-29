const winston = require('winston');
const express = require('express');
const cors = require('cors');
const app = express();

// Call our startup functions
require('./startup/logging')();
require('./startup/cors')(app);
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
    console.log("Server is running on port " + port + "...");
})