import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!! \n DB host: ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection failed!! \n Error: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
