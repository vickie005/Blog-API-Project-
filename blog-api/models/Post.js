const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.objectId,
      ref: "User",
      required: true,
        },
        category: {
        type: String,
        },
        tags: {
            type:[String],
        },
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', postSchema);