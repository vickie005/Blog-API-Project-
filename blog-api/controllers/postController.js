const Post = require('../models/Post');

// Create Post
exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      ...req.body,
      author: req.user.userId,
    });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// Get all posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find(); 
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

// Get single post
exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// Update Post
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    //Author-only check
    if (post.author.toString() !== req.user, userId) {
      return res.status(404).json({ message: "You are not allowed to edit this post" });
    }
    post.tittle = req.body.title || post.tittle;
    post.content = req.body.content || post.content;
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// Delete Post
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // author only check
    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({ message: "You are not allowed to delete this post" });
    }

    await post.remove();
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    next(err);
  }
};
