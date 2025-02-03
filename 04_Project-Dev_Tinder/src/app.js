import express from "express";

import { userModel as User } from "./models/user.model.js";

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(`user added successfully!`);
  } catch (error) {
    res.status(400).send(`Something went wrong!`);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(`Something went wrong!`);
  }
});

export { app };
