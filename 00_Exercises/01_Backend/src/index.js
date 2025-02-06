import dotenv from "dotenv";
import { connectToMongoDB } from "./db/connect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectToMongoDB();
    app.listen(PORT, () => {
      console.log(`\nServer is listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(`\nMongoDB connection failed!! \nError: ${error}`);
  }
};

startServer();
