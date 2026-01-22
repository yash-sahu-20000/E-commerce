import express from "express";
import {
  getSlides,
  createSlide,
  updateSlide,
  deleteSlide,
} from "../controllers/slide.controller.js";
import { protect, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, verifyAdmin, getSlides);
router.post("/", protect, verifyAdmin,  createSlide);
router.put("/:id", protect, verifyAdmin,  updateSlide);
router.delete("/:id", protect, verifyAdmin, deleteSlide);


export default router;
