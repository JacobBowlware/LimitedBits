const express = require('express');
const users = require('../views/users');

// Set up all routes here
module.exports = (app) => {
    app.use(express.json());
    app.use('/api/users', users);
}
