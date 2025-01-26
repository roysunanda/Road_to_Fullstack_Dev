import { Router } from "express";
import path from "path";

const router = Router();

const abs_path = path.resolve("views", "shop.html");

router.get("/", (req, res) => {
  res.sendFile(abs_path);
  // console.log(abs_path);
});

export { router };
