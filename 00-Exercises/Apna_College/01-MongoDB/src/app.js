import express from "express";
import morgan from "morgan";
import path from "path";

// import { User } from "./models/user-model";
import { Chat } from "./models/chat.model.js";
import { chatData } from "./data.js";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
// app.set("views", path.join(import.meta.dirname, "..", "views"));
app.set("views", path.resolve("views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("working");
});

// app.post("/insert", async (req, res) => {
//   try {
//     let allData = await Chat.insertMany(chatData);
//     res.json({ success: true, msg: allData });
//   } catch (error) {
//     console.log(error);
//   }
// });
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    res.render("index", { chats });
  } catch (error) {
    console.log(error);
  }
});

export { app };
