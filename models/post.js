const { Schema, model } = require('mongoose');

const Post = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    author: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = model('posts', Post);
