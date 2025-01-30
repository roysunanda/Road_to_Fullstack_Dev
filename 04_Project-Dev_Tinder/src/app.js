import express from "express";

const app = express();
const PORT = 3000;

app.use("/test", (req, res) => {
  res.send(`<h1>first page.</h1>`);
});

app.use("/test/2", (req, res) => {
  res.send(`<h1>this is test page 2.</h1>`);
});

app.use((req, res) => {
  res.send(`<h1>home page.</h1>`);
});

app.listen(PORT, () => {
  console.log(`\nserver is listening on port: ${PORT}`);
});
