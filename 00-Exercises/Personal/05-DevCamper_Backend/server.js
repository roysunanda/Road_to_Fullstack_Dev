import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";

import { router } from "./routes/bootcamps.route.js";
import { connectDB } from "./config/db.js";
// import { logger } from "./middlewares/logger.js";

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", router);

const server = app.listen(PORT, () => {
  connectDB();
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`error: ${err.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});
