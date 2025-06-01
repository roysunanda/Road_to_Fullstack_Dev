import path from "path";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// import { userModel } from "./models/user.model.js";
// import { postModel } from "./models/post-model.js";

dotenv.config();
const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.join("views"));

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// app.use(express.static(path.resolve("public")));

// app.use(morgan("tiny"));

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

// app.post("/create", async (req, res) => {
//   // res.status(200).json({ success: true, msg: "hello!" });
//   const pasw = "sandy";
//   const salt = await bcrypt.genSalt(10);
//   const pass = await bcrypt.hash(pasw, salt);
//   const check = await bcrypt.compare("sandy", pass);
//   // console.log(req.body.pass);
//   res.json({ success: true, msg: pass, isCheck: check });
// });

app.get("/test", (req, res) => {
  res.status(200).send(`hello world!`);
});

//   app.get("/token", (req, res) => {
//   const token = jwt.sign({ name: "sandy" }, "sandy123");
//   res.cookie("token", token, {
//     maxAge: 10000,
//   });
//   res.json({ succes: true });
// });

// app.get("/fetchdata", async (req, res) => {
//   const { token } = req.cookies;
//   // console.log(token);
//   try {
//     const decodedMsg = await jwt.verify(token, "sandy123");
//     res.status(200).json({ msg: decodedMsg });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong!" });
//   }
// });

export { app };
