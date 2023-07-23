const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, require: true, minlength: 3, maxlength: 30 },
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 1024
    }
})

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024)
    })

    return schema.validate(user);
}

module.exports.User = User;
module.exports.validateUser = validateUser;