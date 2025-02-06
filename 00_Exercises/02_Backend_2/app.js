import path from "path";
import express from "express";

import { router as admin } from "./routes/admin.js";
import { router as shop } from "./routes/shop.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("public")));

app.use("/admin", admin);
app.use(shop);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`\nserver is listening on port: ${PORT}`);
});
