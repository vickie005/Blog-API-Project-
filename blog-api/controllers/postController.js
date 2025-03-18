// blog-api/controllers/postController.js
const getAllPosts = (req, res) => {
  res.status(200).json({ message: "Get all posts" });
};

const getSinglePost = (req, res) => {
  res.status(200).json({ message: `Get post with ID ${req.params.id}` });
};

const createPost = (req, res) => {
  res.status(201).json({ message: "Post created", data: req.body });
};

const updatePost = (req, res) => {
  res.status(200).json({ message: `Update post ${req.params.id}` });
};

const deletePost = (req, res) => {
  res.status(200).json({ message: `Delete post ${req.params.id}` });
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
