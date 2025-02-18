import mongoose, { Schema } from "mongoose";
import Joi from "joi";

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

function validateModel(data) {
  const joiSchema = Joi.object({
    username: Joi.string().trim().required(),
    name: Joi.string().required(),
    password: Joi.string().trim().lowercase().required(),
    age: Joi.number().min(18).required(),
    email: Joi.string().email().trim().required(),
  });
  return joiSchema.validate(data);
}

const userModel = mongoose.model("User", userSchema);

export { userModel, validateModel };
