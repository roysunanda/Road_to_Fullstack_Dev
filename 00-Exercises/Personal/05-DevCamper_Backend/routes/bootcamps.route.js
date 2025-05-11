import express from "express";
import {
  createBootcamps,
  deleteBootcamps,
  getAllBootcamps,
  getSingleBootcamps,
  updateBootcamps,
} from "../controllers/bootcamps.controller.js";

const app = express();
const router = express.Router();

router.route("/").get(getAllBootcamps).get(createBootcamps);
router
  .route("/:id")
  .get(getSingleBootcamps)
  .patch(updateBootcamps)
  .delete(deleteBootcamps);

export { router };
