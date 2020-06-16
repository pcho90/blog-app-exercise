const { Schema, model } = require('mongoose');

const Post = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imgUrl: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true }
);

module.exports = model('posts', Post);
