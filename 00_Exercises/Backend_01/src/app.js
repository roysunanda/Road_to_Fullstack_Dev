import express from "express";

import { router as urlRoute } from "./routes/url.route.js";

const app = express();

app.use(express.json());

app.use("/", urlRoute);

export { app };
