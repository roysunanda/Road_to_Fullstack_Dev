// import path from "path";
import express from "express";

import { products as data } from "./admin.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = data;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export { router };
