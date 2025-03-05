import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${process.env.DB_NAME}`
    );
    console.log(
      `\nMongoDB connected!! \nDB host: ${connectionInstance.connection.host}`
    );
    // console.log(`\n\n${connectionInstance.connection.name}`);
  } catch (error) {
    console.log(`\nMongoDB connection failed!! \nError: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
