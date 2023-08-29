const _ = require('lodash');
const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/user');
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');

router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');

    res.send(user);
});

router.post('/', async (req, res) => {
    // Validate the request body
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if this user already exists
    let user = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });
    if (user) return res.status(400).send("User already registered.");

    // Insert the new user if they do not exist yet
    user = new User(_.pick(req.body, ['username', 'email', 'password', 'icon']));
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    // Generate an auth token for the newly created user
    const token = user.generateAuthToken();

    // Return the token and the user in the response
    const headers = {
        'x-auth-token': token,
        'Access-Control-Expose-Headers': 'x-auth-token'
    };

    res.status(200).set(headers).send(_.pick(user, ['_id', 'username', 'email', 'icon']));
});


module.exports = router;