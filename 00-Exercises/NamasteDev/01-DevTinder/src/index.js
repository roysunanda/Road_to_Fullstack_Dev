import dotenv from "dotenv";

import { app } from "./app.js";
import { connectDB } from "./config/connectDB.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`\nServer is listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(`\nServer connection failed!! \nError: ${error}`);
  }
};

startServer();
