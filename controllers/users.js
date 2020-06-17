const User = require('../models/user');
const Post = require('../models/post');

const db = require('../db/connection');

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signInUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && user.password === password) {
      return res.json(user);
    }
    res.status(403).json({ message: 'could not sign in' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Post.find({ user: id });
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ message: 'could not find user.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, req.body, { new: true }, (error, user) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!user) {
      return res.status(404).json({ message: 'Product not found!' });
    }
    res.status(200).json(user);
  });
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Product.findByIdAndDelete(id);
    if (user) {
      return res.status(200).send('User deleted');
    }
    throw new Error('Product not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  signInUser,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
