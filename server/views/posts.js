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

// Delete a post
router.delete('/:id', auth, async (req, res) => {
    // Check if the post exists
    let post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('The post with the given ID was not found.');

    // Check if the user is the owner of the post
    if (post.userID != req.user._id) return res.status(403).send('Access denied.');

    // Delete the post
    await Post.deleteOne({ _id: req.params.id });

    // Return the deleted post in the response
    res.send(post);
});

// Get last 50 posts for the feed
router.get('/feed', auth, async (req, res) => {
    let posts = await Post.find().sort('-dateCreated').limit(50);

    res.status(200).send(posts);
});

module.exports = router;