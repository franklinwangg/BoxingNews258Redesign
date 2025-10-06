const { Router } = require("express");
const postController = require("../controllers/PostController.cjs");

const router = Router();
router.get("/", postController.getAllPosts);
router.post("/", postController.createPost);
router.get("/:postId/comments", postController.getComments);
router.post("/:postId/comments", postController.addComment);

module.exports = router;
