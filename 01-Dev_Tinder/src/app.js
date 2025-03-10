import express from "express";
import morgan from "morgan";

import { userModel as User } from "./models/user-model.js";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

// app.post("/signup", async (req, res) => {
//   // console.log(req.body);
//   const user = new User(req.body);
//   try {
//     await user.save();
//     res.status(200).send(`user added successfully!`);
//   } catch (error) {
//     res.status(400).send(`Something went wrong!`);
//   }
// });

// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     // console.log(users.length);
//     res.status(200).send(users);
//   } catch (error) {
//     res.status(400).send(`Something went wrong!`);
//   }
// });

// app.get("/user", async (req, res) => {
//   try {
//     const user = await User.findOne({ emailId: req.body.email });
//     if (!user) {
//       return res.status(404).send(`user not found`);
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(400).send(`Something went wrong!`);
//   }
// });

// app.get("/:id", async (req, res) => {
//   try {
//     // console.log(req.params.id);
//     const id = req.params.id;
//     const user = await User.findById(id);
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(400).send(`Something went wrong!`);
//   }
// });

// app.delete("/:id", async (req, res) => {
//   try {
//     // console.log(req.params.id);
//     const id = req.params.id;
//     const user = await User.findByIdAndDelete(id);
//     res.status(200).json({ status: "success", data: user });
//   } catch (error) {
//     res.status(400).send(`Something went wrong!`);
//   }
// });

// app.patch("/user", async (req, res) => {
//   try {
//     const id = req.body.id;
//     const data = req.body.data;
//     const user = await User.findByIdAndUpdate(
//       id,
//       { firstName: data },
//       { returnDocument: "after" }
//     );
//     res.status(200).json({ status: "success", data: user });
//   } catch (error) {
//     res.status(400).send(`Something went wrong!`);
//   }
// });

app.get("/", (req, res) => {
  res.json({ success: true });
});

export { app };
