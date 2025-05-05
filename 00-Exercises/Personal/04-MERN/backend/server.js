import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./config/db.js";
import { router as productRoutes } from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server running on PORT: ${PORT}`);
});
