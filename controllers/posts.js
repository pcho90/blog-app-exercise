const Post = require('../models/post');

const db = require('../db/connection');

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = { getPosts, createPost };
