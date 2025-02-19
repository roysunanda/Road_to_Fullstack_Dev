import mongoose from "mongoose";

const MongoDB_URL =
  "mongodb+srv://sandy:54ndY1993@big-projects.1lnvo.mongodb.net";
const DB_name = "Backend-Test";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MongoDB_URL}/${DB_name}`
    );
    console.log(
      `\nMongoDB connected!! \nDB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`\nMongoDB connection failed!! \nError: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
