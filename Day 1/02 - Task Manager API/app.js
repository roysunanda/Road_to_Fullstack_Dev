import express from "express";
import { router } from "./routers/tasks.routers.js";
import { connectDB } from "./db/connect.js";
import { notFound } from "./middleware/not_found.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;
const tasks = router;

app.use(express.static("./public"));
app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.status(200).send(`<h1>Task Manager App</h1>`);
// });

app.use("/api/v1/tasks", tasks);
app.use(notFound);

// app.all("*", (req, res) => {
//   res.status(404).send(`<h1> Invalid Page!!</h1>`);
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log(`\n✅ MongoDB Connected!!`);
    app.listen(PORT, console.log(`🌐 server is listening on port ${PORT}`));
  } catch (error) {
    console.log(`\nMongoDB connection Error: ${error}`);
    process.exit(1);
  }
};

start();
