import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.db.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

// With .then & .catch
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`\n🕐 Server is running at PORT ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(`\n⚠️ MongoDB connection error: ${error}`);
//   });

// with Async & Await
const startServer = async () => {
  try {
    await connectDB();
    // Handle app-level errors
    app.on("error", (error) => {
      console.log(`ERR: App Error: \n${error}`);
    });
    app.listen(PORT, () => {
      console.log(`\n🕐 Server is listening on PORT: ${PORT}`);
    });
    // Handle server-level errors
    app.on("error", (error) => {
      console.log(`ERR: Server failed to start: \n${error}`);
    });
  } catch (error) {
    console.log(`\n⚠️ MongoDB connection failed!! \n${error}`);
  }
};

startServer();
