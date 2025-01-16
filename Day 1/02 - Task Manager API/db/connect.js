import mongoose from "mongoose";

const db_name = "TASK-MANAGER";

const connectDB = (url) => {
  return mongoose.connect(`${url}/${db_name}`);
};

export { connectDB };
