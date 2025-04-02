import path from "path";
import express from "express";
import morgan from "morgan";

import { userModel } from "./models/user.model.js";
import { postModel } from "./models/post-model.js";

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
    let userData = await userModel.create({
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
    let user = await userModel.findOne({ username: req.params.username });
    let createPost = await postModel.create({
      content: req.body.data,
      user: user._id,
    });

    user.posts.push(createPost._id);
    await user.save();

    res.json({
      success: true,
      msg: { user, createPost },
    });
  } catch (error) {
    console.log(`\n\n${error}`);
  }
});

app.get("/posts", async (req, res) => {
  try {
    let posts = await postModel.find().populate("user");
    res.json({
      success: true,
      msg: posts,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    let users = await userModel.find().populate("post");
    res.json({
      success: true,
      msg: users,
    });
  } catch (error) {
    console.log(error);
  }
});

export { app };
