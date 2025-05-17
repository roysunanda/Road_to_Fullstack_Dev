import express, { json } from "express";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

import { userModel as User } from "../models/user.model.js";
import { validateSignUpData } from "../utils/validation.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;
    // console.log(pass);
    const user = await User.findOne({ emailId: email });
    if (!user) {
      return res.status(400).json({ error: "invalid credentials." });
    }
    const isPassValid = await bcrypt.compare(pass, user.password);
    if (!isPassValid) {
      return res.status(400).json({ error: "invalid credentials." });
    }
    const token = await jwt.sign({ _id: user._id }, "SecrectKey@123");
    // console.log(token);
    res.cookie("token", token);
    res.status(200).json({ msg: "login successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/profile", async (req, res) => {
  const { token } = req.cookies;
  // console.log(cookie);
  try {
    const decodedMsg = await jwt.verify(token, "SecrectKey@123");
    res.status(200).json({ success: true, data: decodedMsg });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/signup", async (req, res) => {
  // const { firstName, lastName, emailId, password, gender } = req.body;
  try {
    // ############# Validate the data
    const validate = validateSignUpData.safeParse(req.body);
    if (!validate.success) {
      return res.status(400).json({
        success: validate.success,
        error: validate.error.errors,
      });
    }

    // ################# Encrypt the data
    const passwordHash = await bcrypt.hash(validate.data.password, 10);
    validate.data.password = passwordHash;

    // Check Password
    const checkPass = await bcrypt.compare("sandy123", passwordHash);
    console.log(checkPass);

    // ################ Response Data
    res.cookie("test", "test12345");
    res.status(200).json({ success: true, data: validate.data });

    // const userData = await User.insertOne(validate.data);
    // res.status(200).json({ success: true, data: userData });
  } catch (error) {
    // res.status(400).send(`Something went wrong!`);
    res.status(500).json({ error: error.message });
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
    const cookie = req.cookies;
    console.log(cookie);
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

export { app };
