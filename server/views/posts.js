const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Post, validatePost } = require('../models/post');

// Get all of users posts
router.get('/me', auth, async (req, res) => {
    let posts = await Post.find({ userID: req.user._id }).sort('-dateCreated');

    res.status(200).send(posts);
});

// Make a new post
router.post('/', auth, async (req, res) => {
    const { error } = validatePost(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Insert the new post
    let post = new Post({
        body: req.body.body,
        userID: req.user._id,
    });

    await post.save();

    // Return the new post in the response
    res.send(post);
});

module.exports = router;