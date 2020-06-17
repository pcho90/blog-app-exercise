const { Schema, model } = require('mongoose');

const User = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'comments ' }]
});

module.exports = model('users', User);
