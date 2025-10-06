// | Route                   | Description   |
// | ----------------------- | ------------- |
// | `GET /api/posts`        | Get all posts |
// | `POST /api/posts`       | Create a post |

// | Route                              | Description             |
// | ---------------------------------- | ----------------------- |
// | `GET /api/posts/:postId/comments`  | Get comments for a post |
// | `POST /api/posts/:postId/comments` | Add a comment           |

const Post = require("../models/Post.cjs");

// GET /api/posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll(); // Sequelize syntax
    res.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

// POST /api/posts
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
};

// GET /api/posts/:postId/comments
exports.getComments = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.findAll({ where: { postId } });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

// POST /api/posts/:postId/comments
exports.addComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { content } = req.body;

    // Optional: check if post exists
    const post = await Post.findByPk(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const comment = await Comment.create({ content, postId });
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add comment" });
  }
};
