const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createPostValidator } = require('../middlewares/validators/validate');
const validate = require('../middlewares/validators/validate');
const postController = require('../controllers/postController');

// create post - protected
router.post('/', authMiddleware, createPostValidator, validate, postController.createPost);

// update post - protected
router.put('/:id', authMiddleware, updatePostValidator, validate, postController.updatePost);

//delete post - protected
router.delete('/:id', authMiddleware, postController.deletePost);

// get all posts (public)
router.get('/:id', postController.getAllPosts);

//get single post (public)
router.get('/:id', postController.getPostById);

module.exports = router;