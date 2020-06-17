const Comment = require('../models/comment');
const Post = require('../models/post');

const db = require('../db/connection');

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const getComments = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const comments = await Comment.find({ post: id });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();

    const post = await Post.findOne({ _id: req.body.post });
    await post.updateOne({ comments: [...post.comments, comment] });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, comment) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!comment) {
        return res.status(404).json({ message: 'Could not find comment.' });
      }
      res.status(200).json(comment);
    }
  );
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndDelete(id);
    if (comment) {
      return res.status(200).send('Comment deleted');
    }
    res.status(404).json({ message: 'Could not find comment.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment
};
