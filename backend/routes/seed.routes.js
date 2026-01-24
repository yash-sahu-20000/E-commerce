import express from "express";
import { seedProducts } from "../controllers/seed.controller.js";
import { protect, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/products", seedProducts);

export default router;
