import express from "express";
import morgan from "morgan";

// import { User } from "./models/user-model";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true });
});

export { app };
