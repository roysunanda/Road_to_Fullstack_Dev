import path from "path";
import express from "express";

import { getAddProducts } from "../controllers/products.js";
import { postAddProducts } from "../controllers/products.js";

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", getAddProducts);

// /admin/add-product => POST
router.post("/add-product", postAddProducts);

export { router };
