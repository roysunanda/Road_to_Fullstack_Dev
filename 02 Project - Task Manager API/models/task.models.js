import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    maxlength: [20, "name can't be more than 20 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const Task = mongoose.model("Task", TaskSchema);
