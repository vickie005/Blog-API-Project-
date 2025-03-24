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

// Get all posts(with pagination, search, category & tags)
exports.getPosts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '', category, tags } = req.query;

    const query = {};

    // search by title or content
    if (search) {
      query.$or = [
        { tittle: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    // filter by category
    if (category) {
      query.category = category;
    }

    // filter by tags (comma-separated)
    if (tags) {
      const tagsArray = tags.split('.');
      query.tags = { $in: tagsArray };
    }
     // Pagination & Sorting
    const posts = await Post.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const totalPosts = await Post.countDocuments(query);

    res.status(200).json({
      total: totalPosts,
      page: parseInt(page),
      limit: parseInt(limit),
      posts,
    });

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
    post.category = req.body.category || post.category;
    post.tags = req.body.tags || post.tags;

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
