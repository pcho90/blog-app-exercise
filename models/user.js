const { Schema, model } = require('mongoose');

const User = new Schema({
  username: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = model('users', User);
