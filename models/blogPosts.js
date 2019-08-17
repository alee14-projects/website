const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    postID: String,
    postTitle: String,
    postText: String,
    postAuthor: String,
    postCreationDate: Date,
    postLatestEditDate: Date,
    postTags: Array
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;