import express from "express";

const app = express();
const PORT = 3000;

app.use("/test", (req, res) => {
  res.send(`this is test page.`);
});

app.use((req, res) => {
  res.send(`this is home page.`);
});

app.listen(PORT, () => {
  console.log(`\nserver is listening on port: ${PORT}`);
});
