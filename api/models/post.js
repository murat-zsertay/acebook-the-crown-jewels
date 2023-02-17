const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const {CommentSchema} = require("./comment");
const {LikeSchema} = require("./likes");

const PostSchema = new mongoose.Schema({
  user_id: String,
  message: { type: String, required: [true, 'required'] },
  comments: [{type: CommentSchema}],
  likes: [{type: LikeSchema}]
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
