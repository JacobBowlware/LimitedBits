const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Post, validatePost } = require('../models/post');
const { User } = require('../models/user');

// Get all of users posts
router.get('/me', auth, async (req, res) => {
    let posts = await Post.find({ userID: req.user._id }).sort('-dateCreated');

    // Must send the posts back in the format of an array of arrays
    // Each array in the array is a row of posts (5 posts per row)
    let postsArray = [];
    let tempArray = [];
    let count = 0;

    for (let i = 0; i < posts.length; i++) {
        if (count == 5) {
            postsArray.push([...tempArray]);
            tempArray = [];
            count = 0;
        }
        tempArray.push(posts[i]);
        count++;
    }

    if (tempArray.length > 0) {
        postsArray.push([...tempArray]);
    }

    res.status(200).send(postsArray);
});

// Make a new post
router.post('/create', auth, async (req, res) => {
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
    console.log("Deleting post: " + req.params.id)

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
    let posts = await Post.find().sort('dateCreated').limit(50);

    let postsArray = [];
    let tempArray = [];
    let count = 0;
    for (let i = 0; i < posts.length; i++) {
        if (count == 5) {
            postsArray.push([...tempArray]);
            tempArray = [];
            count = 0;
        }
        tempArray.push(posts[i]);
        count++;
    }

    if (tempArray.length > 0) {
        postsArray.push([...tempArray]);
    }

    try {
        for (let i = 0; i < postsArray.length; i++) {
            for (let j = 0; j < postsArray[i].length; j++) {
                let user = await User.findById(postsArray[i][j].userID);
                postsArray[i][j]["username"] = user.username;
                postsArray[i][j]["icon"] = user.icon;
                postsArray[i][j].testData = "Test Data"
            }
        }

        res.status(200).send(postsArray);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;