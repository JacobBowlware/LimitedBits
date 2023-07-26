const express = require('express');
const users = require('../views/users');
const auth = require('../views/auth');
const posts = require('../views/posts');

// Set up all routes here
module.exports = (app) => {
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/posts', posts);
}
