const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { validatePost } = require("../middlewares/validatePost");
const { protect } = require("../middlewares/authMiddleware");


// Routes
router.get("/", postController.getPosts); 
router.post("/", postController.createPost);
router.get("/:id", postController.getPost);
router.put("/:id", postController.updatePost); 
router.delete("/:id", postController.deletePost); 

module.exports = router;
