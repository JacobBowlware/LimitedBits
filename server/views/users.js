const user = 0;
const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/user');

router.get('/', async (req, res) => {
    res.send("Hello World!");
});

router.post('/', async (req, res) => {
    console.log("Creating a new user...");
    res.send(400).send("Bad Request");
});


module.exports = router;