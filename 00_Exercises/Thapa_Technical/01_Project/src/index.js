import dotenv from "dotenv";
dotenv.config();

// import { connectDB } from "./db/connect.db.js";
import { connectMySQL } from "./db/connect-mysql.db.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // await connectDB();
    await connectMySQL();
    app.listen(PORT, () => {
      console.log(`\nServer is listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(`\nServer connection failed!! \nError: ${error}`);
  }
};

startServer();
