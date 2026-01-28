import express from "express";
import {
  createOrder,
  getOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";

import { protect, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, verifyAdmin, getOrders);
router.post("/create-order", protect, createOrder);
router.post("/:id", protect, getUserOrders);
router.put("/:id/status", protect, verifyAdmin, updateOrderStatus);

export default router;
