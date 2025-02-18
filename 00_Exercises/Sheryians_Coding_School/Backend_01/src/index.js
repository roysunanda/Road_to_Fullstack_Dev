import { connectDB } from "./db/connect.db.js";
import { app } from "./app.js";

const PORT = 3000 || 5000;

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
