import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\n🕐 Server is running at PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`\n⚠️ MongoDB connection error: ${error}`);
  });
