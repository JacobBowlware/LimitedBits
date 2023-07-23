const mongoose = require('mongoose');

// Connect to MongoDB database 'limited-bits'
module.exports = () => {
    mongoose.connect('mongodb://localhost/limited-bits')
        .then(() => console.log("Connected to MongoDB..."));
}