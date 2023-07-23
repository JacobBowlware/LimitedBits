const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/limited-bits')
        .then(() => console.log("Connected to MongoDB..."));
}