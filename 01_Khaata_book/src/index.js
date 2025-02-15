import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join("src", "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`\nserver is listening on port: ${port}`);
});
