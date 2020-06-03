const express = require('express');

const router = express.Router();

const postStorage = {
    posts: []
};

router.post('/add-post', (req, res, next) => {
    const id = Math.random();
    postStorage.posts.push({
        id: Math.random(),
        title: req.body.title,
        description: req.body.description
    });
    res.json({message: 'Stored post!', postId: id});
});

router.get('/post/:pid', (req, res, next) => {
    const postId = +req.params.lid;
    const post = locationStorage.posts.find(post => {
        return post.id === postId;
    });
    if (!post) {
        return res.status(404).json({ message: 'Not found!' });
    }
    res.json({ title: post.title, description: post.description });
});

module.exports = router;
