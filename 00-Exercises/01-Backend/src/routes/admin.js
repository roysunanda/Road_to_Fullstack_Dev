import { Router } from "express";
import path from "path";

const router = Router();

let products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.resolve("views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { router, products };
