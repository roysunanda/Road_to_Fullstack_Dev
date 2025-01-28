import express from "express";
// import path from "path";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`\nServer is listening on port: ${PORT}`);
});
