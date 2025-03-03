import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isMarried: {
    type: Boolean,
  },
  email: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

export { userModel };
