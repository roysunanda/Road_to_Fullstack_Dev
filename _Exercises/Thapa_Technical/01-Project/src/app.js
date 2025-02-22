import path from "path";
import express from "express";
import morgan from "morgan";

import { userModel } from "./models/user.model.js";
import { dummyUsers } from "./data/dummyData.js";
import { validateModel, validateZod } from "./validate/validate.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve("public")));
app.use(morgan("tiny"));

// console.log(path.resolve("src", "data", "dummyData.js"));
// console.log(import.meta.filename);

app.get("/", (req, res) => {
  res.send("working!");
});

// app.get("/data", async (req, res) => {
//   const data = await userModel.find({});
//   res.send(data);
// });

// app.get("/upload", async (req, res) => {
//   const data = await userModel.insertMany(dummyUsers);
//   res.send(data);
// });

// app.post("/create", (req, res) => {
//   // console.log(req.body);
//   const { username, isMarried, password, age, email } = req.body;
//   const validate = validateZod({ username, isMarried, password, age, email });

//   if (!validate.success) {
//     return res.json({
//       success: validate.success,
//       msg: validate.error,
//     });
//   }

//   res.json({ success: validate.success, msg: validate.data });
// });

// app.get("/test", (req, res) => {
//   res.render("index");
// });

app.use((req, res) => {
  res.send(`<h1>Page not Found.</h1>`);
});

export { app };
