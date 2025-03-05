import path from "path";
import express from "express";
import morgan from "morgan";

import { userModel } from "./models/user.model.js";

const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.join("views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(express.static(path.resolve("public")));

app.use(morgan("tiny"));

// app.get("/data", async (req, res) => {
//   const data = await userModel.find({});
//   res.send(data);
// });

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

app.get("/", (req, res) => {
  res.send("working!");
});

app.post("/create", async (req, res) => {
  try {
    const userData = await userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.json({
      success: true,
      msg: userData,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/:username/create/post", async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.params.username });
    user.posts.push({ content: "hey, my name is also sandy." });
    await user.save();

    res.json({
      success: true,
      msg: user,
    });
  } catch (error) {
    console.log(error);
  }
});

export { app };
