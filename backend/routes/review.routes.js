import express from "express";
import { protect, verifyUser } from "../middleware/auth.middleware.js";
import { createReview, getReviewsByProduct } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/:productId", getReviewsByProduct);
router.post("/", protect, verifyUser, createReview);

export default router;
