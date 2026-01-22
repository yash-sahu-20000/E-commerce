import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import { protect, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, verifyAdmin, createProduct);
router.put("/:id", protect, verifyAdmin, updateProduct);
router.delete("/:id", protect,verifyAdmin, deleteProduct);

export default router;
