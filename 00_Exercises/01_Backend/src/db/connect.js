import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `\nMongoDB connected!! \nDB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`\nMongoDB connection Error: ${error}`);
    process.exit(1);
  }
};

export { connectToMongoDB };
