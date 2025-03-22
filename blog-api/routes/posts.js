const express = require('express');
const router = express.Router();
const { createPostValidator } = require('../middlewares/validators/validate');

router.post('/posts', createPostValidator, validate, (req, res) => {
    const { title, content, author } = req.body;

    res.status(201).json({ message: 'Post created successfully', post: req.body });
});