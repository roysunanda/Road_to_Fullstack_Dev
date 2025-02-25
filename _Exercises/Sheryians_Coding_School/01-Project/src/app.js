import path from "path";
import express from "express";
import morgan from "morgan";

import { userModel, validateModel } from "./models/user.model.js";
import { dummyUsers } from "./data/dummyData.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join("views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("public")));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("working!");
});

app.get("/data", async (req, res) => {
  const data = await userModel.find({});
  res.send(data);
});

// app.get("/upload", async (req, res) => {
//   const data = await userModel.insertMany(dummyUsers);
//   res.send(data);
// });

// app.get("/user", async (req, res) => {
//   const data = await userModel.find({ name: { $regex: /th$/i } });
//   res.send(data);
// });

// app.post("/create", (req, res) => {
//   const { username, name, password, age, email } = req.body;
//   const msg = validateModel({ username, name, password, age, email });
//   // console.log(msg.error.message);
//   res.json({ status: msg });
// });

export { app };
