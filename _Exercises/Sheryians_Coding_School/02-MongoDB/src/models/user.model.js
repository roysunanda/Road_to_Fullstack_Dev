import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  posts: [
    {
      content: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const userModel = mongoose.model("User", userSchema);

export { userModel };
