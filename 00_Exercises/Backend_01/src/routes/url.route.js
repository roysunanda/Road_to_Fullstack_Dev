import express from "express";
import { handleGenerateNewShortURL } from "../controllers/url.controller.js";
import { URL } from "../models/url.model.js";
const router = express.Router();

router.post("/url", handleGenerateNewShortURL);
router.get("/all", async (req, res) => {
  const urls = await URL.find({});
  // console.log(urls);
  res.status(200).json({ data: urls });
});

router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  // console.log(shortId);
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectURL);
});

export { router };
