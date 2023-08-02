const express = require('express');
const Joi = require('joi');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User } = require('../models/user');;

router.post('/login', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    const token = user.generateAuthToken();

    const headers = {
        'x-auth-token': token,
        'Access-Control-Expose-Headers': 'x-auth-token'
    };

    res.status(200)
        .set(headers)
        .send(_.pick(user, ['_id', 'username', 'email', 'icon']));
});


router.post('/verify-token', async (req, res) => {
    const token = req.body.token;
    try {
        const decodedToken = jwt.verify(token, config.get('jwtPrivateKey'));

        const user = await User.findById(decodedToken._id).select('-password');
        if (!user) {
            res.status(400).send('Invalid token');
        }

        res.status(200).send(user);
    } catch (error) {
        return res.status(400).send('Invalid token');
    }
});

const validateUser = (req) => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(255).required(),
    });

    return schema.validate(req);
}

module.exports = router;