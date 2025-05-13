import express from "express";

import { userModel as User } from "../models/user.model.js";

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  // const user = new User(req.body);
  try {
    // await user.save();
    const userData = await User.insertOne(req.body);
    // res.status(200).send(`user added successfully!`);
    res.status(200).json({ success: true, data: userData });
  } catch (error) {
    // res.status(400).send(`Something went wrong!`);
    res.status(400).json({ msg: error.message });
  }
});

app.post("/signupMany", async (req, res) => {
  // console.log(req.body);
  // const user = new User(req.body);
  try {
    // await user.save();
    // res.status(200).send(`user added successfully!`);
    const usersData = await User.insertMany(req.body);
    // res.status(200).send(`user added successfully!`);
    res.status(200).json({ success: true, data: usersData });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    // console.log(users.length);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(`Something went wrong!`);
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await User.findOne({ emailId: req.body.email });
    if (!user) {
      return res.status(404).send(`user not found`);
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(`Something went wrong!`);
  }
});

app.get("/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(`Something went wrong!`);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    res.status(400).send(`Something went wrong!`);
  }
});

app.patch("/user", async (req, res) => {
  try {
    const id = req.body.id;
    const updateData = req.body.updateData;

    const notAllowedUpdate = ["emailId", "firstName", "lastName"];
    const isUpdateAllowed = Object.keys(updateData).every((item) =>
      notAllowedUpdate.includes(item)
    );
    if (isUpdateAllowed) {
      throw new Error("update not allowed!!");
    }

    const user = await User.findByIdAndUpdate(id, updateData, {
      returnDocument: "after",
      runValidators: true,
    });
    res.status(200).json({ success: "true", data: user });
  } catch (error) {
    // res.status(400).send(`Something went wrong!`);
    res.status(400).json({ msg: error.message });
  }
});

// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });

export { app };
