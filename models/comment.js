const { Schema, model } = require('mongoose');

const Comment = Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    post: { type: Schema.Types.ObjectId, ref: 'posts' }
  },
  { timestamps: true }
);

module.exports = model('comments', Comment);
