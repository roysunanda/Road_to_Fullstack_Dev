import express from "express";
import path from "path";

import { router as adminRoutes } from "./routes/admin.js";
import { router as shopRoutes } from "./routes/shop.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve("views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`\nServer is listening on port: ${PORT}`);
});
