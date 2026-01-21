import express from "express";
import {
  getOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getOrders);
router.put("/:id/status", protect, updateOrderStatus);

export default router;
