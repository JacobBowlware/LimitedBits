const Joi = require('joi');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500,
        trim: true
    }
});

const Post = mongoose.model('Post', postSchema);

const validatePost = (post) => {
    const schema = Joi.object({
        body: Joi.string().min(5).max(500).required(),
    });

    return schema.validate(post);
}

module.exports.Post = Post;
module.exports.validatePost = validatePost;
module.exports.postSchema = postSchema;