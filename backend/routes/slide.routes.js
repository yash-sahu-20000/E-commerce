import express from "express";
import {
  getSlides,
  createSlide,
  updateSlide,
  deleteSlide,
} from "../controllers/slide.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getSlides);
router.post("/", protect,  createSlide);
router.put("/:id", protect,  updateSlide);
router.delete("/:id", protect,  deleteSlide);


export default router;
