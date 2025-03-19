const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: "Anonymous",
    },
}, { timestamps: true });

module.exports = mongoose.model('post', postSchema);