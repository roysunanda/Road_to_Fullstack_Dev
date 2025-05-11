import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
});

const postModel = mongoose.model("Post", postSchema);

export { postModel };
