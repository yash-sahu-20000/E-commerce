import express from "express";
import {
  getSlides,
  createSlide,
  updateSlide,
  deleteSlide,
  getSlide,
} from "../controllers/slide.controller.js";
import { protect, verifyAdmin } from "../middleware/auth.middleware.js";
import multerUpload from "../config/multer.js";

const router = express.Router();

router.get("/", getSlides);
router.get("/:id", protect, verifyAdmin, getSlide);
router.post("/add", protect, verifyAdmin, multerUpload.array('images', 1),  createSlide);
router.put("/:id", protect, verifyAdmin, multerUpload.array('images', 1), updateSlide);
router.delete("/:id", protect, verifyAdmin, deleteSlide);


export default router;
