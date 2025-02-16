import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  name: String,
  password: String,
  age: Number,
  isMarried: Boolean,
  email: String,
});

const userModel = mongoose.model("User", userSchema);

export { userModel };
