import mongoose, { Schema } from "mongoose";
import validate from "validator";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: { type: String },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      validate(val) {
        if (!validate.isIn(val, ["male", "female"])) {
          throw new Error("Use correct gender type.");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "https://picsum.photos/200",
    },
    about: {
      type: String,
      default: "This is default value.",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
