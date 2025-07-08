import express from "express";
import morgan from "morgan";
import path from "path";

// import { User } from "./models/user-model";
// import { Chat } from "./models/chat.model.js";
// import { chatData } from "./data.js";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.get("/check", (req, res) => {
  res.send("working!!!");
});

app.get("/", (req, res) => {
  res.render("index");
});

export { app };
