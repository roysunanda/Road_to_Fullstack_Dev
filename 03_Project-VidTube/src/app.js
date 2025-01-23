import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router as healthcheckRouter } from "./routes/healthcheck.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Common middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
// app.use("/api/v1/healthcheck", healthcheckRouter);

export { app };
