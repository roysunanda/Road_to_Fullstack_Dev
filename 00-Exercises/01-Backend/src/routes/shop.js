import { Router } from "express";
import path from "path";

import { products } from "./admin.js";

const router = Router();

const abs_path = path.resolve("views", "shop.html");

router.get("/", (req, res) => {
  console.log(products);
  res.sendFile(abs_path);
  // console.log(abs_path);
});

export { router };
