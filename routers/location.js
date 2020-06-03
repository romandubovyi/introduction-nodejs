const express = require('express');

const router = express.Router();

const locationStorage = {
    locations: []
};

router.post('/add-post', (req, res, next) => {
    const id = Math.random();
    locationStorage.locations.push({
        id: Math.random(),
        title: req.body.title,
        description: req.body.description
    });
    res.json({message: 'Stored post!', postId: id});
});

router.get('/posts', (req, res, next) => {});

module.exports = router;
