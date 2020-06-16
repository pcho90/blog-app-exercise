const { Schema, model } = require('mongoose');

const User = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }]
});

module.exports = model('users', User);
