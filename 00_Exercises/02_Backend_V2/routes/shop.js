// import path from "path";
import express from "express";

import { getProducts } from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

export { router };
