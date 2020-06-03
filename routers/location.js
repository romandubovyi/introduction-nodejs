const express = require('express');

const router = express.Router();

const locationStorage = {
    locations: []
};

router.post('/add-post', (req, res, next) => {
    locationStorage.locations.push({
        id: Math.random(),
        title: req.body.title,
        description: req.body.description
    });
    res.json({message: 'Stored post!'});
});

router.get('/posts', (req, res, next) => {});

module.exports = router;
