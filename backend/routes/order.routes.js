import express from "express";
import {
  getOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";

import { protect, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getOrders);
router.put("/:id/status", protect, verifyAdmin, updateOrderStatus);

export default router;
