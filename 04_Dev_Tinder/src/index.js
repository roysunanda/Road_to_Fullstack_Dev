import dotenv from "dotenv";

import { app } from "./app.js";
import { connectDB } from "./db/index.db.js";

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
    console.log(`\nMongoDB connection failed!! \nError: ${error}`);
  }
};

startServer();
