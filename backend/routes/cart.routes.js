import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cart.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.put("/", protect, updateCartItem);
router.put("/clearCart", protect, clearCart);
router.delete("/:productId", protect, removeFromCart);

export default router;
