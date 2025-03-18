const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// Routes
router.put("/:id", updatePost); 
router.get("/", getAllPosts); 
router.get("/:id", getSinglePost); 
router.post("/", createPost);
router.delete("/:id", deletePost); 

module.exports = router;
