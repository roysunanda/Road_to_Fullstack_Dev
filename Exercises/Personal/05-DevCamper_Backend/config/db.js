import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect(
    `${process.env.MONGO_URI}/${process.env.DB_NAME}`
  );
  console.log(`MongoDB connected: ${connect.connection.host}`.cyan.bold);
};

export { connectDB };
